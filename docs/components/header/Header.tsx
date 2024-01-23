import Link from "next/link";
import Logo from "./Logo";

export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="sticky top-0 z-10">
      <div className=" h-[4.5rem] flex flex-row text-bulma bg-goku border-b border-beerus">
        <div className="h-full w-72 border-e border-beerus flex items-center ps-6">
          <Link href="/" aria-label="Home page">
            <Logo />
          </Link>
        </div>
        <div className="p-6 h-full flex items-center hidden lg:block">
          {children}
        </div>
      </div>
    </header>
  );
};
