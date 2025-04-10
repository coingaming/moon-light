import { mergeClassnames } from "@heathmont/moon-base-tw";
import Link from "next/link";
import React from "react";

type RightSidebarItemProps = {
  index: number | string;
  href: string;
  title: string;
  className?: string;
};

const RightSidebarItem = ({
  index,
  href,
  title,
  className,
}: RightSidebarItemProps) => {
  return (
    <li key={index}>
      <Link
        href={`#${href}`}
        className={mergeClassnames(
          "text-body-300 transition-colors hover:underline",
          className,
        )}
      >
        {title}
      </Link>
    </li>
  );
};

export default RightSidebarItem;
