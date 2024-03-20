import fs from "fs";
import path from "path";
import { readdir } from "node:fs/promises";
import { readFromFile } from "./buildExamplesType.mjs";

const BASEDIR = path.join(path.resolve(), '../');
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

const splitVersions = (parts) => {
  return parts.map((part) => {
    const version = part.replace(/^([\d\.]+).+/gms, "$1");
    const pattern = new RegExp(`^${version}[^#]+`, 'gms');
    const changes = part.replace(pattern, '');
    console.log(changes);
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
  return contents.map((content) => parseData(content));
}

const buildChangelog = async () => {
  const selectedFiles = await retrieveDestinationSet();
  console.log(await getData(selectedFiles));
};

buildChangelog();
