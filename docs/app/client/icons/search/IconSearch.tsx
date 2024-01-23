"use client";

import { useMemo, useState } from "react";
import { Chip, Search } from "@heathmont/moon-core-tw";
import useGroupedIcons from "@/hooks/useGroupedIcons";
import * as Icons from "@heathmont/moon-icons-tw";

const IconSearch = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const groupedIcons = useGroupedIcons();

  const filteredIcons = useMemo(() => {
    return Object.keys(groupedIcons).filter((group) => {
      return groupedIcons[group].some(
        (iconItem) =>
          iconItem.iconName
            ?.toLowerCase()
            .includes(search?.toLowerCase() || ""),
      );
    });
  }, [search, groupedIcons]);

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    if (IconComponent) return <IconComponent />;
    return null;
  };

  return (
    <div className="w-full">
      <Search
        className="rounded-moon-s-sm"
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
      >
        <Search.Input>
          <Search.Input.Icon />
          <Search.Input.Input
            placeholder="Search icons"
            className="placeholder:text-trunks"
          />
          <Search.Input.ButtonClear className="relative translate-x-0 translate-y-0 flex end-2">
            Clear
          </Search.Input.ButtonClear>
        </Search.Input>

        <Search.Transition className="border-t border-beerus">
          <Search.Result className="relative shadow-none">
            {filteredIcons.length ? (
              <div className="flex flex-row flex-wrap gap-4 p-4">
                {filteredIcons.map((group) => {
                  return groupedIcons[group].map((iconItem: any) => (
                    <Search.ResultItem
                      key={iconItem.id}
                      index={iconItem.id}
                      closeOnSelect={true}
                      className="w-16 h-16"
                    >
                      <Chip
                        variant="ghost"
                        className="flex flex-col min-w-16 w-16 content-start h-16 text-moon-24"
                      >
                        {renderIcon(iconItem.iconName)}
                      </Chip>
                      <p className="text-moon-10 text-trunks text-center truncate ...">
                        {iconItem.iconName}
                      </p>
                    </Search.ResultItem>
                  ));
                })}
              </div>
            ) : (
              <Search.NoResults />
            )}
          </Search.Result>
        </Search.Transition>
      </Search>
    </div>
  );
};

export default IconSearch;
