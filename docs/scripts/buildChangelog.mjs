import fs from "fs";
import path from "path";
import { readdir } from "node:fs/promises";
import { readFromFile } from "./buildExamplesType.mjs";
import { writeFile } from "fs/promises";

const LEVEL_TAB = 2; /* Reserved for the future */
const BASEDIR = path.join(path.resolve(), '../');
const storeAs = 'docs/generated/changelog.ts';
const searchFor = ['CHANGELOG.md'];
const scanMap = [
  'docs/CHANGELOG.md',
  'packages/',
];

/**
 * Checks if the specified path is a file of required type
 * (specified in the "searchFor" array)
 * @param {string} fullPath - a qualified path to check.
 */
const isValidFile = (fullPath) => {
  if (!fs.existsSync(fullPath) || !fs.lstatSync(fullPath).isFile()) return false;
  return searchFor.includes(path.basename(fullPath));
}

/**
 * Checks if the specified path is a directory
 * @param {string} fullPath - a qualified path to check.
 */
const isValidDirectory = (fullPath) => fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory();

/**
 * Scans a specified directory recursively to find the files to load,
 * and returns the list of paths of the available files found there
 * @param {string} dir - a qualified directory path to scan.
 */
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

/**
 * Scans the specified locations to find the files to load,
 * and returns the list of paths of the available files
 */
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

/**
 * Loads contents of the specified files
 * @param {array} filePaths - a set of file paths to load.
 */
const loadContents = async (filePaths) => {
  return await Promise.all(filePaths.map(async (filePath) => {
    return await readFromFile(filePath);
  }));
}

/**
 * Picks a header of the file content
 * @param {string} content - a file text data.
 */
const pickHeader = (content) => content.replace(/^#\s([^\n]+).+/ms, "$1");

/**
 * Crops the version number of the data block,
 * and returns it with the rest of the data block
 * as an object structure
 * @param {string} content - a chunk of the text.
 */
const cropVersion = (content) => {
  const version = content.replace(/^([\d\.]+).+/gms, "$1");
  const pattern = new RegExp(`^${version}[^#]+`, 'gms');
  const tailPart = content.replace(pattern, '');
  return { version, tailPart };
}

/**
 * Picks a specific type of the data block
 * such as "major", "minor" or "patch",
 * and its description;
 * returns them as an object structure
 * @param {string} content - version content.
 */
const cropChangesType = (content) => {
  return {
    type: content.replace(/^([^\s]+).+$/gms, "$1").toLowerCase(),
    description: content.split(/\n{2,}/gms).splice(1)[0]
  };
};

/**
 * Splits the description by the lines,
 * and returns them as an array
 * @param {string} content - description content.
 */
const splitDescription = (content) => {
  const parts = content.trim().split(/\n+/gms);
  /** TODO: If necessary, make the parsing into tree */
  return parts;
}

/**
 * Splits the version content into the parts,
 * splits them into types and its descriptions;
 * returns them as an object structure
 * @param {string} content - version content.
 */
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

/**
 * Splits each part of the content
 * into specific blocks of versions
 * and data about their changes;
 * returns them as an object structure
 * @param {array} parts - version data chunks.
 */
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

/**
 * Picks the header and version data from a file content
 * and returns them as an object structure
 * @param {string} content - data to handle.
 */
const parseData = (content) => {
  const versionParts = content.split(/[^#]{1}##\s/gms);
  return {
    header: pickHeader(versionParts[0]),
    versions: splitVersions(versionParts.splice(1))
  };
}

/**
 * Loads the contents from the specified files,
 * manages their conversion, and returns them
 * as the object structure
 * @param {array} filePaths - paths to files to load.
 */
const getData = async (filePaths) => {
  const contents = await loadContents(filePaths);
  return contents.map((content, index) => {
    const section = filePaths[index].replace(BASEDIR, '').replace(/\/[^\/]+$/, '');
    return { [section]: parseData(content) }
  });
}

/**
 * Makes edits to the text data
 * @param {string} contents - data to arrange.
 */
const arrangeText = (contents) => {
  const tabulate = (input) => {
    let level = 0;
    return input.split('\n')
      .map((line) => {
        if (line.includes('}') || line.includes(']')) level--;
        let newLine = level > 0 ? "\t".repeat(level) + line : line;
        if (line.includes('{') || line.includes('[')) level++;
        return newLine;
      })
      .join('\n');
  };

  const results = contents.replace(/","/g, '",\n"')
    .replace(/":{/g, '": {')
    .replace(/":\[/g, '": [')
    .replace(/},/g, '},\n')
    .replace(/\[/g, '[\n')
    .replace(/\]/g, '\n]')
    .replace(/{/g, '{\n')
    .replace(/}/g, '\n}');

  return tabulate(results);
};

/**
 * Converts data from the object structure to the JSON-like byte stream
 * @param {string} data - data to convert.
 */
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

/**
 * Manages the process of data assembly, conversion, and storage
 */
const buildChangelog = async () => {
  const selectedFiles = await retrieveDestinationSet();
  const data = await getData(selectedFiles);
  await storeDataSet(data);
};

buildChangelog();
