import { Drawer, IconButton } from "@heathmont/moon-core-tw";
import Sidebar from "../sidebar/Sidebar";
import type Props from "./types/Props";
import Link from "next/link";
import Logo from "../header/Logo";
import SearchButton from "../search/SearchButton";
import ThemeSwitcher from "../settings/ThemeSwitcher";
import { ControlsCloseSmall } from "@heathmont/moon-icons-tw";
import Version from "../header/Version";

const Menu = ({ isOpen, setIsOpen, handleClick }: Props) => (
  <Drawer open={isOpen} setOpen={setIsOpen}>
    <Drawer.Panel className="flex flex-col w-full lg:hidden">
      <div className="flex-grow flex items-center justify-between border-b border-beerus px-5 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Home page">
            <Logo />
          </Link>
          <Version />
        </div>
        <div className="flex gap-3">
          <ThemeSwitcher />
          <IconButton
            variant="outline"
            className="rounded-full text-moon-24"
            icon={<ControlsCloseSmall />}
            aria-label="Close menu"
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="py-6 px-5 border-b border-beerus">
        <SearchButton />
      </div>
      <Sidebar />
    </Drawer.Panel>
  </Drawer>
);

export default Menu;
