import fs from "fs";
import path from "path";

function buildContribution() {
  // Define the path to the README.md file
  const readmePath = path.resolve("../CONTRIBUTING.md");

  // Read the contents of the README.md file
  let readmeContents = fs.readFileSync(readmePath, "utf8");

  // Escape backticks and ${ in the readmeContents
  readmeContents = readmeContents.replace(/`/g, "\\`").replace(/\${/g, "\\${");

  // Define the path to the output .ts file
  const outputPath = path.resolve("generated/contribution.ts");

  // Assign the contents of the README.md file to a variable
  const readmeString = `const Contribution = \`${readmeContents}\`;
export default Contribution;
`;

  // Write the variable to the .ts file
  fs.writeFileSync(outputPath, readmeString);
}

buildContribution();
