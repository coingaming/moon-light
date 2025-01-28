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
        "bg-hit rounded-full min-w-2 min-h-2 w-fit h-fit px-1 py-0 text-goten inline-block font-dm-sans font-normal text-xs",
        className,
      )}
    >
      {typeof children === "function" ? children() : children}
    </div>
  );
};

export default Badge;
