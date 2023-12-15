import { getExamples } from "@/utils/getExamples";
import SidebarItem from "../sidebar/SidebarItem";

export default async function ProductSidebar({ name }: { name: string }) {
  const { server, client } = await getExamples();
  return (
    <aside className="fixed z-10 flex flex-shrink-0 flex-col top-[4.5rem] end-0 w-72 flex-grow gap-6 pt-12 px-6 bg-goku overflow-y-scroll border-s border-beerus hidden lg:inline">
      <nav className="flex flex-col gap-6" aria-label="Sidebar">
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-14-caption font-medium text-bulma">
            On this page
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {Object.entries(
              client?.[name as keyof typeof client]?.examples,
            ).map(([key]) => (
              <li key={key}>
                <SidebarItem href={`#${key}`}>{key}</SidebarItem>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
