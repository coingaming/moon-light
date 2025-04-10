"use client";

import { mergeClassnames } from "@heathmont/moon-core-tw";
import React from "react";

type RightSidebarProps = {
  purpose?: string;
  title: string;
  className?: string;
  children?: React.ReactNode[];
};

const RightSidebar = ({
  purpose,
  title,
  className,
  children,
}: RightSidebarProps) => {
  return (
    <aside
      className={mergeClassnames(
        "fixed top-space-72 end-0 w-64 pt-space-24 px-space-12 bg-primary overflow-y-auto border-s border-primary hidden xl:block",
        className,
      )}
    >
      <nav className="flex flex-col gap-space-20" aria-label={purpose}>
        <p className="text-body-100 font-medium uppercase text-secondary">
          {title}
        </p>
        <ul className="flex flex-col gap-space-8">{children}</ul>
      </nav>
    </aside>
  );
};

export default RightSidebar;
