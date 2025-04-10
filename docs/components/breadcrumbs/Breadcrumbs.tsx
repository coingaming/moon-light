"use client";

import { Breadcrumb } from "@heathmont/moon-core-tw";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [_, ...pages] = pathname === "/" ? [] : pathname.split("/");
  if (pathname === "/") {
    return null;
  }

  const HomeLink = <Link href="/">Home</Link>;

  const formatPageLink = (page: string) => (page === "client" ? "#" : page);

  const restPages = pathname
    .split("/")
    .filter((page) => page !== "")
    .map((page, index) => (
      <Link href={formatPageLink(page)} key={index}>
        {page && page[0].toUpperCase() + page.slice(1)}
      </Link>
    ));

  return (
    <div className="px-space-24 h-full hidden grow items-center lg:flex">
      <Breadcrumb divider="/" breadcrumbs={[HomeLink, ...restPages]} />
    </div>
  );
};

export default Breadcrumbs;
