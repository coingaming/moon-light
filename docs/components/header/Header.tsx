"use client";

import Link from "next/link";
import Logo from "./Logo";
import SearchButton from "../search/SearchButton";
import ThemeSwitcher from "../settings/ThemeSwitcher";
import { ControlsCloseSmall, GenericMenu } from "@heathmont/moon-icons-tw";
import { Chip } from "@heathmont/moon-core-tw";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 h-[4.5rem] border-b border-beerus bg-goku test-bulma ">
        <div className="flex justify-between items-center h-full">
          <div className="w-72 flex items-center lg:border-e lg:border-beerus h-full lg:ps-8 ps-5">
            <Link href="/" aria-label="Home page" className="w-full text-bulma">
              <Logo />
            </Link>
          </div>
          <div className="p-6 h-full flex grow items-center hidden lg:block">
            {children}
          </div>
          <div className="flex flex-row gap-4 lg:pe-5 pe-4">
            <div className="hidden lg:block">
              <SearchButton />
            </div>
            <ThemeSwitcher />
            <Chip
              className="rounded-full hover:bg-transparent hover:text-bulma overflow-visible w-10 lg:hidden block"
              iconOnly={
                isOpen ? (
                  <ControlsCloseSmall className="text-moon-24" />
                ) : (
                  <GenericMenu className="text-moon-24" />
                )
              }
              aria-label="Open menu"
              onClick={handleClick}
            />
          </div>
        </div>
      </header>
      {isOpen && <Sidebar />}
    </>
  );
};

<div className="lg:hidden block h-[4.5rem] px-1 py-6 border-b border-beerus">
  <SearchButton />
</div>;
