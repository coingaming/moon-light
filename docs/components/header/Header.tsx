"use client";

import Link from "next/link";
import Logo from "./Logo";
import SearchButton from "../search/SearchButton";
import ThemeSwitcher from "../settings/ThemeSwitcher";
import RTLSwitcher from "../settings/RTLSwitcher";
import { GenericMenu } from "@heathmont/moon-icons-tw";
import { IconButton } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";
import Menu from "../menu/Menu";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Version from "./Version";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);
  return (
    <>
      <header className="sticky flex top-0 z-50 py-4 lg:p-0 lg:h-[72px] justify-between items-center border-b border-beerus bg-goku text-bulma">
        <div className="w-72 flex items-center gap-3 lg:border-e lg:border-beerus h-full lg:ps-6 ps-5">
          <Link href="/" aria-label="Home page">
            <Logo />
          </Link>
          <Version />
        </div>
        <Breadcrumbs />
        <div className="flex items-center gap-3 lg:gap-4 lg:pe-6 pe-5">
          <div className="hidden lg:block">
            <SearchButton />
          </div>
          <ThemeSwitcher />
          <RTLSwitcher />
          <IconButton
            variant="outline"
            size="sm"
            className="rounded-full lg:hidden"
            icon={<GenericMenu />}
            aria-label="Open menu"
            onClick={handleClick}
          />
        </div>
      </header>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} handleClick={handleClick} />
    </>
  );
};
