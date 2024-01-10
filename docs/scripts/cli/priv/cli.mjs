import { Command } from "commander";
import { runPa11yTest } from "./pa11y.mjs";
import { generateFiles } from "./generate.mjs";

class CLI {
  constructor() {
    this.program = new Command();
    this.setup();
  }

  setup() {
    this.program
      .name("moon-cli")
      .description("CLI to some moon.io utils")
      .version("0.0.2");

    this.banner();

    // Generate CMD
    this.program
      .command("generate")
      .description("Generate the entry in the file project")
      .argument("<type>", "Right now this can be only 'example'")
      .option("--component <component>", "The component of this example")
      .option("--name <name>", "The name of the example")
      .option("--title <title>", "The title of the example (optional)")
      .action(async (arg, options) => {
        await generateFiles(arg, options);
      });

    // pa11y CMD
    this.program
      .command("pa11y")
      .description("Test pa11y")
      .argument("<component>", "Name of the component to test")
      .action(async (arg) => {
        await runPa11yTest(arg);
      });
  }

  parse() {
    this.program.parse();
  }

  banner() {
    console.log(`Experimental Moon.io CLI`);
  }
}

export default CLI;
