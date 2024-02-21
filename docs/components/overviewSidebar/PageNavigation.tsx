import { ReactElement } from "react";

const PageNavigation = ({ children }: { children: ReactElement[] }) => (
  <aside className="fixed top-[72px] end-0 w-72 pt-4 px-6 bg-goku overflow-y-scroll border-s border-beerus hidden lg:block">
    <nav className="flex flex-col gap-2" aria-label="Sidebar">
      <p className="ps-2 text-moon-14 font-medium text-bulma">On this page</p>
      <ul className="flex flex-col gap-2">{children}</ul>
    </nav>
  </aside>
);

export default PageNavigation;
