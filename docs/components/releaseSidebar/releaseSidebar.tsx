import React from "react";
import { LogItem } from "@/app/releases/page";
import RightSidebar from "../sidebar/RightSidebar";
import RightSidebarItem from "../sidebar/RightSidebarItem";

const ReleaseSidebar = ({ items }: { items: LogItem[] }) =>
  items.length && (
    <RightSidebar
      purpose="Release navigation"
      title="Packages"
      className="xl:block"
    >
      {items.map((item: LogItem, index) => (
        <RightSidebarItem
          key={index}
          index={item.logKey}
          href={item.header}
          title={item.header}
        />
      ))}
    </RightSidebar>
  );

export default ReleaseSidebar;
