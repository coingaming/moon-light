import COMPONENTS from "@/components.constants.mjs";
import { useGetExample } from "@/utils/useGetExample";
import { writeFile } from "fs/promises";

type ComponentEntry = {
  index: number;
  component: string;
};

const storeAs = "/../../../generated/componentDescriptions.ts";
const descriptionMap = new Map();

const arrangeText = (contents: string) => {
  let output = contents.split('\n').join("\\n");
  output = output.split('","').join('",\n\t"');
  output = output.split('":"').join('": "');
  output = output.split('{').join("{\n\t");
  output = output.split('}').join("\n}");
  output = output.split('<br />').join("");
  return output;
}

const storeDataSet = async () => {
  const controller = new AbortController();
  const contents = arrangeText(JSON.stringify(Object.fromEntries(descriptionMap)));
  const data = new Uint8Array(Buffer.from(`const componentDescriptions = ${contents};${"\n"}export default componentDescriptions;${"\n"}`));
  const { signal } = controller;
  const storePath = __dirname + storeAs;
  await writeFile(storePath, data, { signal });
}

const getIgnoreCaseEntry = (input: Array<string>, value: string) => {
  const index = input.findIndex((item) => item.toLowerCase() === value.toLocaleLowerCase());
  return index < 0 ? { index: -1, component: null } : { index, component: input[index] };
}

const loadExamplesData = async (components: string[]) => {
  const settings = await Promise.all(components.map((component: string) => {
    return useGetExample(component);
  }));

  return settings as { description: string }[];
}

const retrieveTitle = (data: string) => data.replace(/.*title:\s+(\w+).*/gms, "$1");

const retrieveText = (data: string) => {
  const splittedData = data.split(/[-]{2,}/g);
  const lastPart = splittedData.pop();
  return lastPart?.trim();
}

const populateDataSet = (
  descriptions: { description: string }[],
  components: string[]
) => {
  descriptions.forEach(({ description }) => {
    const title = retrieveTitle(description);
    const { index, component } = getIgnoreCaseEntry(components, title) as ComponentEntry;
    if (index >= 0) {
      const text = retrieveText(description);
      descriptionMap.set(component, text);
    }
  });
}

const generateComponentDescriptions = async () => {
  const components = Object.keys(COMPONENTS);
  const descriptions = await loadExamplesData(components);
  
  populateDataSet(descriptions, components);
  storeDataSet();
}

export default generateComponentDescriptions;
