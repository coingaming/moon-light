import { getExamples } from "@/utils/getExamples";
import { serialize } from "next-mdx-remote/serialize";

const getData = async (name: string): Promise<[string, string][]> => {
  const { client } = await getExamples();
  const componentName = name as keyof typeof client;
  const componentData = client?.[componentName];
  const titles =
    Object.keys(client?.[componentName]?.descriptions)?.map?.(
      async (key: string) => {
        const exampleKey = key as keyof typeof componentData.descriptions;
        let title;
        if (componentData?.descriptions?.[exampleKey]) {
          title = (
            await serialize(
              componentData?.descriptions?.[exampleKey] as string,
              {
                parseFrontmatter: true,
              },
            )
          )?.frontmatter?.title;
        }
        return [title, key];
      },
    ) || [];

  return (await Promise.all(titles)) as [string, string][];
};

export default getData;
