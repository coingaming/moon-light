import { getExamples } from "@/utils/getExamples";
import SidebarItem from "../sidebar/SidebarItem";
import { serialize } from "next-mdx-remote/serialize";

type titleType = [string, string];

export default async function ProductSidebar({
  name,
  contents,
}: {
  name: string;
  contents: string[];
}) {
  const { client } = await getExamples();
  const componentName = name as keyof typeof client;
  const componentData = client?.[componentName];

  const titles =
    contents?.map?.(async (key: string) => {
      const exampleKey = key as keyof typeof componentData.descriptions;
      let title;
      if (componentData?.descriptions?.[exampleKey]) {
        title = (
          await serialize(componentData?.descriptions?.[exampleKey] as string, {
            parseFrontmatter: true,
          })
        )?.frontmatter?.title;
      }
      return [(title as string | undefined) || key, key] as titleType;
    }) || [];

  return (
    <aside className="fixed z-10 flex flex-shrink-0 top-[4.5rem] end-0 w-72 flex-grow pt-4 px-8 bg-goku overflow-y-scroll border-s border-beerus hidden lg:inline">
      <nav className="flex flex-col gap-6" aria-label="Sidebar">
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-14-caption font-medium text-bulma">
            On this page
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {/* TODO: Refactor better than using await */}
            {(await Promise.all(titles)).map(([title, key]: titleType) => (
              <li key={key}>
                <SidebarItem href={`#${key}`}>{title}</SidebarItem>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
