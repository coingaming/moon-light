import React, { useState, useEffect } from "react";
import Collapsed from "./private/Collapsed";
import Extended from "./private/Extended";
import type Props from "./private/types/Props";

const Breadcrumb = ({ breadcrumbs, divider }: Props) => {
  const [collapseAfter, setCollapseAfter] = useState(4);

  useEffect(() => {
    const updateCollapseAfter = () => {
      setCollapseAfter(window.innerWidth < 768 ? 2 : 4);
    };
    window.addEventListener("resize", updateCollapseAfter);
    updateCollapseAfter();
    return () => window.removeEventListener("resize", updateCollapseAfter);
  }, []);

  if (!breadcrumbs) return null;
  const isCollapse = breadcrumbs.length > collapseAfter;

  // we can then identify the last breadcrumb to set aria-current
  const lastBreadcrumbIndex = breadcrumbs.length - 1;

  return (
    <nav aria-label="breadcrumb">
      {isCollapse ? (
        <Collapsed
          breadcrumbs={breadcrumbs}
          divider={divider}
          lastBreadcrumbIndex={lastBreadcrumbIndex}
        />
      ) : (
        <Extended
          breadcrumbs={breadcrumbs.map((breadcrumb, index) =>
            React.cloneElement(breadcrumb, {
              "aria-current": index === lastBreadcrumbIndex ? "page" : undefined,
            })
          )}
          divider={divider}
        />
      )}
    </nav>
  );
};

export default Breadcrumb;
