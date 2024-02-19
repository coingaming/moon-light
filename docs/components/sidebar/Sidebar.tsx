import SearchButton from "../search/SearchButton";
import navigation from "./Navigation";
import SidebarItem from "./SidebarItem";
import COMPONENTS from "@/components.constants.mjs";

export default function Sidebar() {
  return (
    <div
      className="lg:z-0 z-40 flex flex-col gap-6 top-40 lg:top-[4.5rem] h-screen w-screen lg:w-72 bg-goku overflow-y-scroll lg:border-e lg:border-beerus px-4 py-5 lg:px-3 lg:py-6"
      aria-label="Sidebar"
    >
      <div className="lg:hidden block z-50 fixed top-[4.5rem] start-0 h-[5.5rem] py-6 px-6 border-b border-beerus bg-goku">
        <SearchButton />
      </div>
      <nav className="flex flex-col gap-2" aria-label="Sidebar">
        <p className="ps-2 text-moon-10-caption font-medium uppercase text-trunks">
          Overview
        </p>
        <ul className="flex flex-col gap-2 mb-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <SidebarItem href={item.href}>
                {item.icon}
                {item.name}
              </SidebarItem>
            </li>
          ))}
        </ul>
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
                <SidebarItem href={`/client/${key}`}>{data.title}</SidebarItem>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
