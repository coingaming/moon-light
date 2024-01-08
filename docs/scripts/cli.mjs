import { Command } from "commander";
import { promises as fs } from "fs";
import path from "path";

const program = new Command();

program
  .name("moon-cli")
  .description("CLI to some moon.io utils")
  .version("0.0.1");

program
  .command("generate")
  .description("Generate the entry in the file project")
  .argument("<type>", "Right now this can be only 'example'")
  .option("--component <component>", "The component of this example")
  .option("--name <name>", "The name of the example")
  .option("--title <title>", "The title of the example (optional)")
  .action(async (arg, options) => {
    banner();
    let valid = true;
    if (!["example"].includes(arg)) {
      valid = false;
      console.log("You should select a valid type for the generation");
    }
    if (
      !(typeof options.component === "string") ||
      !(typeof options.name === "string")
    ) {
      valid = false;
      program.help();
      console.log("[!] name and component is mandatory");
    }

    if (valid) {
      try {
        fs.stat(`docs/app/client/${options.component}`);
      } catch (err) {
        valid = false;
        console.log(`[!!] Component ${options.component} not exists`);
      }
    }

    if (valid) {
      const filesContent = generateFilesContent(
        options.component,
        options.name,
        options.title,
      );
      if (typeof options.title === "string" && options.title?.length > 0) {
        // Documentation
        try {
          await fs.access(filesContent.documentation.path, fs.constants.F_OK);
          console.log(
            `[!!] File ${filesContent.documentation.path} already exists`,
          );
        } catch (err) {
          console.log(`[!] Creating ${filesContent.documentation.path}...`);
          await writeToFile({
            contentToWrite: filesContent.documentation.content,
            path: filesContent.documentation.path,
          });
        }
      }
      // Component
      try {
        await fs.access(filesContent.example.path, fs.constants.F_OK);
        console.log(`[!!] File ${filesContent.example.path} already exists`);
      } catch (err) {
        console.log(`[!] Creating ${filesContent.example.path}...`);
        await writeToFile({
          contentToWrite: filesContent.example.content,
          path: filesContent.example.path,
        });
      }

      // e2e
      try {
        await fs.access(filesContent.e2e.path, fs.constants.F_OK);
        console.log(`[!!] Adding to ${filesContent.e2e.path} e2e test`);
        await fs.appendFile(
          filesContent.e2e.path,
          filesContent.e2e.content,
          "utf-8",
        );
      } catch (err) {
        console.log(`[!!] Not exists e2e file ${filesContent.e2e.path}...`);
      }
    }
  });

program
  .command("pa11y")
  .description("Test pa11y")
  .argument("<component>", "Name of the component to test")
  .action(async (arg, options) => {
    banner();
    console.log(arg);
  });

program.parse();

function banner() {
  console.log("Experimental Moon.io CLI");
}

function generateFilesContent(component, name, title) {
  const _documentation = `---
title: ${title || name}
---
`;
  const _example = `"use client";

import React from "react";
export const ${name} = () => {
    return <div />
}

export default ${name}
`;
  const _e2e = `\ntest.describe("${name} tests", () => {
  test('${name}: should render and match screenshot', async ({ page }) => {
      await expect(page).toHaveScreenshot(\`${component}-${name}.png\`)
  });
});
`;
  return Object.assign(
    {},
    {
      documentation: {
        content: _documentation,
        path: path.join(
          `docs/app/client/${component}/descriptions`,
          `${name}.md`,
        ),
      },
      example: {
        content: _example,
        path: path.join(`docs/app/client/${component}/examples`, `${name}.tsx`),
      },
      e2e: {
        content: _e2e,
        path: path.join(`docs/e2e/`, `${component}.spec.ts`), // CARE THIS JUST ADD THE END OF THE FILE
      },
    },
  );
}

async function writeToFile({ contentToWrite, path }) {
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

async function getAllUrls() {
  const componentsPath = "./app/client/";
  const componentsNames = await fs.readdir(componentsPath);
  let components = {};
  for (let i in componentsNames) {
    const n = componentsNames[i];
    const exampleDir = path.join("./app/client/", n, "examples/");
    const examples = await fs.readdir(exampleDir);
    components[n] = examples.map((item) => item.replace(".tsx", ""));
  }
  console.log(components);
  let ret = [];
  Object.keys(components).forEach((n) => {
    if (Array.isArray(components[n])) {
      components[n].forEach((example) => {
        ret.push(`http://localhost:3000/client/${n}/${example}`);
      });
    }
  });
  return ret;
}

async function runTest(componentName) {
  try {
    const urls = await getAllUrls();
    // const urls = [`http://localhost:3000/client/tagsInput/Default`];
    const options = {
      log: {
        debug: console.log,
        error: console.error,
        info: console.log,
      },
    };
    let issues = [];
    for (let i in urls) {
      const item = urls[i];
      const result = await pa11y(item, options);
      if (Array.isArray(result.issues) && result.issues.length > 0) {
        const names = result.pageUrl.split("/");
        const exm = names[names.length - 1];
        const m = exm.split("?raw="); // todo: to change
        issues.push({
          example: m[m.length - 1],
          component: m[0],
          issues: result.issues,
        });
      }
    }
    for (let i in issues) {
      const element = issues[i];
      if (element.issues?.length > 0) {
        console.log(
          `[!] Component ${element.component}, example: ${element.example}, found ${element.issues.length} issues`,
        );
        element.issues.forEach(({ message, selector, code }) => {
          console.log(`\tError: ${code}`);
          console.log(`\tSelector: ${selector}`);
          console.log(`\tMessage: ${message}`);
        });
      } else {
        console.log(
          `[!] Component ${element.component}, example: ${element.example}, OK!`,
        );
      }
    }
  } catch (error) {
    console.log("Error", error.message);
  }
}

function groupArr(data, n) {
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
}
