import { promises as fs } from "fs";
import path from "path";

const getAllWords = async () => {
  try {
    const fileContent = await fs.readFile("../words.txt", "utf8");
    return fileContent?.split("\n");
  } catch (err) {
    console.log("file words.txt not found");
  }
};

const writeAllWords = async (words) => {
  try {
    await fs.writeFile("../words.txt", words.join("\r\n") + "\r\n", "utf8");
    console.log("file words.txt written, alphabetical re-order");
  } catch (err) {
    console.log("error in the file write");
  }
};

const buildDict = async () => {
  const ret = await getAllWords();
  const uniques = [...new Set(ret)];
  const currentWords = ret.length;
  const outputWords = uniques.length;
  if (outputWords !== currentWords) {
    console.log("words duplicated purged:", currentWords - outputWords);
  } else {
    console.log("no words duplicated found");
  }

  await writeAllWords(
    uniques.filter(Boolean).sort((a, b) => {
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      if (b.toLowerCase() > a.toLowerCase()) {
        return -1;
      }
      return 0;
    }),
  );
};

buildDict();
