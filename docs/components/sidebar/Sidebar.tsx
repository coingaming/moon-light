import navigation from "./navigation";
import SidebarItem from "./SidebarItem";
import COMPONENTS from "@/components.constants.mjs";

const Sidebar = () => (
  <nav
    className="flex flex-col gap-6 h-full w-full lg:w-72 bg-goku overflow-y-scroll border-e border-beerus px-3 py-6"
    aria-label="Sidebar"
  >
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
      Components
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
);

export default Sidebar;
