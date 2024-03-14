import React from "react";
import { useGetExample } from "@/utils/useGetExample";

function parseDescription(description?: string) {
  try {
    if (!description) {
      return '';
    }

    // Split the description into pieces and return the final piece
    const pieces = description.split(/[-]{2,}/g);
    const finalPiece = pieces.pop()?.trim();

    return finalPiece;
  } catch (error) {
    console.error('Error while parsing the description: ', error);
    return '';
  }
}


const ComponentDescription = async ({ component }: { component: string }) => {
  const { description } = (await useGetExample(component)) as {
    description?: string;
  };
  return (
    <>
      {parseDescription(description)}
    </>
  );
};

export default ComponentDescription;
