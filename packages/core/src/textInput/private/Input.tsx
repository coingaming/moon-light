import React, { forwardRef } from "react";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";
import type TextInputProps from "../private/types/TextInputProps";
import getSizeStyles from "../private/utils/getSizeStyles";
import makeBorder from "../private/utils/makeBorder";

const Input = forwardRef<
  HTMLInputElement,
  TextInputProps & { isLabel?: boolean; isRtl?: boolean; isPassword?: boolean }
>((props, ref) => {
  const {
    bgColor,
    inputSize = "md",
    isError,
    type = "text",
    placeholder = "",
    isLabel,
    isRtl,
    isSharpLeftSide,
    isSharpRightSide,
    isSharpTopSide,
    isSharpBottomSide,
    isTopBottomBorderHidden,
    isSideBorderHidden,
    isFirst,
    isPassword,
    className,
    ...rest
  } = props;
  return (
    <>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={mergeClassnames(
          "block w-full max-w-full py-0 px-space-16 m-0 appearance-none text-body-400 text-primary transition-shadow box-border relative z-[2]",
          "ring-1 ring-inset ring-primary hover:ring-2",
          "focus:ring-2 focus:ring-active focus:outline-none",
          isError &&
            "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative",
          bgColor ? bgColor : "bg-transparent",
          getSizeStyles(inputSize as string),
          "before:box-border after:box-border",
          "placeholder:text-secondary placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75",
          "read-only:outline-0 read-only:border-none read-only:cursor-not-allowed read-only:hover:ring-1 read-only:focus:ring-1 read-only:focus:ring-primary",
          (isSharpLeftSide || isSharpTopSide) && !isError && "rounded-ss-none",
          (isSharpRightSide || isSharpTopSide) && !isError && "rounded-se-none",
          (isSharpLeftSide || isSharpBottomSide) &&
            !isError &&
            "rounded-es-none",
          (isSharpRightSide || isSharpBottomSide) &&
            !isError &&
            "rounded-ee-none",
          "invalid:ring-2 invalid:ring-negative invalid:hover:ring-2 invalid:hover:ring-negative invalid:focus:ring-2 invalid:focus:ring-negative",
          makeBorder(
            isSideBorderHidden,
            isTopBottomBorderHidden,
            isFirst,
            isRtl,
            isError,
          ),
          className && className,
        )}
        {...rest}
      />
    </>
  );
});

export default Input;
