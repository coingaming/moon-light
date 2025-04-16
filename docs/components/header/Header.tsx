"use client";

import Link from "next/link";
import Logo from "./Logo";
import SearchButton from "../search/SearchButton";
import ThemeSwitcher from "../settings/ThemeSwitcher";
import RtlSwitcher from "../settings/RtlSwitcher";
import { GenericMenu } from "@heathmont/moon-icons-tw";
import { IconButton } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";
import Menu from "../menu/Menu";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, [setIsOpen]);
  return (
    <>
      <header className="sticky flex top-0 z-50 py-space-16 lg:p-0 lg:h-space-72 justify-between items-center border-b border-primary bg-primary text-primary">
        <div className="w-72 flex items-center lg:border-e lg:border-primary h-full lg:ps-space-24 ps-space-20">
          <Link href="/" aria-label="Home page">
            <Logo />
          </Link>
        </div>
        <Breadcrumbs />
        <div className="flex items-center gap-space-12 lg:gap-space-16 lg:pe-space-24 pe-space-20">
          <div className="hidden lg:block">
            <SearchButton />
          </div>
          <ThemeSwitcher className="hidden lg:block" />
          <RtlSwitcher className="hidden lg:block" />
          <IconButton
            variant="outline"
            size="sm"
            className="rounded-full lg:hidden ring-primary"
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
