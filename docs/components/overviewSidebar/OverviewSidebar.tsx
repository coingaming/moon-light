import React from "react";
import SidebarItem from "../sidebar/SidebarItem";

interface Title {
  id: string;
  subtitle: string;
}

interface OverviewSidebarProps {
  subtitles: Title[];
}

const OverviewSidebar: React.FC<OverviewSidebarProps> = ({ subtitles }) => {
  return (
    <aside className="fixed flex flex-shrink-0 top-[4.5rem] end-0 w-72 flex-grow pt-4 px-8 bg-goku overflow-y-scroll border-s border-beerus hidden lg:inline">
      <nav className="flex flex-col gap-6" aria-label="Sidebar">
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-14-caption font-medium text-bulma">
            On this page
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {subtitles.map((title, index) => (
              <li key={index}>
                <SidebarItem href={`#${title.id}`}>
                  {title.subtitle}
                </SidebarItem>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default OverviewSidebar;
