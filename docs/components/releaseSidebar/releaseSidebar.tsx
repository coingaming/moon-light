import React from "react";
import Link from "next/link";
import { LogItem } from "@/app/releases/page";

const ReleaseSidebar = ({
  items
}: { items: LogItem[] }) => {
  return (
    items.length && <aside className="fixed top-[72px] end-0 w-64 pt-6 px-3 bg-goku overflow-y-scroll border-s border-beerus hidden xl:block">
      <nav className="flex flex-col gap-5" aria-label="Page navigation">
        <p className="text-moon-10-caption font-medium uppercase text-trunks">
          Releases
        </p>
        <ul className="flex flex-col gap-2">
          {items.map((item: LogItem) => {
            return (
              <li key={item.logKey}>
                <Link
                  href={`#${item.logKey}`}
                  className="text-moon-14 transition-colors hover:underline"
                >
                  {item.header}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default ReleaseSidebar;
