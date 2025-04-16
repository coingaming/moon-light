import React, { forwardRef } from "react";
import Container from "./Container";
import HintText from "./HintText";
import Input from "./Input";
import ShowPassword from "./ShowPassword";
import getBorderRadius from "./utils/getBorderRadius";
import getLabelSize from "./utils/getLabelSize";
import mergeClassnames from "../../mergeClassnames/mergeClassnames";
import type TextInputProps from "../private/types/TextInputProps";

const TextInputPassword = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      id,
      inputSize,
      type,
      disabled,
      placeholder,
      label,
      hintText,
      isError,
      dir,
      showPasswordText,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      bgColor = "bg-primary",
      ...rest
    } = props;

    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePasswordVisibility = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const inputProps = {
      disabled,
      placeholder,
      dir,
      isSharpLeftSide,
      isSharpRightSide,
      isSharpTopSide,
      isSharpBottomSide,
      isTopBottomBorderHidden,
      isSideBorderHidden,
      ...rest,
    };

    if (inputSize === "xl") {
      return (
        <Container disabled={disabled}>
          <div
            className={mergeClassnames(
              "w-full max-w-full relative",
              getBorderRadius(inputSize),
              bgColor && bgColor,
            )}
          >
            <Input
              inputSize={inputSize}
              type={passwordShown ? "text" : "password"}
              isError={isError}
              ref={ref}
              id={id}
              isLabel={!!label}
              isPassword
              {...inputProps}
            />
            <label className="absolute text-body-200 text-secondary top-space-12 z-[1] transition-all start-space-16">
              {label}
            </label>
            <ShowPassword onClick={togglePasswordVisibility}>
              {showPasswordText}
            </ShowPassword>
          </div>
          {hintText && <HintText isError={isError}>{hintText}</HintText>}
        </Container>
      );
    }
    return (
      <Container disabled={disabled}>
        {label && (
          <label
            dir={dir}
            htmlFor={id}
            className={mergeClassnames(
              "block text-primary pb-space-8",
              getLabelSize(inputSize),
            )}
          >
            {label}
          </label>
        )}
        <div
          className={mergeClassnames(
            "w-full max-w-full relative",
            getBorderRadius(inputSize),
          )}
        >
          <Input
            inputSize={inputSize}
            type={passwordShown ? "text" : "password"}
            isError={isError}
            ref={ref}
            id={id}
            bgColor={bgColor}
            isPassword
            {...inputProps}
          />
          <ShowPassword onClick={togglePasswordVisibility}>
            {showPasswordText}
          </ShowPassword>
        </div>
        {hintText && <HintText isError={isError}>{hintText}</HintText>}
      </Container>
    );
  },
);

export default TextInputPassword;
