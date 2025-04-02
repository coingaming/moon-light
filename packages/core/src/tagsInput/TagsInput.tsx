import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Listbox } from "@headlessui/react";
import SelectedItemProps from "./private/types/SelectedItemProps";
import { TagsInputRootProps } from "./private/types/TagsInputRootProps";
import getTextSize from "./private/utils/getTextSize";
import getWrapperStyle from "./private/utils/getWrapperStyle";
import {
  TagsInputContext,
  useTagsInputContext,
} from "./private/utils/useTagsInputContext";
import { Input as NativeInput, SelectButton, mergeClassnames } from "../index";
import {
  ARROW_KEYS,
  ArrowKeysType,
  KEYS,
} from "./private/types/navigationTagsTypes";
import {
  NO_FOCUS_TAG,
  useNavigationTags,
} from "./private/utils/useNavigationTags";

const TagsInputRoot = forwardRef<HTMLSpanElement, TagsInputRootProps>(
  (
    {
      label,
      children,
      selected = [],
      type = "text",
      size = "md",
      className,
      placeholder,
      disabled,
      isError,
      onEnter,
      onClear,
      isUppercase,
      id = "",
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");
    const { onKeyDownNavigationTags, selectedTagIndex, setSelectedTagIndex } =
      useNavigationTags(selected.length);

    const selectTagOnClick = (newIndex: number) => {
      setSelectedTagIndex(newIndex);
      inputRef.current?.focus();
    };

    const states = {
      isUppercase,
      value: selected,
      size: size,
      disabled: disabled,
      isError: isError || isInvalid,
      onClear: onClear,
      selectedTagIndex,
      selectTagOnClick,
    };

    const checkValidity = (event: React.FormEvent<HTMLInputElement>) => {
      const target = event.target as HTMLInputElement;
      const validity = target.validity;

      if (!target.value.length) {
        target.value = "";
        setIsInvalid(validity.valueMissing);
        return;
      }

      setIsInvalid(
        validity.typeMismatch ||
          validity.patternMismatch ||
          validity.tooLong ||
          validity.tooShort ||
          validity.rangeUnderflow ||
          validity.rangeOverflow ||
          validity.stepMismatch ||
          validity.badInput ||
          validity.customError,
      );
    };

    const clearTags = (keyCode: KEYS, value: string) => {
      if (
        keyCode !== KEYS.BACKSPACE ||
        value.length ||
        !selected.length ||
        !onClear
      ) {
        return;
      }

      if (selectedTagIndex !== NO_FOCUS_TAG) {
        onClear(selectedTagIndex);
        setSelectedTagIndex(NO_FOCUS_TAG);
        return;
      }

      setSelectedTagIndex(selected.length - 1);
    };

    const addTag = (keyCode: KEYS, value: string) => {
      if (keyCode !== KEYS.ENTER || isInvalid || !value.length || !onEnter) {
        return;
      }

      onEnter(value);
      setInputValue("");
    };

    const addTagsOnBlur = () => {
      setIsFocused(false);
      inputValue && onEnter && onEnter(inputValue);
      setInputValue("");

      selectedTagIndex !== NO_FOCUS_TAG && setSelectedTagIndex(NO_FOCUS_TAG);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value;
      const keyCode = e.code as KEYS;

      addTag(keyCode, value);
      clearTags(keyCode, value);

      if (inputValue) {
        return;
      }

      const arrowKey: ArrowKeysType | false = ARROW_KEYS.includes(
        keyCode as ArrowKeysType,
      )
        ? (keyCode as ArrowKeysType)
        : false;

      onKeyDownNavigationTags(arrowKey);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputValue(e.target.value);

    const onFocus = () => {
      setIsFocused(true);
    };

    const onInput = (e: React.FormEvent<HTMLInputElement>) => checkValidity(e);

    return (
      <TagsInputContext.Provider value={states}>
        <Listbox horizontal={false}>
          {label && (
            <SelectButton.Label
              htmlFor={id}
              labelSize={size}
              idDisabled={disabled}
            >
              {label}
            </SelectButton.Label>
          )}
          <span
            tabIndex={-1}
            className={mergeClassnames(
              "w-full flex flex-col justify-between bg-goku transition-shadow",
              states.value.length && "gap-y-1",
              isFocused
                ? "shadow-input-focus hover:shadow-input-focus"
                : "shadow-input hover:shadow-input-hov",
              "focus:shadow-input-focus focus:outline-none",
              "focus-visible::shadow-input-focus focus-visible::outline-none",
              getWrapperStyle(size),
              (isError || isInvalid) &&
                "shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err",
              disabled &&
                "opacity-60 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed",
              className,
            )}
            ref={ref}
          >
            <div className="flex flex-wrap justify-start items-start gap-1">
              {children}
            </div>
            <NativeInput
              ref={inputRef}
              id={id}
              className={mergeClassnames(
                "flex-grow border-0 !rounded-none bg-transparent px-0 leading-6 h-6",
                "!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none",
                getTextSize(size),
              )}
              placeholder={placeholder}
              error={isError || isInvalid}
              disabled={disabled}
              type={type}
              onChange={onChange}
              value={inputValue}
              onKeyDown={onKeyDown}
              onFocus={onFocus}
              onBlur={addTagsOnBlur}
              onInput={onInput}
            />
          </span>
        </Listbox>
      </TagsInputContext.Provider>
    );
  },
);

const SelectedItem = ({
  className,
  index,
  label,
  isUppercase,
  classNameTagOnFocus,
  ...rest
}: SelectedItemProps) => {
  const {
    size,
    disabled,
    isError,
    onClear,
    selectedTagIndex,
    selectTagOnClick,
  } = useTagsInputContext("TagsInput.SelectedItem");

  const onClick = () => {
    if (!selectTagOnClick) {
      return;
    }

    selectTagOnClick(index);
  };
  return (
    <div
      key={index}
      className={mergeClassnames(
        "flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center max-w-full [&>div]:max-w-full",
        className,
      )}
    >
      <SelectButton
        size={size}
        isError={isError}
        idDisabled={disabled}
        {...rest}
      >
        {/* <SelectButton.Value> */}
        <SelectButton.Chip
          isUppercase={isUppercase}
          onClear={() => !disabled && onClear && onClear(index)}
          onClick={onClick}
          className={mergeClassnames(
            selectedTagIndex === index
              ? (classNameTagOnFocus ?? "bg-piccolo")
              : "",
          )}
        >
          <span className="break-all truncate">{label}</span>
        </SelectButton.Chip>
        {/* </SelectButton.Value> */}
      </SelectButton>
    </div>
  );
};

const TagsInput = Object.assign(TagsInputRoot, {
  SelectedItem,
});

export default TagsInput;
