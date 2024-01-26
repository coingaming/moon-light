import Link from "next/link";
import Logo from "./Logo";
import SearchButton from "../search/SearchButton";
import Settings from "../settings/Settings";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="sticky top-0 z-10 h-[4.5rem] border-b border-beerus bg-goku test-bulma">
      <div className="flex justify-between items-center h-full">
        <div className="w-72 flex items-center border-e border-beerus p-5">
          <Link href="/" aria-label="Home page" className="w-full">
            <Logo />
          </Link>
        </div>
        <div className="p-6 h-full flex grow items-center hidden lg:block">
          {children}
        </div>
        <div className="flex flex-row gap-4 pe-5">
          <SearchButton />
          <Settings />
        </div>
        {/* <div className="flex flex-row justify-between w-full">
        <div className="p-6 h-full flex items-center hidden lg:block">
          {children}
        </div>
        <div className="flex flex-row gap-4">
          <SearchButton />
          <Settings />
        </div>
      </div> */}
      </div>
    </header>
  );
};
