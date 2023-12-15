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
  const breadcrumbsPath = [<Link href="/">Home</Link>].concat(
    pages.map((page, index) => {
      let pageLink = page;
      switch (page) {
        case "client":
          pageLink = "#";
          break;
        default:
          break;
      }
      return (
        <Link href={pageLink} key={index}>
          {page && page[0].toUpperCase() + page.slice(1)}
        </Link>
      );
    })
  );
  return <Breadcrumb divider="/" breadcrumbs={breadcrumbsPath} />;
};

export default Breadcrumbs;
