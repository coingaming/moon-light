import React from "react";
import { Tab as HeadlessTab } from "@headlessui/react";
import type ListProps from "./private/types/ListProps";
import type PanelProps from "./private/types/PanelProps";
import type TabProps from "./private/types/TabProps";
import type TabsProps from "./private/types/TabsProps";
import getTabSize from "./private/utils/getTabSize";
import TabsContext from "./private/utils/TabsContext";
import useTabsContext from "./private/utils/useTabsContext";
import mergeClassnames from "../mergeClassnames/mergeClassnames";

const TabsRoot = ({ children, selectedIndex, onChange }: TabsProps) => (
  <HeadlessTab.Group selectedIndex={selectedIndex} onChange={onChange}>
    {children}
  </HeadlessTab.Group>
);

const List = ({ children, className, size = "md" }: ListProps) => {
  const states = {
    size: size,
  };
  return (
    <TabsContext.Provider value={states}>
      <HeadlessTab.List
        className={mergeClassnames(
          "flex items-center justify-center w-fit gap-space-8",
          className,
        )}
      >
        {children}
      </HeadlessTab.List>
    </TabsContext.Provider>
  );
};

const Segment = ({ children, className, size = "md" }: ListProps) => {
  const states = {
    size: size,
  };
  return (
    <TabsContext.Provider value={states}>
      <HeadlessTab.List
        className={mergeClassnames(
          "flex items-center justify-center w-fit gap-space-4 p-space-4 bg-tertiary",
          size === "md" ? "rounded-12" : "rounded-8",
          className,
        )}
      >
        {children}
      </HeadlessTab.List>
    </TabsContext.Provider>
  );
};

const Tab = React.forwardRef(
  ({ children, as = "button", className, ...rest }: TabProps, ref) => {
    const { size } = useTabsContext("Tabs.Tab");
    const isDisabled = rest.disabled;
    return (
      <HeadlessTab
        className={({ selected }: { selected: boolean }) =>
          mergeClassnames(
            getTabSize(size),
            "relative flex items-center justify-center w-full whitespace-nowrap text-body-300",
            "text-primary font-medium cursor-pointer after:absolute after:start-0 after:bottom-0",
            "after:w-full after:h-space-2 after:bg-brand after:transition-transform",
            "after:duration-300 ltr:after:origin-top-left rtl:after:origin-top-right",
            "after:scale-x-0 after:scale-y-100 ltr:hover:after:origin-top-left",
            "rtl:hover:after:origin-top-right hover:after:scale-100 hover:text-brand",
            "focus:outline-none",
            isDisabled &&
              "opacity-disabled hover:after:scale-0 cursor-not-allowed",
            selected &&
              "ltr:after:origin-top-left rtl:after:origin-top-right after:scale-x-100 text-brand",
            typeof className === "function"
              ? className({ selected: selected })
              : className,
          )
        }
        as={as}
        ref={ref as React.Ref<HTMLElement>}
        {...rest}
      >
        {children}
      </HeadlessTab>
    );
  },
);

const Pill = React.forwardRef(
  ({ children, className, as = "button", ...rest }: TabProps, ref) => {
    const { size } = useTabsContext("Tabs.Pill");
    const isDisabled = rest.disabled;
    return (
      <HeadlessTab
        className={({ selected }: { selected: boolean }) =>
          mergeClassnames(
            getTabSize(size),
            "flex items-center justify-center w-full whitespace-nowrap text-body-300 text-primary",
            "font-medium rounded-8 transition-colors cursor-pointer hover:bg-primary",
            "focus:outline-none",
            selected && "bg-primary",
            isDisabled &&
              "opacity-disabled hover:bg-transparent cursor-not-allowed",
            typeof className === "function"
              ? className({ selected: selected })
              : className,
          )
        }
        as={as}
        ref={ref as React.Ref<HTMLElement>}
        {...rest}
      >
        {children}
      </HeadlessTab>
    );
  },
);

const Panels = ({ children, className }: PanelProps) => (
  <HeadlessTab.Panels className={className}>{children}</HeadlessTab.Panels>
);

const Panel = ({ children, className }: PanelProps) => (
  <HeadlessTab.Panel className={className}>{children}</HeadlessTab.Panel>
);

const Tabs = Object.assign(TabsRoot, {
  Tab,
  Pill,
  List,
  Segment,
  Panels,
  Panel,
});

export default Tabs;
