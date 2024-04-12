import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export async function writeToFile({ contentToWrite, path }) {
  if (!contentToWrite) {
    throw new Error("Content for writeToFile function must be provided.");
  }
  if (!path) {
    throw new Error("Path for writeToFile function must be provided.");
  }

  try {
    await fs.writeFile(path, contentToWrite, "utf8");
    console.log(`${path} file has been written successfully.`);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error writing to file:", err.message);
      throw err;
    }
  }
}

export async function hasSubfolders(_path) {
  try {
    const files = await fs.readdir(_path, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        // There is at least one subdirectory
        return true;
      }
    }
    // No subdirectories found
    return false;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error checking folders:", err.message);
      throw err;
    }
  }
}

export async function readFromFile(pathToFile) {
  try {
    const data = await fs.readFile(pathToFile, "utf8");
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error reading from file ${pathToFile}:`, err.message);
      throw err;
    }
  }
}

export async function processFiles(
  dirPath,
  processCallback, // (filePath: string) => Promise<FilesTypes>
) {
  const files = await fs.readdir(dirPath);
  // const result: Record<string, Record<string, unknown> | string[] | string> = {};
  const result = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      const _hasSubfolders = await hasSubfolders(filePath);
      if (_hasSubfolders) {
        result[file] = await processFiles(filePath, processCallback);
      } else if (!file.startsWith("[...")) {
        result[file] = await processCallback(filePath);
      }
    }
    if (stats.isFile()) {
      const extname = path.extname(filePath).toLowerCase();
      const fileName = path.basename(filePath);
      const fileNameWithoutExtension = path.parse(fileName).name;

      if (extname === ".md") {
        result[fileNameWithoutExtension] = "string";
      }
      if (extname === ".json") {
        result[fileNameWithoutExtension] = "string";
      }
    }
  }

  return result;
}

export const getTemplate = (content, template = "example") => {
  switch (template) {
    case "component":
      return `const COMPONENTS = {${content}};

export default COMPONENTS;
`;
    case "example":
    default:
      return `export type Examples = ${content};
`;
  }
};

const getFilesTypes = async (dirPath) => {
  const files = await fs.readdir(dirPath);
  const result = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const fileName = path.basename(filePath);
    const fileNameWithoutExtension = path.parse(fileName).name;
    result[fileNameWithoutExtension] = "string";
  }
  return result;
};

export const buildExamplesType = async () => {
  const components = await processFiles("./app/", getFilesTypes);

  await writeToFile({
    contentToWrite: getTemplate(JSON.stringify(components, null, 2)),
    path: "./app/types.ts",
  });

  const clientComponents = Object.keys(components.client);

  let componentsInTheBuild = [];
  for await (const component of clientComponents) {
    const data = await readFromFile(
      path.join("./app/client", component, "description.md"),
    );
    const mdxSource = await serialize(data, { parseFrontmatter: true });
    componentsInTheBuild.push(
      `"${component}": {
        title: "${mdxSource?.frontmatter?.title}",
        packageName: "${mdxSource?.frontmatter?.packageName}",
        tags: ${
          mdxSource?.frontmatter?.tags
            ? JSON.stringify(mdxSource?.frontmatter?.tags)
            : undefined
        },
        examples: ${
          mdxSource?.frontmatter?.examples
            ? JSON.stringify(mdxSource?.frontmatter?.examples)
            : undefined
        },
      }`,
    );
  }
  await writeToFile({
    contentToWrite: getTemplate(componentsInTheBuild, "component"),
    path: "./components.constants.mjs",
  });

  return components;
};

buildExamplesType();
