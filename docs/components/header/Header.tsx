"use client";

import Link from "next/link";
import Logo from "./Logo";
import SearchButton from "../search/SearchButton";
import ThemeSwitcher from "../settings/ThemeSwitcher";
import { ControlsCloseSmall, GenericMenu } from "@heathmont/moon-icons-tw";
import { IconButton } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Version from "./Version";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);

  return (
    <>
      <header className="sticky flex top-0 z-50 h-[72px] justify-between items-center border-b border-beerus bg-goku text-bulma">
        <div className="w-72 flex gap-3 items-center lg:border-e lg:border-beerus h-full lg:ps-6 ps-5">
          <Link href="/" aria-label="Home page">
            <Logo />
          </Link>
          <Version />
        </div>
        <div className="px-6 h-full hidden grow items-center lg:flex">
          <Breadcrumbs />
        </div>
        <div className="flex gap-4 lg:pe-6 pe-5">
          <div className="hidden lg:block">
            <SearchButton />
          </div>
          <ThemeSwitcher />
          <IconButton
            variant="outline"
            className="rounded-full lg:hidden block text-moon-24"
            icon={isOpen ? <ControlsCloseSmall /> : <GenericMenu />}
            aria-label="Open menu"
            onClick={handleClick}
          />
        </div>
      </header>
      {isOpen && <Sidebar />}
    </>
  );
};
