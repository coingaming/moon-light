import fs from "fs";
import path from "path";
import { readdir } from "node:fs/promises";

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

const buildChangelog = async () => {
  console.log(await retrieveDestinationSet());
};

buildChangelog();
