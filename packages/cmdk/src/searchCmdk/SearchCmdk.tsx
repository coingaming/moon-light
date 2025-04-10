import React from "react";
import { mergeClassnames } from "@heathmont/moon-core-tw";
import { Command } from "cmdk";
import GenericSearch from "./private/icons/GenericSearch";

const SearchCmdkRoot = ({
  children,
  className,
  open,
  onOpenChange,
  label,
  ...props
}: React.ComponentProps<typeof Command.Dialog>) => (
  <Command.Dialog
    className={mergeClassnames(
      "z-[60] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-primary",
      "sm:max-w-lg md:max-w-xl shadow-300 rounded-12 flex flex-col overflow-hidden",
      className,
    )}
    open={open}
    onOpenChange={onOpenChange}
    label={label}
    {...props}
  >
    {children}
  </Command.Dialog>
);

const InputWrapper = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={mergeClassnames(
      "flex items-center gap-space-16 px-space-16",
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

const Input = ({
  className,
  placeholder = "Search",
  ...props
}: React.ComponentProps<typeof Command.Input>) => (
  <Command.Input
    placeholder={placeholder}
    className={mergeClassnames(
      "py-space-16 border-0 w-full focus:outline-none focus:border-0 focus:ring-0 bg-transparent",
      "placeholder-secondary text-primary text-body-400",
      className,
    )}
    {...props}
  />
);

const Icon = ({
  className,
  ...props
}: React.ComponentProps<typeof GenericSearch>) => (
  <div>
    <GenericSearch
      className={mergeClassnames(
        "pointer-events-none icon-primary text-heading-200",
        className,
      )}
      {...props}
    />
  </div>
);

const Kbd = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <kbd
    className={mergeClassnames(
      "select-none hover:cursor-pointer text-secondary text-body-300",
      className,
    )}
    {...props}
  >
    {children}
  </kbd>
);

const Overlay = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={mergeClassnames(
      "fixed w-screen inset-0 bg-backdrop transition-opacity z-[55]",
      className,
    )}
    {...props}
  />
);

const Separator = ({
  className,
}: React.ComponentProps<typeof Command.Separator>) => (
  <Command.Separator
    alwaysRender
    className={mergeClassnames("h-px bg-tertiary", className)}
  />
);

const Group = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Command.Group>) => (
  <Command.Group
    className={mergeClassnames(
      "w-full max-h-[50vh] overflow-y-auto p-space-8 space-y-space-4 bg-primary shadow-none",
      className,
    )}
    {...props}
  >
    {children}
  </Command.Group>
);

const Result = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Command.List>) => (
  <Command.List
    style={{
      // Should be equal p-2 below
      scrollPaddingBlockStart: "0.5rem",
      scrollPaddingBlockEnd: "0.5rem",
    }}
    className={mergeClassnames(
      "w-full max-h-[50vh] overflow-y-auto p-space-8 space-y-space-4 bg-primary shadow-300",
      className,
    )}
    {...props}
  >
    {children}
  </Command.List>
);

const NoResults = ({
  children,
  className,
}: React.ComponentProps<typeof Command.Empty>) => (
  <Command.Empty
    className={mergeClassnames(
      "p-space-12 text-body-300 text-secondary flex items-center",
      className,
    )}
  >
    {children}
  </Command.Empty>
);

const ResultItem = ({
  children,
  className,
  onSelect,
  ...props
}: React.ComponentProps<typeof Command.Item>) => (
  <Command.Item
    className={mergeClassnames(
      "flex gap-space-8 justify-between items-center p-space-8 bg-transparent rounded-8",
      "text-body-300 text-primary focus:outline-none focus:shadow-focus cursor-pointer",
      "hover:bg-hover transition data-[selected=true]:bg-hover",
      className,
    )}
    onSelect={onSelect}
    {...props}
  >
    {children}
  </Command.Item>
);

const Trigger = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => (
  <button
    aria-label="Search"
    className={mergeClassnames(
      "flex gap-space-8 h-space-40 cursor-text items-center text-secondary w-full",
      "rounded-8 border border-primary bg-primary px-space-8 text-body-300",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

const TriggerIcon = ({
  className,
  ...props
}: React.ComponentProps<typeof GenericSearch>) => (
  <GenericSearch
    className={mergeClassnames("text-heading-200 icon-primary", className)}
    {...props}
  />
);

const TriggerKbd = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <kbd
    className={mergeClassnames(
      "text-body-200 text-secondary ms-auto",
      className,
    )}
    {...props}
  >
    {children}
  </kbd>
);

const SearchCmdk = Object.assign(SearchCmdkRoot, {
  InputWrapper,
  Input,
  Icon,
  Separator,
  Group,
  Result,
  ResultItem,
  NoResults,
  Kbd,
  Overlay,
  Trigger,
  TriggerIcon,
  TriggerKbd,
});

export default SearchCmdk;
