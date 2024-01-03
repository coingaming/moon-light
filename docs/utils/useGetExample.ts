import { cache } from "react";
import "server-only";
import { getExamples } from "./getExamples";

export const preload = (name: string) => {
  void useGetExample(name);
};

export const useGetExample = cache(async (name: string) => {
  const { client } = await getExamples();

  return client?.[name as keyof typeof client];
});
