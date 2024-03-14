import React from "react";
import { readFromFile } from "@/utils/getExamples";

const ComponentDescription = async ({ filename }: { filename: string }) => {
  const md = await readFromFile(
    `${__dirname}/../../../app/client/${filename}/description.md`,
  );
  return (
    <>
      {md
        ?.split(/[-]{2,}/g)
        .pop()
        ?.trim() || ""}
    </>
  );
};

export default ComponentDescription;
