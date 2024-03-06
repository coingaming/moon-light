const PageNavigation = ({ children }: { children: React.ReactElement[] }) => (
  <aside className="fixed top-[72px] end-0 w-72 pt-6 px-3 bg-goku overflow-y-scroll border-s border-beerus hidden xl:block">
    <nav className="flex flex-col gap-6" aria-label="Page navigation">
      <p className="ps-2 text-moon-10-caption font-medium uppercase text-trunks">
        On this page
      </p>
      <ul className="flex flex-col gap-1">{children}</ul>
    </nav>
  </aside>
);

export default PageNavigation;
