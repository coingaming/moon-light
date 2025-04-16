import { Drawer, IconButton } from "@heathmont/moon-core-tw";
import Sidebar from "../sidebar/Sidebar";
import type Props from "./types/Props";
import Link from "next/link";
import Logo from "../header/Logo";
import SearchButton from "../search/SearchButton";
import ThemeSwitcher from "../settings/ThemeSwitcher";
import { ControlsCloseSmall } from "@heathmont/moon-icons-tw";
import RtlSwitcher from "../settings/RtlSwitcher";

const Menu = ({ isOpen, setIsOpen, handleClick }: Props) => (
  <Drawer open={isOpen} setOpen={setIsOpen}>
    <Drawer.Panel className="flex flex-col w-full lg:hidden">
      <div className="flex-grow flex items-center justify-between border-b border-primary px-space-20 py-space-16">
        <Link href="/" aria-label="Home page">
          <Logo />
        </Link>
        <div className="flex items-center gap-space-12">
          <ThemeSwitcher />
          <RtlSwitcher />
          <IconButton
            variant="outline"
            size="sm"
            className="rounded-full text-heading-200 ring-primary"
            icon={<ControlsCloseSmall />}
            aria-label="Close menu"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="py-space-24 px-space-20 border-b border-primary">
        <SearchButton />
      </div>
      <Sidebar />
    </Drawer.Panel>
  </Drawer>
);

export default Menu;
