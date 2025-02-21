import { SearchCmdk as SearchCmdkComponent } from "@heathmont/moon-cmdk-tw";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";
import { useState } from "react";
import { useEffect } from "react";
import { SEARCH_CDMK_ITEMS } from "./constants";

const defaultValues: Record<string, string | boolean> = {
  label: "",
  className: "",
  open: false,
};

type Item = {
  label: string;
};

const meta: Meta<typeof SearchCmdkComponent> = {
  title: "Forms & selection controls/SearchCmdk",
  tags: ["autodocs"],
  argTypes: {
    open: {
      type: "boolean",
      control: "boolean",
      description: "Define whether the component is open or not",
    },
    className: {
      type: "string",
      control: "text",
      description: "Add an extra class for styling",
    },
    label: {
      type: "string",
      control: "text",
      description: "Text title",
    },
    onOpenChange: {
      type: "function",
      control: "object",
      description: "Action to be triggered to open the component",
    },
    children: {
      control: "object",
      description: "Set elements to be rendered as children",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
  render: ({ className, label }) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "s" && e.metaKey) {
          e.preventDefault();
          setOpen((open) => !open);
        }
      };

      document.addEventListener("keydown", down);
      return () => document.removeEventListener("keydown", down);
    }, [open]);

    const filterItems = (values: Item[], search: string) => {
      return values.filter(
        ({ label }) => +label.toLowerCase().includes(search),
      );
    };
    const filteredItems = filterItems(SEARCH_CDMK_ITEMS, search.toLowerCase());

    const rootProps = getDefaultValues(
      { className, label, open },
      defaultValues,
    );

    return (
      <>
        <SearchCmdkComponent.Trigger
          onClick={() => {
            setOpen(true);
          }}
        >
          <SearchCmdkComponent.TriggerIcon />
          <span className="text-moon-16">Search...</span>
          <SearchCmdkComponent.TriggerKbd>⌘K</SearchCmdkComponent.TriggerKbd>
        </SearchCmdkComponent.Trigger>

        {open && <SearchCmdkComponent.Overlay />}

        <SearchCmdkComponent
          open={open}
          onOpenChange={setOpen}
          {...rootProps}
          shouldFilter={false}
          loop={true}
        >
          <SearchCmdkComponent.InputWrapper>
            <SearchCmdkComponent.Icon />
            <SearchCmdkComponent.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search for a component"
            />
            <SearchCmdkComponent.Kbd onClick={() => setOpen(false)}>
              Esc
            </SearchCmdkComponent.Kbd>
          </SearchCmdkComponent.InputWrapper>
          <SearchCmdkComponent.Separator />
          <SearchCmdkComponent.Result>
            <SearchCmdkComponent.NoResults>
              No Results
            </SearchCmdkComponent.NoResults>
            {filteredItems.map(({ label }) => (
              <SearchCmdkComponent.ResultItem
                key={label}
                value={label}
                onSelect={() => {
                  setOpen(false);
                }}
              >
                {label}
              </SearchCmdkComponent.ResultItem>
            ))}
          </SearchCmdkComponent.Result>
        </SearchCmdkComponent>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SearchCmdkComponent>;

export const SearchCmdk: Story = {
  args: defaultValues,
};
