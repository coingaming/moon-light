import { Command } from "commander";
import pa11y from "pa11y";
import { promises as fs } from "fs";
import path from "path";

const program = new Command();

program
  .name("moon-cli")
  .description("CLI to some moon.io utils")
  .version("0.0.1");

runTest();
// getAllUrls();
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

async function runTest() {
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
