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
        "fixed top-[104px] end-0 w-64 pt-6 px-3 bg-goku overflow-y-auto border-s border-beerus hidden xl:block",
        className,
      )}
    >
      <nav className="flex flex-col gap-5" aria-label={purpose}>
        <p className="text-moon-10-caption font-medium uppercase text-trunks">
          {title}
        </p>
        <ul className="flex flex-col gap-2">{children}</ul>
      </nav>
    </aside>
  );
};

export default RightSidebar;
