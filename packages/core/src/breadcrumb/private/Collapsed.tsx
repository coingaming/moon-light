import React, { useState } from "react";
import type Props from "./types/Props";
import IconButton from "../../iconButton/IconButton";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";
import useClickOutside from "../../private/hooks/useClickOutside";
import ArrowsRight from "../../private/icons/ArrowsRight";
import Other3DotsHorizontal from "../../private/icons/Other3DotsHorizontal";

const Collapsed = ({ breadcrumbs, divider }: Props) => {
  const [isOpen, toggleDropdown] = useState(false);
  const [ref, hasClickedOutside] = useClickOutside();
  const restBreadcrumbs: React.ReactNode[] = [];
  const collapseBreadcrumbs = breadcrumbs
    .map((crumb, index) => {
      if (index === 0) return crumb;
      if (index > breadcrumbs.length - 3) {
        return crumb;
      } else {
        restBreadcrumbs.push(crumb);
      }
    })
    .filter((crumd) => crumd);
  const clickHandle = () => toggleDropdown(!isOpen);
  React.useEffect(() => {
    if (hasClickedOutside) {
      toggleDropdown(false);
    }
  });
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-space-8 items-center text-body-300">
        <li
          key={"crumb" + 0}
          className="flex items-center gap-space-8 text-secondary"
        >
          <span className="text-secondary transition-colors duration-200 hover:text-primary">
            {collapseBreadcrumbs && collapseBreadcrumbs[0]}
          </span>
          {divider ? divider : <ArrowsRight className="rtl:rotate-180" />}
        </li>
        {restBreadcrumbs?.length !== 0 && (
          <li key={"crumb" + 1} ref={ref} className="relative">
            <IconButton
              variant="ghost"
              size="xs"
              onClick={clickHandle}
              icon={<Other3DotsHorizontal className="text-body-400" />}
              aria-label="Show more breadcrumbs"
            />
            {isOpen && (
              <ol className="absolute start-0 top-full bg-primary p-space-4 mt-space-12 flex flex-col gap-space-8 shadow-400 rounded-12 z-10000 min-w-space-136">
                {restBreadcrumbs.map((crumb, index) => (
                  <li
                    key={"innercrumb" + index}
                    className="flex flex-col items-stretch text-primary text-body-300 p-space-8 rounded-4 cursor-pointer transition-colors hover:bg-hover"
                  >
                    {crumb}
                  </li>
                ))}
              </ol>
            )}
          </li>
        )}
        {collapseBreadcrumbs?.length !== 0 &&
          collapseBreadcrumbs.map((crumb, index) => {
            if (index === 0) return null;
            return (
              <li
                key={"crumb" + index + 1}
                className="flex items-center gap-space-8 text-secondary"
              >
                {divider ? (
                  divider
                ) : (
                  <ArrowsRight className="rtl:rotate-180 text-body-400" />
                )}
                <span
                  className={mergeClassnames(
                    "text-secondary transition-colors duration-200 hover:text-primary",
                    index === collapseBreadcrumbs.length - 1 &&
                      "text-primary font-medium",
                  )}
                >
                  {crumb && crumb}
                </span>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default Collapsed;
