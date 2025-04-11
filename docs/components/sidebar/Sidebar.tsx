import navigation from "./navigation";
import SidebarItem from "./SidebarItem";
import COMPONENTS from "@/components.constants.mjs";

const Sidebar = () => (
  <nav
    className="flex flex-col gap-space-24 h-full w-full lg:w-72 bg-primary overflow-y-auto lg:border-e lg:border-primary px-space-12 py-space-24"
    aria-label="Sidebar"
  >
    <p className="ps-space-8 text-body-100 font-medium uppercase text-secondary">
      Overview
    </p>
    <ul className="flex flex-col gap-space-8 mb-space-16">
      {navigation.map((item) => (
        <li key={item.name}>
          <SidebarItem href={item.href}>
            {item.icon}
            {item.name}
          </SidebarItem>
        </li>
      ))}
    </ul>
    <p className="ps-space-8 text-body-100 font-medium uppercase text-secondary">
      Components
    </p>
    <ul role="list" className="flex flex-col gap-space-4">
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
