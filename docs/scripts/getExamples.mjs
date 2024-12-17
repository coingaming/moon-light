import { promises as fs } from "fs";
import path from "path";
import { hasSubfolders, readFromFile } from "./buildExamplesType.mjs";

/**
 * Checks if the directory is empty
 */
async function isEmptyDirectory(_path) {
  try {
    const files = await fs.readdir(_path);
    return files.length === 0;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error checking directory Empty:", err.message);
      throw err;
    }
  }
}

/**
 * Manages reading and processing the contents of the files
 * @param {string} dirPath - path to the directory.
 * @param {function} processCallback - callback function to process file content.
 */
async function processFiles(dirPath, processCallback) {
  const files = await fs.readdir(dirPath);
  const result = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (file.startsWith("[...]")) continue;
    if (stats.isDirectory()) {
      result[file] = await handleDirectory(filePath, processCallback);
    } else if (stats.isFile()) {
      await handleFile(filePath, result);
    }
  }

  return result;
}

/**
 * Manages file reading from а directory (and its subdirectories if exist)
 * @param {string} dirPath - path to the directory.
 * @param {function} processCallback - callback function to process file content.
 */
async function handleDirectory(dirPath, processCallback) {
  const hasSubfoldersDir = await hasSubfolders(dirPath);

  if (hasSubfoldersDir) {
    return await processFiles(dirPath, processCallback);
  }

  const isEmpty = await isEmptyDirectory(dirPath);

  if (!isEmpty) {
    return await processCallback(dirPath);
  }
}

/**
 * Reads a file content
 * @param {string} filePath - the path to the file to read.
 * @param {object} resultObj - storage object for the read content.
 */
async function handleFile(filePath, resultObj) {
  const extname = path.extname(filePath).toLowerCase();
  const fileName = path.basename(filePath);
  const fileNameWithoutExtension = path.parse(fileName).name;

  if ([".md", ".json"].includes(extname)) {
    const content = await readFromFile(filePath);
    resultObj[fileNameWithoutExtension] = content || "";
  }
}

/**
 * A callback function that reads the specified file content
 * @param {string} dirPath - path to the file.
 */
const getFilesContent = async (dirPath) => {
  const files = await fs.readdir(dirPath);
  const result = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const fileName = path.basename(filePath);
    const fileNameWithoutExtension = path.parse(fileName).name;
    const content = await readFromFile(filePath);
    result[fileNameWithoutExtension] = content;
  }
  return result;
};

/**
 * Retrieves contents of the files containing
 * data about examples of the components
 */
async function getExamples() {
  const components = await processFiles("./app/", getFilesContent);

  return components;
}

/**
 * Returns data about examples of the components
 */
export const useGetExample = async (name) => {
  const { client } = await getExamples();

  return client?.[name];
};
