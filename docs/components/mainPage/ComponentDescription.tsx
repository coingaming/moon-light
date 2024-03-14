import React from "react";
import { useGetExample } from "@/utils/useGetExample";

const ComponentDescription = async ({ component }: { component: string }) => {
  const { description } = (await useGetExample(component)) as {
    description?: string;
  };
  return (
    <>
      {description
        ?.split(/[-]{2,}/g)
        .pop()
        ?.trim() || ""}
    </>
  );
};

export default ComponentDescription;
