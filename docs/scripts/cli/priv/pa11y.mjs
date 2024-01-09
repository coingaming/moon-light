import { promises as fs } from "fs";
import path from "path";
import pa11y from "pa11y";
import { Table } from "console-table-printer";

// Pa11y Options
const PA11Y_OPTIONS = {
  log: {
    debug: (e) => {},
    error: (e) => {},
    info: (e) => {},
  },
  ignore: ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail"],
};

// Test URL local
const TEST_URL = `http://localhost:3000/client/`;

// Component path
const COMPONENT_PATH = "./app/client/";

export async function runPa11yTest(name) {
  try {
    const urls = await getAllUrls(name);
    for (let i = 0; i < urls.length; i++) {
      const item = urls[i];
      const result = await pa11y(item, PA11Y_OPTIONS);
      const names = item?.split?.("/");
      const componentN = names?.[names?.length - 2];
      const exampleN = names?.[names?.length - 1];
      let issues = [];
      if (Array.isArray(result?.issues) && result?.issues?.length > 0) {
        issues.push({
          example: exampleN,
          component: componentN,
          issues: result.issues,
        });
        console.log(
          `Component ${componentN} / ${exampleN}: Issues found: ${
            result.issues?.length || 0
          }`,
        );
      } else {
        console.log(`Component ${componentN} / ${exampleN}: No issues found`);
      }
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
            maxLen: 30,
            alignment: "left",
            color: "yellow",
          },
          {
            name: "message",
            maxLen: 60,
            color: "red",
            alignment: "left",
          },
          {
            name: "code",
            maxLen: 20,
            color: "yellow",
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
              Index: name,
              Example: element.example,
              selector,
              message,
              code,
            });
            p.addRow({
              Index: "",
              Example: "",
              selector: "",
              message: "",
              code: "",
            });
          });
        }
      }

      if (countIssues > 0) {
        p.printTable();
      }
    }
  } catch (err) {
    console.log("err:", err.message);
  }
}

async function getAllUrls(name) {
  const exampleDir = path.join(COMPONENT_PATH, name, "examples/");
  const examples = await fs.readdir(exampleDir);
  const examplesFilenames = examples.map((item) => item.replace(".tsx", ""));

  return (
    examplesFilenames?.map?.((example) => {
      return `${TEST_URL}${name}/${example}`;
    }) || []
  );
}
