"use server";

import { getExamples } from "@/utils/getExamples";
import SidebarItem from "../sidebar/SidebarItem";
import { serialize } from "next-mdx-remote/serialize";

type titleType = [string, string];

export const getData = async (name: string): Promise<[string, string][]> => {
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
              }
            )
          )?.frontmatter?.title;
        }
        return [title, key];
      }
    ) || [];

  return (await Promise.all(titles)) as [string, string][];
};

export default async function ProductSidebar({ name, contents }: any) {
  const titles = await getData(name);
  return (
    <aside className="fixed z-10 flex flex-shrink-0 top-[4.5rem] end-0 w-72 flex-grow pt-4 px-8 bg-goku overflow-y-scroll border-s border-beerus hidden lg:inline">
      <nav className="flex flex-col gap-6" aria-label="Sidebar">
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-14-caption font-medium text-bulma">
            On this page
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {contents.map((key: string) => {
              const title = titles.find(
                (title: titleType) => title[1] === key
              )?.[0];
              return (
                <li key={key}>
                  <SidebarItem href={`#${key}`}>{title || key}</SidebarItem>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
