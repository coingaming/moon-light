import React, { forwardRef, useEffect } from "react";
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
  const blurredRef = React.useRef<boolean>(false);
  const prevSelected = React.useRef<unknown | undefined>({});

  const handleOnFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setIsInputFocused(true);

    if (event.relatedTarget?.id?.includes("headlessui-combobox-button")) {
      return;
    }

    comboboxButtonRef?.current?.click();
  };

  const handleOnBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    setIsInputFocused(false);
    if (blurredRef.current) {
      onChange(prevSelected.current);
    }
  };

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.key === "Tab") {
      blurredRef.current = true;
      prevSelected.current = value;
    }
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
    handleOnKeyDown,
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
          "relative flex flex-nowrap w-full align-middle items-center rounded-8 py-space-8 px-space-12 bg-primary gap-x-space-8",
          getSizeStyles(size as string, innerLabel as boolean),
          input?.isFocused
            ? "ring-2 ring-inset ring-active hover:ring-2 hover:ring-active"
            : "ring-1 ring-inset ring-primary hover:ring-2",
          "focus:ring-2 focus:ring-active focus:ring-inset focus:outline-none",
          isError &&
            "ring-2 ring-inset ring-negative hover:ring-2 hover:ring-inset hover:ring-negative focus:ring-2 focus:ring-inset focus:ring-negative",
          disabled &&
            "opacity-disabled ring-1 ring-inset ring-primary hover:ring-1 hover:ring-inset hover:ring-primary focus:ring-1 focus:ring-inset focus:ring-primary cursor-not-allowed",
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
    { displayValue, placeholder, type, className, label, ...rest }: InputProps,
    ref,
  ) => {
    const {
      size,
      popper,
      disabled,
      isError,
      onQueryChange,
      handleOnFocus,
      handleOnKeyDown,
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
          "flex-grow h-full border-0 !rounded-none bg-transparent !px-0 leading-space-20",
          "!ring-none hover:ring-none focus:ring-none focus-visible:ring-none",
          getTextSizes(size),
          className,
        )}
        disabled={disabled}
        error={isError}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
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
    { displayValue, placeholder, type, className, label, ...rest }: InputProps,
    ref,
  ) => {
    const {
      size,
      popper,
      disabled,
      isError,
      onQueryChange,
      handleOnFocus,
      handleOnKeyDown,
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
            "flex-grow h-full border-0 !rounded-none bg-transparent !px-0",
            "!ring-none hover:ring-none focus:ring-none focus-visible:ring-none",
            label !== undefined && label.length > 0 && "pt-space-12",
            getTextSizes(size),
            className,
            "leading-space-20",
          )}
          error={isError}
          onFocus={handleOnFocus}
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnBlur}
          aria-label={rest["aria-label"]}
          {...rest}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
        />
        <InputInset.Label className="w-auto -top-space-2 !inset-x-0 whitespace-nowrap overflow-x-hidden">
          {label}
        </InputInset.Label>
      </span>
    );
  },
);

const VisualSelectInput = forwardRef<HTMLElement, InputProps>(
  (
    { displayValue, placeholder, type, className, label, ...rest }: InputProps,
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
      handleOnKeyDown,
      handleOnBlur,
    } = useComboboxContext("Combobox.VisualSelectInput");
    const selected = value as [];

    return (
      <span
        className={mergeClassnames(
          "w-full flex flex-col",
          !selected.length ? "gap-y-0" : "gap-y-space-4",
        )}
      >
        <div className="flex flex-wrap justify-start items-start gap-space-4">
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
            "flex-grow w-full h-full border-0 !rounded-none bg-transparent !px-0",
            "!ring-none hover:ring-none focus:ring-none focus-visible:ring-none",
            label !== undefined && label.length > 0 && "pt-space-12",
            getTextSizes(size),
            className,
            "leading-space-20",
          )}
          error={isError}
          aria-label={rest["aria-label"]}
          {...rest}
          ref={(nodeElement) => {
            popper?.setAnchor(nodeElement);
            assignRef(ref, nodeElement);
          }}
          onFocus={handleOnFocus}
          onKeyDown={handleOnKeyDown}
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
        "size-space-24",
        size === "sm" ? "size-space-16 text-body-400" : "text-heading-200",
        open && "-rotate-180",
        "text-primary transition-transform flex-grow-0 flex-shrink-0 self-center",
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
            : "w-full max-h-[18.75rem] py-space-8 px-space-4 my-space-4 rounded-12 box-border bg-primary shadow-400 absolute",
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
          "flex gap-space-8 items-center flex-grow-0 flex-shrink-0 self-center",
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
          "flex gap-space-8 items-center flex-grow-0 flex-shrink-0 self-center",
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
