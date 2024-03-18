"use client";

import MenuItem from "@heathmont/moon-core-tw/lib/es/menuItem/MenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const SidebarItem = ({ href, children, onClick }: Props) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <MenuItem
      as={Link}
      href={href}
      isActive={isActive}
      onClick={onClick}
      className="justify-start"
    >
      {children}
    </MenuItem>
  );
};

export default SidebarItem;
