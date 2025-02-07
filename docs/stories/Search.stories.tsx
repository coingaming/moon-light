import type { Meta, StoryObj } from "@storybook/react";
import {
  MenuItem,
  Search as SearchComponent,
  searchFilterItems,
  searchGetItemIndex,
} from "@heathmont/moon-core-tw";
import { useMemo } from "react";
import { useArgs } from "@storybook/preview-api";
import getDefaultValues from "./utils/getDefaultValues";

const meta: Meta<typeof SearchComponent> = {
  title: "Moon DS/Search",
  tags: ["autodocs"],
  argTypes: {
    search: {
      type: "string",
      control: "text",
      description: "Search value the user is querying",
    },
    className: {
      type: "string",
      control: "text",
      description: "Add extra css class for styling",
    },
    onChangeOpen: {
      type: "function",
      control: "object",
      description: "Action to open the search component",
    },
    onChangeSearch: {
      type: "function",
      control: "object",
      description: "Action to update the search value",
    },
    isOpen: {
      type: "boolean",
      control: "boolean",
      description: "Whether the search component is open or not",
    },
  },
  render: ({}) => {
    const [{ isOpen, search, className }, updateArgs] = useArgs();

    const filteredItems = useMemo(
      () =>
        searchFilterItems(
          [
            {
              heading: "Results",
              id: "results",
              items: [
                {
                  id: "home",
                  children: "Home",
                  href: "#home",
                },
                {
                  id: "settings",
                  children: "Settings",
                  href: "#settings",
                },
                {
                  id: "projects",
                  children: "Projects",
                  closeOnSelect: false,
                  onClick: () => {
                    alert("projects");
                  },
                },
              ],
            },
            {
              heading: "Other",
              id: "other",
              items: [
                {
                  id: "developer-settings",
                  children: "Developer settings",
                  href: "#developer-settings",
                },
                {
                  id: "privacy-policy",
                  children: "Privacy policy",
                  href: "#privacy-policy",
                },
                {
                  id: "log-out",
                  children: "Log out",
                  onClick: () => {
                    alert("Logging out...");
                  },
                },
              ],
            },
          ],
          search,
        ),
      [search],
    );

    const optionalProps = getDefaultValues({ className }, { className: "" });

    return (
      <div className="w-full xl:mx-32">
        <SearchComponent
          onChangeSearch={(value) => updateArgs({ search: value })}
          onChangeOpen={(value) => updateArgs({ isOpen: value })}
          search={search}
          isOpen={isOpen}
          {...optionalProps}
        >
          <SearchComponent.Input>
            <SearchComponent.Input.Icon />
            <SearchComponent.Input.Input />
            <SearchComponent.Input.ButtonClear>
              Clear
            </SearchComponent.Input.ButtonClear>
          </SearchComponent.Input>

          <SearchComponent.Result>
            {filteredItems.length ? (
              filteredItems.map((list) => (
                <ul className="space-y-1" key={list.id}>
                  <li>
                    <SearchComponent.ResultHeading>
                      {list.heading}
                    </SearchComponent.ResultHeading>
                    {list.items.map(({ id, children, href, ...rest }) => (
                      <SearchComponent.ResultItem
                        key={id}
                        index={searchGetItemIndex(filteredItems, id)}
                        closeOnSelect={true}
                        {...rest}
                      >
                        {href ? (
                          <a href={href}>
                            <MenuItem>
                              <MenuItem.Title>{children}</MenuItem.Title>
                              <span className="text-moon-12 text-trunks">
                                {href}
                              </span>
                            </MenuItem>
                          </a>
                        ) : (
                          <MenuItem>
                            <MenuItem.Title>{children}</MenuItem.Title>
                            <span className="text-moon-12 text-trunks">
                              Action
                            </span>
                          </MenuItem>
                        )}
                      </SearchComponent.ResultItem>
                    ))}
                  </li>
                </ul>
              ))
            ) : (
              <SearchComponent.NoResults />
            )}
          </SearchComponent.Result>
        </SearchComponent>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SearchComponent>;

export const Search: Story = {
  args: {
    className: "",
    isOpen: false,
    search: "",
  },
};
