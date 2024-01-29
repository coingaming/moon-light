import SearchButton from "../search/SearchButton";
import SidebarItem from "./SidebarItem";
import COMPONENTS from "@/components.constants.mjs";

export default function Sidebar() {
  return (
    <nav
      className="lg:z-0 z-40 flex flex-col gap-6 fixed top-40 lg:top-[4.5rem] h-screen w-screen lg:w-72 bg-goku overflow-y-scroll lg:border-e lg:border-beerus px-4 py-5 lg:px-3 lg:py-6"
      aria-label="Sidebar"
    >
      <div className="lg:hidden block z-50 fixed top-[4.5rem] start-0 w-screen h-[5.5rem] py-6 px-6 border-b border-beerus bg-goku">
        <SearchButton />
      </div>
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
                <SidebarItem href={`/client/${key}`}>{data.title}</SidebarItem>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
    // </aside>
  );
}
