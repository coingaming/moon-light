import SearchButton from "../search/SearchButton";
import SidebarItem from "./SidebarItem";
import COMPONENTS from "@/components.constants.mjs";

export default async function Sidebar() {
  return (
    <aside className="fixed z-10 top-[4.5rem] h-screen flex flex-col w-72 gap-6 p-3 pb-52 bg-goku overflow-y-scroll border-e border-beerus">
      <div>
        <SearchButton />
      </div>
      <nav className="flex flex-col gap-6" aria-label="Sidebar">
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-10-caption font-medium uppercase text-trunks">
            Client components
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {Object.keys(COMPONENTS).map((key: string) => {
              const data = COMPONENTS[key as keyof typeof COMPONENTS] as {
                title: string;
              };
              return (
                <li key={key}>
                  <SidebarItem href={`/client/${key}`}>
                    {data.title}
                  </SidebarItem>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
