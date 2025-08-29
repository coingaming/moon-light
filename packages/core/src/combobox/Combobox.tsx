import React, { FocusEvent, forwardRef, useEffect } from "react";
import {
  Combobox as HeadlessCombobox,
  Transition as HeadlessTransition,
  Listbox,
} from "@headlessui/react";
import { usePopper } from "react-popper";
import ButtonProps from "./private/types/ButtonProps";
import { ComboboxRootProps } from "./private/types/ComboboxRootProps";
import InputProps from "./private/types/InputProps";
import type OptionProps from "./private/types/OptionProps";
import type OptionsProps from "./private/types/OptionsProps";
import SelectProps from "./private/types/SelectProps";
import WithChildren from "./private/types/WithChildren";
import { getSizeStyles, getTextSizes } from "./private/utils/getSizeStyles";
import {
  useComboboxContext,
  ComboboxContext,
} from "./private/utils/useComboboxContext";
import GenericHint from "../hint/Hint";
import {
  InsetInput as InputInset,
  SelectButton,
  Input as NativeInput,
} from "../index";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import { assignRef } from "../private/utils/assignRef";
import useClickOutside from "../private/hooks/useClickOutside";
import useDeepCompareEffect from "use-deep-compare-effect";

const ComboboxRoot = ({
  value,
  children,
  onChange,
  isError,
  disabled,
  size = "md",
  className,
  onClear,
  onQueryChange,
  multiple,
  nullable,
  position = "bottom-start",
  placeholder,
  displayValue,
  defaultValue,
  ref,
  ...rest
}: ComboboxRootProps) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();
  const [isInputFocused, setIsInputFocused] = React.useState<boolean>(false);

  let { styles, attributes, forceUpdate } = usePopper(anchorEl, popperEl, {
    placement: position,
  });

  const comboboxButtonRef = React.useRef<HTMLButtonElement | null>(null);

  useDeepCompareEffect(() => {
    if (value && anchorEl) {
      const input = anchorEl.querySelector("input");
      if (input) input.value = "";

      onQueryChange?.("");
    }
  }, [value]);

  const handleOnFocus = (
    event: FocusEvent<HTMLInputElement>,
    preventButtonForceClick = false,
  ) => {
    setIsInputFocused(true);

    if (
      event.relatedTarget?.id?.includes("headlessui-combobox-button") ||
      preventButtonForceClick
    ) {
      return;
    }

    comboboxButtonRef?.current?.click();
  };

  const handleOnBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setIsInputFocused(false);
  };

  const states = {
    value,
    displayValue,
    isError,
    size,
    disabled,
    input: {
      isFocused: isInputFocused,
      setIsFocused: setIsInputFocused,
    },
    multiple,
    onClear,
    onQueryChange,
    popper: {
      forceUpdate,
      styles,
      attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
    },
    comboboxButtonRef,
    handleOnFocus,
    handleOnBlur,
  };

  const childArray =
    typeof children !== "function" ? React.Children.toArray(children) : [];
  const callableChildren = typeof children === "function" && children;

  return (
    <ComboboxContext.Provider value={states}>
      <div className={mergeClassnames("w-full relative", className)}>
        <HeadlessCombobox
          // type coercion due to following issues in HeadlessUI combobox
          // https://github.com/tailwindlabs/headlessui/issues/2438
          // https://github.com/tailwindlabs/headlessui/issues/2434
          // https://codesandbox.io/s/festive-curran-ic7y9n?file=/src/ComboboxMultiple.tsx:527-565
          value={value as {}[]}
          multiple={multiple as true}
          nullable={nullable as true}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          {...rest}
        >
          {({ open }) => (
            <>
              {typeof children === "function"
                ? callableChildren && callableChildren({ open })
                : childArray?.map((ch) => ch)}
            </>
          )}
        </HeadlessCombobox>
      </div>
    </ComboboxContext.Provider>
  );
};

