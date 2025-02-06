import type { Meta, StoryObj } from "@storybook/react";
import {
  MenuItem,
  Search as SearchComponent,
  searchFilterItems,
  searchGetItemIndex,
} from "@heathmont/moon-core-tw";
import { useState } from "react";
import { useMemo } from "react";

const defaultValues = {};

const meta: Meta<typeof SearchComponent> = {
  title: "Moon DS/Search",
  tags: ["autodocs"],
  argTypes: {
    search: {
      type: "string",
      control: "text",
      description: "Data to search",
    },
    isOpen: {
      type: "boolean",
      control: "boolean",
      description: "Whether the search component is open or not",
    },
  },
  render: ({}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [search, setSearch] = useState("");

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

    return (
      <div className="w-full xl:mx-32">
        <SearchComponent
          onChangeSearch={setSearch}
          onChangeOpen={setOpen}
          search={search}
          isOpen={open}
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

export const Progress: Story = {
  args: {
    className: "",
  },
};
