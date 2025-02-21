import "server-only";
import { getExamples } from "./getExamples";
import { GenericExampleTypePartial } from "@/types";

export const preload = (name: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  void useGetExample(name);
};

export const useGetExample = async (
  name: string,
): Promise<GenericExampleTypePartial | undefined> => {
  const { client } = await getExamples();

  return client?.[name as keyof typeof client];
};