const Trigger = forwardRef<HTMLDivElement, WithChildren<SelectProps>>(
  ({ children, className, innerLabel, open, onClose }, ref) => {
    const { value, size, input, popper, disabled, isError } =
      useComboboxContext("Combobox.Trigger");

    useEffect(() => {
      if (!open && typeof onClose === "function") {
        onClose(value);
      }
    }, [open, value]);

    return (
      <div
        tabIndex={-1}
        className={mergeClassnames(
          "relative",
          "flex flex-nowrap w-full align-middle items-center rounded-lg py-2 px-3 bg-goku gap-x-2",
          getSizeStyles(size as string, innerLabel as boolean),
          input?.isFocused
            ? "shadow-input-focus hover:shadow-input-focus"
            : "shadow-input hover:shadow-input-hov",
          "focus:shadow-input-focus focus:outline-none",
          "focus-visible::shadow-input-focus focus-visible::outline-none",
          isError &&
            "shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err",
          disabled &&
            "opacity-60 shadow-input focus:shadow-input hover:shadow-input cursor-not-allowed",
          className,
        )}
        ref={(nodeElement) => {
          popper?.setAnchor(nodeElement);
          assignRef(ref, nodeElement);
        }}
      >
        {children}
      </div>
    );
  },
);

const Input = forwardRef<HTMLElement, InputProps>(
  (
    {
      displayValue,
      placeholder,
      type,
      className,
      label,
      preventButtonForceClick,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const {
      size,
      popper,
      disabled,
      isError,
      onQueryChange,
      handleOnFocus,
      handleOnBlur,
    } = useComboboxContext("Combobox.Input");

    return (
      <HeadlessCombobox.Input
        onChange={({ target: { value } }) => {
          onQueryChange ? onQueryChange(value) : () => {};
        }}
        as={NativeInput}
        displayValue={displayValue}
        placeholder={placeholder}
        type={type ? type : "text"}
        className={mergeClassnames(
          "flex-grow h-full border-0 !rounded-none bg-transparent px-0",
          "!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none",
          getTextSizes(size),
          className,
        )}
        disabled={disabled}
        error={isError}
        onFocus={(e) => {
          if (!handleOnFocus) {
            return;
          }

          handleOnFocus(e, preventButtonForceClick);
        }}
        onBlur={handleOnBlur}
        aria-label={rest["aria-label"]}
        {...rest}
        ref={(nodeElement) => {
          popper?.setAnchor(nodeElement);
          assignRef(ref, nodeElement);
        }}
      />
    );
  },
);

const InsetInput = forwardRef<HTMLElement, InputProps>(
  (
    {
      displayValue,
      placeholder,
      type,
      className,
      label,
      preventButtonForceClick,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const {
      size,
      popper,
      disabled,
      isError,
      onQueryChange,
      handleOnFocus,
      handleOnBlur,
    } = useComboboxContext("Combobox.InsetInput");
    return (
      <span className={mergeClassnames("relative", "flex flex-grow w-full")}>
        <HeadlessCombobox.Input
          onChange={({ target: { value } }) => {
            onQueryChange ? onQueryChange(value) : () => {};
          }}
          as={NativeInput}
          displayValue={displayValue}
          placeholder={placeholder === undefined ? "" : `${placeholder}`}
          type={type ? type : "text"}
          disabled={disabled}
          className={mergeClassnames(
            "flex-grow h-full border-0 !rounded-none bg-transparent px-0",
            "!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none",
            label !== undefined &&
              label.length > 0 &&
              (placeholder === undefined || placeholder.length === 0) &&
              "input-xl",
            label !== undefined && label.length > 0 && "pt-3 input-xl-dt-label",
            getTextSizes(size),
            className,
            "leading-5",
          )}
          error={isError}
          onFocus={(e) => {
            if (!handleOnFocus) {
              return;
            }

            handleOnFocus(e, preventButtonForceClick);
          }}
          onBlur={handleOnBlur}
          aria-label={rest["aria-label"]}
          {...rest}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
        />
        <InputInset.Label className="w-auto -top-0.5 !inset-x-0 whitespace-nowrap overflow-x-hidden">
          {label}
        </InputInset.Label>
      </span>
    );
  },
);

const VisualSelectInput = forwardRef<HTMLElement, InputProps>(
  (
    {
      displayValue,
      placeholder,
      type,
      className,
      label,
      preventButtonForceClick,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const {
      value,
      size,
      popper,
      disabled,
      isError,
      onQueryChange,
      handleOnFocus,
      handleOnBlur,
    } = useComboboxContext("Combobox.VisualSelectInput");
    const selected = value as [];

    return (
      <span
        className={mergeClassnames(
          "w-full flex flex-col",
          !selected.length ? "gap-y-0" : "gap-y-1",
        )}
      >
        <div className="flex flex-wrap justify-start items-start gap-1">
          {selected.map(({ id, label }) => {
            return <SelectedItem index={id} label={label} />;
          })}
        </div>
        <HeadlessCombobox.Input
          onChange={({ target: { value } }) => {
            onQueryChange ? onQueryChange(value) : () => {};
          }}
          as={NativeInput}
          displayValue={displayValue}
          placeholder={placeholder === undefined ? "" : `${placeholder}`}
          type={type ? type : "text"}
          disabled={disabled}
          className={mergeClassnames(
            "flex-grow w-full h-full border-0 !rounded-none bg-transparent px-0",
            "!shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none",
            label !== undefined &&
              label.length > 0 &&
              (placeholder === undefined || placeholder.length === 0) &&
              "input-xl",
            label !== undefined && label.length > 0 && "pt-3 input-xl-dt-label",
            getTextSizes(size),
            className,
            "leading-5",
          )}
          error={isError}
          aria-label={rest["aria-label"]}
          {...rest}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          onFocus={(e) => {
            if (!handleOnFocus) {
              return;
            }

            handleOnFocus(e, preventButtonForceClick);
          }}
          onBlur={handleOnBlur}
        />
      </span>
    );
  },
);

const Button = ({
  open,
  children,
  label,
  className,
  ["aria-label"]: ariaLabel,
  ...rest
}: WithChildren<ButtonProps>) => {
  const { size, disabled, comboboxButtonRef, input } =
    useComboboxContext("Combobox.Button");
  const ariaLabelValue = ariaLabel ? ariaLabel : open ? "Close" : "Open";

  return (
    <HeadlessCombobox.Button
      className={mergeClassnames(
        "w-6 h-6",
        size === "sm" ? "w-4 h-4 text-moon-16" : "text-moon-24",
        open && "-rotate-180",
        "text-bulma transition-transform flex-grow-0 flex-shrink-0 self-center",
        disabled && "cursor-not-allowed",
        className,
      )}
      ref={comboboxButtonRef}
      aria-label={ariaLabelValue}
      {...rest}
    >
      {children}
    </HeadlessCombobox.Button>
  );
};

const Options = forwardRef<HTMLElement, WithChildren<OptionsProps>>(
  (
    {
      children,
      menuWidth,
      className,
      open,
      ...rest
    }: WithChildren<OptionsProps>,
    ref,
  ) => {
    const { popper } = useComboboxContext("Combobox.Options");
    const OptionsComponent = (
      <HeadlessCombobox.Options
        ref={(nodeElement) => {
          popper?.setPopper(nodeElement);
          assignRef(ref, nodeElement);
        }}
        style={popper?.styles?.popper}
        {...popper?.attributes?.popper}
        static={open ?? true}
        className={mergeClassnames(
          menuWidth
            ? menuWidth
            : "w-full max-h-[18.75rem] py-2 px-1 my-1 rounded-moon-s-md box-border bg-goku shadow-moon-lg absolute",
          "z-10 overflow-y-auto focus:outline-none",
          className,
        )}
        {...rest}
      >
        {children}
      </HeadlessCombobox.Options>
    );

    if (open === undefined) {
      return OptionsComponent;
    }

    return open && OptionsComponent;
  },
);

const Option = forwardRef<HTMLElement, OptionProps>(
  ({ children, value }: OptionProps, ref) => {
    return (
      <HeadlessCombobox.Option
        as="span"
        value={value}
        ref={(nodeElement) => {
          assignRef(ref, nodeElement);
        }}
      >
        {({ selected, disabled, active }) =>
          typeof children === "function"
            ? children({ selected, disabled, active })
            : children
        }
      </HeadlessCombobox.Option>
    );
  },
);

const Counter = forwardRef<HTMLElement, SelectProps>(
  ({ open, className, counter, ...rest }: SelectProps, ref) => {
    const { size, isError, disabled, onClear } =
      useComboboxContext("Combobox.Counter");

    return (
      <span
        className={mergeClassnames(
          "flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center",
          className,
        )}
      >
        <SelectButton
          size={size}
          open={open}
          isError={isError}
          idDisabled={disabled}
          {...rest}
          ref={(nodeElement) => assignRef(ref, nodeElement)}
        >
          <SelectButton.Value>
            <SelectButton.Chip onClear={onClear}>{counter}</SelectButton.Chip>
          </SelectButton.Value>
        </SelectButton>
      </span>
    );
  },
);

const SelectedItem = forwardRef<
  HTMLElement,
  {
    index: number | string;
    label: number | string;
  } & SelectProps
>(
  (
    {
      open,
      className,
      index,
      label,
      ...rest
    }: {
      index: number | string;
      label: number | string;
    } & SelectProps,
    ref,
  ) => {
    const { size, isError, disabled, onClear } =
      useComboboxContext("Combobox.Counter");

    return (
      <span
        className={mergeClassnames(
          "flex gap-2 items-center flex-grow-0 flex-shrink-0 self-center",
          className,
        )}
      >
        <SelectButton
          size={size}
          open={open}
          isError={isError}
          idDisabled={disabled}
          {...rest}
          ref={(nodeElement) => {
            assignRef(ref, nodeElement);
          }}
        >
          <SelectButton.Value>
            <SelectButton.Chip onClear={() => onClear && onClear(index)}>
              {label}
            </SelectButton.Chip>
          </SelectButton.Value>
        </SelectButton>
      </span>
    );
  },
);

const Transition = ({ children, ...rest }: WithChildren) => {
  const { onQueryChange } = useComboboxContext("Combobox.Counter");

  return (
    <HeadlessTransition
      as="div"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={onQueryChange ? () => onQueryChange("") : () => {}}
      {...rest}
    >
      {children}
    </HeadlessTransition>
  );
};

const Select = forwardRef<HTMLElement, WithChildren<SelectProps & InputProps>>(
  (
    {
      open,
      label,
      placeholder,
      children,
      className,
      multiple,
      counter,
      displayValue,
      ...rest
    }: WithChildren<SelectProps & InputProps>,
    ref,
  ) => {
    const { size, popper, disabled } = useComboboxContext("Combobox.Select");

    return (
      <Listbox>
        {label && (
          <SelectButton.Label labelSize={size} idDisabled={disabled}>
            {label}
          </SelectButton.Label>
        )}
        <Listbox.Button
          open={open}
          as={Trigger}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          className={className}
          multiple={multiple !== undefined}
          counter={counter}
          {...rest}
        >
          <Input
            open={open}
            placeholder={placeholder}
            displayValue={displayValue}
            aria-label={rest["aria-label"]}
          />
          <Button open={open}>{children}</Button>
        </Listbox.Button>
      </Listbox>
    );
  },
);

const MultiSelect = forwardRef<
  HTMLElement,
  WithChildren<SelectProps & InputProps>
>(
  (
    {
      open,
      label,
      placeholder,
      children,
      className,
      multiple = true,
      counter,
      displayValue,
      ...rest
    }: WithChildren<SelectProps & InputProps>,
    ref,
  ) => {
    const { size, popper, disabled } = useComboboxContext(
      "Combobox.MultiSelect",
    );
    const [, hasClickedOutside] = useClickOutside();
    const shouldPreventForceClick = open && !hasClickedOutside;

    return (
      <Listbox>
        {label && (
          <SelectButton.Label labelSize={size} idDisabled={disabled}>
            {label}
          </SelectButton.Label>
        )}
        <Listbox.Button
          open={open}
          as={Trigger}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          className={className}
          multiple={multiple}
          counter={counter}
          {...rest}
        >
          {counter !== undefined && counter > 0 && (
            <Counter counter={counter} />
          )}
          <Input
            open={open}
            placeholder={placeholder}
            displayValue={displayValue}
            aria-label={rest["aria-label"]}
            preventButtonForceClick={shouldPreventForceClick}
          />
          <Button open={open}>{children}</Button>
        </Listbox.Button>
      </Listbox>
    );
  },
);

const InsetSelect = forwardRef<
  HTMLElement,
  WithChildren<SelectProps & InputProps>
>(
  (
    {
      open,
      label,
      placeholder,
      children,
      className,
      multiple,
      counter,
      displayValue,
      ...rest
    }: WithChildren<SelectProps & InputProps>,
    ref,
  ) => {
    const { popper } = useComboboxContext("Combobox.Select");

    return (
      <Listbox>
        <Listbox.Button
          open={open}
          as={Trigger}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          className={className}
          multiple={multiple !== undefined}
          counter={counter}
          innerLabel={true}
          {...rest}
        >
          <InsetInput
            open={open}
            label={label}
            placeholder={placeholder}
            displayValue={displayValue}
            aria-label={rest["aria-label"]}
          />
          <Button open={open}>{children}</Button>
        </Listbox.Button>
      </Listbox>
    );
  },
);

const InsetMultiSelect = forwardRef<
  HTMLElement,
  WithChildren<SelectProps & InputProps>
>(
  (
    {
      open,
      label,
      placeholder,
      children,
      className,
      multiple = true,
      counter,
      displayValue,
      ...rest
    }: WithChildren<SelectProps & InputProps>,
    ref,
  ) => {
    const { popper } = useComboboxContext("Combobox.MultiSelect");
    const [, hasClickedOutside] = useClickOutside();
    const shouldPreventForceClick = open && !hasClickedOutside;

    return (
      <Listbox>
        <Listbox.Button
          open={open}
          as={Trigger}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          className={className}
          multiple={multiple}
          counter={counter}
          innerLabel={true}
          {...rest}
        >
          {counter !== undefined && counter > 0 && (
            <Counter counter={counter} />
          )}
          <InsetInput
            open={open}
            label={label}
            placeholder={placeholder}
            displayValue={displayValue}
            aria-label={rest["aria-label"]}
            preventButtonForceClick={shouldPreventForceClick}
          />
          <Button open={open}>{children}</Button>
        </Listbox.Button>
      </Listbox>
    );
  },
);

const VisualMultiSelect = forwardRef<
  HTMLElement,
  WithChildren<SelectProps & InputProps> & { forceUpdate?: boolean }
>(
  (
    {
      open,
      label,
      placeholder,
      children,
      className,
      multiple = true,
      counter,
      displayValue,
      forceUpdate,
      ...rest
    }: WithChildren<SelectProps & InputProps> & { forceUpdate?: boolean },
    ref,
  ) => {
    const { size, popper, disabled, value } = useComboboxContext(
      "Combobox.VisualMultiSelect",
    );

    const [, hasClickedOutside] = useClickOutside();
    const shouldPreventForceClick = open && !hasClickedOutside;

    useEffect(() => {
      // Do nothing if forceUpdate is false.
      if (!forceUpdate) {
        return;
      }
      if (typeof popper?.forceUpdate === "function") {
        popper.forceUpdate();
      }
    }, [value]);

    return (
      <Listbox>
        {label && (
          <SelectButton.Label labelSize={size} idDisabled={disabled}>
            {label}
          </SelectButton.Label>
        )}
        <Listbox.Button
          open={open}
          as={Trigger}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          className={className}
          multiple={multiple}
          {...rest}
        >
          <VisualSelectInput
            open={open}
            placeholder={placeholder}
            displayValue={displayValue}
            aria-label={rest["aria-label"]}
            preventButtonForceClick={shouldPreventForceClick}
          />
          <Button open={open}>{children}</Button>
        </Listbox.Button>
      </Listbox>
    );
  },
);

const Hint = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => {
  const { isError, disabled } = useComboboxContext("Combobox.Input");
  return (
    <GenericHint error={isError} disabled={disabled} className={className}>
      {children}
    </GenericHint>
  );
};

const Combobox = Object.assign(ComboboxRoot, {
  Input,
  InsetInput,
  VisualSelectInput,
  Button,
  Options,
  Option,
  Trigger,
  Counter,
  SelectedItem,
  Transition,
  Hint,
  Select,
  MultiSelect,
  InsetSelect,
  InsetMultiSelect,
  VisualMultiSelect,
});

export default Combobox;
