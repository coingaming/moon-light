import { cache } from "react";
import "server-only";
import { getExamples } from "./getExamples";
import { GenericExampleTypePartial } from "@/types";

export const preload = (name: string) => {
  void useGetExample(name);
};

export const useGetExample = cache(
  async (name: string): Promise<GenericExampleTypePartial | undefined> => {
    const { client } = await getExamples();

    return client?.[name as keyof typeof client];
  },
);
