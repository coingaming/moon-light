import React from "react";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

type Props = {
  children?: React.ReactNode | (() => React.ReactNode);
  className?: string;
};

const Badge: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={mergeClassnames(
        "bg-discovery rounded-full min-w-space-8 min-h-space-8 size-fit px-space-4 py-0 text-force-light inline-block text-body-200",
        className,
      )}
    >
      {typeof children === "function" ? children() : children}
    </div>
  );
};

export default Badge;
