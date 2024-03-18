import { promises as fs } from "fs";
import path from "path";
import { hasSubfolders, readFromFile } from "./buildExamplesType.mjs"

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
 * Reads files from а directory
 * and processes them depending on
 * their extensions
 * @param {string} dirPath - path to the directory.
 * @param {function} processCallback - callback function to process file content.
 */
async function processFiles(
  dirPath,
  processCallback,
) {
  const files = await fs.readdir(dirPath);
  const result = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (file?.startsWith("[...")) {
    } else if (stats.isDirectory()) {
      const _hasSubfolders = await hasSubfolders(filePath);
      if (_hasSubfolders) {
        result[file] = await processFiles(filePath, processCallback);
      } else {
        const isEmpty = await isEmptyDirectory(filePath);
        if (!isEmpty) {
          result[file] = await processCallback(filePath);
        }
      }
    } else if (stats.isFile()) {
      const extname = path.extname(filePath).toLowerCase();
      const fileName = path.basename(filePath);
      const fileNameWithoutExtension = path.parse(fileName).name;

      if (extname === ".md") {
        const content = await readFromFile(filePath);
        result[fileNameWithoutExtension] = content;
      }
      if (extname === ".json") {
        const content = await readFromFile(filePath);
        result[fileNameWithoutExtension] = content || "";
      }
    }
  }

  return result;
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
  const components = (await processFiles(
    "./app/",
    getFilesContent,
  ));

  return components;
}

/**
 * Returns data about examples of the components
 */
export const useGetExample = async (name) => {
  const { client } = await getExamples();

  return client?.[name];
};