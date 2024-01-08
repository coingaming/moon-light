import { Command } from "commander";
import { promises as fs } from "fs";
import path from "path";
import pa11y from "pa11y";
import { Table } from "console-table-printer";

const program = new Command();

program
  .name("moon-cli")
  .description("CLI to some moon.io utils")
  .version("0.0.2");

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
    await runTest(arg);
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

async function getAllUrls(name) {
  const componentsPath = "./app/client/";
  let components = {};
  console.log("checking", name);
  const exampleDir = path.join(componentsPath, name, "examples/");
  const examples = await fs.readdir(exampleDir);
  const examplesFilenames = examples.map((item) => item.replace(".tsx", ""));

  return (
    examplesFilenames?.map?.((example) => {
      return `http://localhost:3000/client/${name}/${example}`;
    }) || []
  );
}

async function runTest(componentName) {
  try {
    const urls = await getAllUrls(componentName);
    if (!urls || urls.length === 0) {
      return;
    }
    const options = {
      log: {
        debug: (e) => {},
        error: (e) => {},
        info: (e) => {},
      },
    };
    let issues = [];
    for (let i in urls) {
      const item = urls[i];
      const result = await pa11y(item, options);
      const names = item?.split?.("/");
      const componentN = names?.[names?.length - 2];
      const exampleN = names?.[names?.length - 1];

      if (Array.isArray(result?.issues) && result?.issues?.length > 0) {
        issues.push({
          example: exampleN,
          component: componentN,
          issues: result.issues,
        });
        console.log(
          `Component ${componentN} / ${exampleN}: Issues found ${
            result.issues?.length || 0
          }`,
        );
      } else {
        console.log(`Component ${componentN} / ${exampleN}: No issues found`);
      }
    }

    console.log(`-----------------------------------`);

    const p = new Table({
      columns: [
        {
          name: "Index",
          alignment: "left",
        },
        {
          name: "Example",
          alignment: "left",
        },
        {
          name: "selector",
          maxLen: 40,
          alignment: "left",
          color: "yellow",
        },
        {
          name: "message",
          maxLen: 100,
          color: "red",
          alignment: "left",
        },
      ],
    });
    let countIssues = 0;
    for (let i in issues) {
      const element = issues[i];
      if (element.issues?.length > 0) {
        element.issues.forEach(({ message, selector, code }) => {
          countIssues += 1;
          p.addRow({
            Index: componentName,
            Example: element.example,
            selector,
            message,
          });
          p.addRow({
            Index: "",
            Example: "",
            selector: "",
            message: "",
          });
        });
      }
    }

    if (countIssues > 0) {
      p.printTable();
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
