import React from "react";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";

type Props = {
  isError?: boolean;
  children?: React.ReactNode;
};

const HintText = ({ children, isError }: Props) => (
  <p
    role="alert"
    className={mergeClassnames(
      "inline-block mt-space-8 ps-space-16 text-body-200",
      isError ? "text-negative" : "text-secondary",
    )}
  >
    {children}
  </p>
);

export default HintText;
