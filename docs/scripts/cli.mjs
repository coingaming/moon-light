import { Command } from "commander";
import { promises as fs } from "fs";
import path from "path";

// pnpm run doc moon-cli generate example
const program = new Command();

export function generateFilesContent(component, name, title) {
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
  const _e2e = `test('${name}: should render and match screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot(\`${component}-${name}.png\`, {
        maxDiffPixelRatio: MAX_DIFF_PIXEL_RATIO
    })
})
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
    console.log("Experimental Moon.io CLI");
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

program.parse();
