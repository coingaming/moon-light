import React from "react";
import type Props from "./types/Props";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";
import ArrowsRight from "../../private/icons/ArrowsRight";

const Extended = ({ breadcrumbs, divider }: Props) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap gap-2 items-center text-body-300">
      {breadcrumbs.length > 0 &&
        breadcrumbs.map((crumb, index) => (
          <li
            key={"crumb" + index}
            className="flex items-center gap-2 text-secondary"
          >
            {index !== 0 &&
              (divider ? (
                divider
              ) : (
                <ArrowsRight className="rtl:rotate-180 text-body-400" />
              ))}
            <span
              className={mergeClassnames(
                "text-secondary transition-colors duration-200 hover:text-primary",
                index === breadcrumbs.length - 1 && "text-primary font-medium",
              )}
            >
              {crumb && crumb}
            </span>
          </li>
        ))}
    </ol>
  </nav>
);

export default Extended;
