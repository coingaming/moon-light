import { promises as fs } from "fs";
import path from "path";

const TYPES_GENERATION = ["example"];

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

export async function generateFiles(arg, options) {
  if (!TYPES_GENERATION.includes(arg)) {
    console.log("You should select a valid type for the generation");
    return;
  }
  if (
    typeof options.component !== "string" ||
    typeof options.name !== "string"
  ) {
    console.log("[!] name and component is mandatory");
    return;
  }

  try {
    fs.stat(`docs/app/client/${options.component}`);
  } catch (err) {
    console.log(`[!!] Component ${options.component} not exists`);
    return;
  }

  const filesContent = generateFilesContent(
    options.component,
    options.name,
    options.title,
  );
  if (typeof options.title === "string" && options.title?.length > 0) {
    /**
     * Documentation
     */
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
    /**
     * Example
     */
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

    /**
     * E2E
     */
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
}
