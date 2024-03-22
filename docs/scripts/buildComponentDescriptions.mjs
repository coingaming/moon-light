import path from "path";
import COMPONENTS from "../components.constants.mjs"
import { useGetExample } from "./getExamples.mjs";
import { writeFile } from "fs/promises";

const storeAs = "/generated/componentDescriptions.ts";
const descriptionMap = new Map();

/**
 * Makes edits to the text data
 * @param {string} contents - data to arrange.
 */
const arrangeText = (contents) => {
  return contents.replace(/<br \/>/gsm, "");
};

/**
 * Converts data from the Map dataset to the JSON-like byte stream
 */
const prepareData = () => {
  const contents = arrangeText(JSON.stringify(Object.fromEntries(descriptionMap)));
  return new Uint8Array(Buffer.from(`const componentDescriptions = ${contents};\nexport default componentDescriptions;\n`));
};

/**
 * Stores prepared data into the specified file
 */
const storeDataSet = async () => {
  const controller = new AbortController();
  const { signal } = controller;
  const data = prepareData();
  const storePath = path.join(path.resolve(), storeAs);
  await writeFile(storePath, data, { signal });
};

/**
 * Retrieves and returns an entry from the list of component names
 * by comparing with the value
 * @param {array} input - array of the component names.
 * @param {string} value - data to find.
 */
const getIgnoreCaseEntry = (input, value) => {
  const index = input.findIndex(
    (item) => item.toLowerCase() === value.toLocaleLowerCase(),
  );
  return index < 0
    ? { index: -1, component: null }
    : { index, component: input[index] };
};

/**
 * Retrieves info about the components
 * @param {array} components - names of components.
 */
const loadExamplesData = async (components) => {
  const settings = await Promise.all(
    components.map((component) => {
      return useGetExample(component);
    }),
  );

  return settings;
};

/**
 * Retrieves the title name of the component
 * @param {string} data - component info.
 */
const retrieveTitle = (data) =>
  data.replace(/.*title:\s+(\w+).*/gms, "$1");

/**
 * Retrieves the text of the component description
 * @param {string} data - component info.
 */
const retrieveText = (data) => {
  const splittedData = data.split(/[-]{2,}/g);
  const lastPart = splittedData.pop();
  return lastPart?.trim();
};

/**
 * Fills the Map with named descriptions of the components
 * @param {array} descriptions - the descriptions ot the components.
 * @param {array} components - the names ot the components.
 */
const populateDataSet = (
  descriptions,
  components,
) => {
  descriptions.forEach(({ description }) => {
    const title = retrieveTitle(description);
    const { index, component } = getIgnoreCaseEntry(
      components,
      title,
    );
    if (index >= 0) {
      const text = retrieveText(description);
      descriptionMap.set(component, text);
    }
  });
};

/**
 * Generates a file with component descriptions
 */
const buildComponentDescriptions = async () => {
  const components = Object.keys(COMPONENTS);
  const descriptions = await loadExamplesData(components);

  populateDataSet(descriptions, components);
  storeDataSet();
};

buildComponentDescriptions();
