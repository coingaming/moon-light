import fs from "fs";
import path from "path";
import { readdir } from "node:fs/promises";
import { readFromFile } from "./buildExamplesType.mjs";
import { writeFile } from "fs/promises";

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
 * Loads the contents from the specified files,
 * manages their conversion, and returns them
 * as the object structure
 * @param {array} filePaths - paths to files to load.
 */
const getData = async (filePaths) => {
  const contents = await loadContents(filePaths);
  return contents.reduce((acc, content, index) => {
    const section = filePaths[index].replace(BASEDIR, '').replace(/\/[^\/]+$/, '');
    /* return { [section]: parseData(content) } */
    acc[section] = content;
    return acc;
  }, {});
}

/**
 * Converts data from the object structure to the JSON-like byte stream
 * @param {string} data - data to convert.
 */
const prepareData = (data) => {
  const contents = JSON.stringify(data);
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
