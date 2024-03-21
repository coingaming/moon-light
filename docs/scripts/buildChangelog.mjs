import fs from "fs";
import path from "path";
import { readdir } from "node:fs/promises";
import { readFromFile } from "./buildExamplesType.mjs";
import { writeFile } from "fs/promises";

const LEVEL_TAB = 2;
const BASEDIR = path.join(path.resolve(), '../');
const storeAs = 'docs/generated/changelog.ts';
const searchFor = ['CHANGELOG.md'];
const scanMap = [
  'docs/CHANGELOG.md',
  'packages/',
];

const isValidFile = (fullPath) => { 
  if (!fs.existsSync(fullPath) || !fs.lstatSync(fullPath).isFile()) return false;
  return searchFor.includes(path.basename(fullPath));
}
const isValidDirectory = (fullPath) => fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory();

const scanDirectory = async (dir) => {
  const entities = await readdir(dir, { withFileTypes: true });
  
  const files = await Promise.all(entities.map(async entity => {
      const filePath = path.join(entity.path, entity.name);
      const stats = fs.lstatSync(filePath);
      if (stats.isDirectory()) return scanDirectory(filePath);
      if (isValidFile(filePath)) return [filePath];
  }));

  return files.reduce((all, file) => { 
    if (file) all.push(...file); return all;
  }, []);
}

const retrieveDestinationSet = async () => {
  return scanMap.reduce(async (paths, location) => {
    const fullPath = path.join(BASEDIR, location);
    if (isValidFile(fullPath)) {
      paths.push(fullPath);
    } else if (isValidDirectory(fullPath)) {
      (await paths).push(...await scanDirectory(fullPath));
    }
    return paths;
  }, []);
}

const loadContents = async (filePaths) => {
  return await Promise.all(filePaths.map(async (filePath) => {
    return await readFromFile(filePath);
  }));
}

const pickHeader = (content) => content.replace(/^#\s([^\n]+).+/ms, "$1");

const cropVersion = (content) => {
  const version = content.replace(/^([\d\.]+).+/gms, "$1");
  const pattern = new RegExp(`^${version}[^#]+`, 'gms');
  const tailPart = content.replace(pattern, '');
  return { version, tailPart };
}

const cropChangesType = (content) => {
  return {
    type: content.replace(/^([^\s]+).+$/gms, "$1").toLowerCase(),
    description: content.split(/\n{2,}/gms).splice(1)[0]
  };
};

const splitDescription = (content) => {
  const parts = content.trim().split(/\n+/gms);
  /** TODO: If necessary, make the parsing into tree */
  return parts;
}

const splitChanges = (content) => {
  const parts = content.split('### ').splice(1);
  return parts.map((part) => {
    const { type, description } = cropChangesType(part);
    return {
      type,
      description: splitDescription(description)
    }
  });
}

const splitVersions = (parts) => {
  return parts.map((part) => {
    const { version, tailPart } = cropVersion(part);
    const changes = splitChanges(tailPart);
    return {
      version,
      changes
    }
  });
}

const parseData = (content) => {
  const versionParts = content.split(/[^#]{1}##\s/gms);
  return {
    header: pickHeader(versionParts[0]),
    versions: splitVersions(versionParts.splice(1))
  };
}

const getData = async (filePaths) => {
  const contents = await loadContents(filePaths);
  return contents.map((content, index) => {
    const section = filePaths[index].replace(BASEDIR, '').replace(/\/[^\/]+$/, '');
    return {[section]: parseData(content)} 
  });
}

/**
 * Places tab characters in structured text data
 * @param {string} contents - data to arrange.
 */
const tabulate = (contents) => {
  let level = 0;
  const lines = contents.split('\n')
    .map((line) => {
      if (line.match(/[\}\]]/)) level--;
      if (level > 0) line = "\t".repeat(level) + line;
      if (line.match(/[\{\[]/)) level++;
      return line;
    });
  return lines.join('\n');
}

/**
 * Makes edits to the text data
 * @param {string} contents - data to arrange.
 */
const arrangeText = (contents) => {
  return tabulate(contents.split('","').join('",\n"')
    .split('":"').join('": "')
    .split('":{').join('": {')
    .split('":[').join('": [')
    .split('},').join('},\n')
    .split("[").join("[\n")
    .split("]").join("\n]")
    .split("{").join("{\n")
    .split("}").join("\n}"));
};

const prepareData = (data) => {
  const contents = arrangeText(JSON.stringify(data));
  return new Uint8Array(Buffer.from(`const changeLogs = ${contents};\nexport default changeLogs;\n`));
};

/**
 * Stores prepared data into the specified file
 */
const storeDataSet = async (data) => {
  const controller = new AbortController();
  const { signal } = controller;
  const stream = prepareData(data);
  const storePath = path.join(BASEDIR, storeAs);
  await writeFile(storePath, stream, { signal });
};

const buildChangelog = async () => {
  const selectedFiles = await retrieveDestinationSet();
  const data = await getData(selectedFiles);
  await storeDataSet(data);
};

buildChangelog();
