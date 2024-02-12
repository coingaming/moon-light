"use client";

import { useCallback, useMemo, useState } from "react";
import { Chip, Search, Snackbar } from "@heathmont/moon-core-tw";
import * as Icons from "@heathmont/moon-icons-tw";

const IconSearch = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [snackbar, setSnackbar] = useState("");
  const [lastClickedIcon, setLastClickedIcon] = useState("");

  const iconNames = useMemo(() => Object.keys(Icons), []);

  const filteredIcons = useMemo(() => {
    return iconNames.filter((iconName) =>
      iconName.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, iconNames]);

  const openSnackbarHandler = useCallback(
    (type: string) => {
      if (snackbar) {
        setSnackbar("");
        setTimeout(() => {
          setSnackbar(type);
        }, 400);
      } else {
        setSnackbar(type);
      }
    },
    [snackbar],
  );

  const copyCode = useCallback(
    (iconName: string) => {
      return () => {
        if (navigator?.clipboard) {
          navigator.clipboard.writeText(
            `import { ${iconName} } from '@heathmont/moon-icons-tw';`,
          );
          setLastClickedIcon(iconName);
          openSnackbarHandler("top-right");
        }
      };
    },
    [openSnackbarHandler],
  );

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return IconComponent ? <IconComponent className="text-moon-24" /> : null;
  };

  return (
    <div className="w-full">
      <Search
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

        <Search.Transition>
          <Search.Result>
            {search && filteredIcons.length ? (
              <div className="flex flex-row flex-wrap gap-4 p-4">
                {filteredIcons.map((iconName, index) => (
                  <Search.ResultItem
                    key={iconName}
                    index={index}
                    closeOnSelect={true}
                    className="w-16 h-16"
                  >
                    <Chip
                      variant="ghost"
                      className="flex flex-col min-w-16 w-16 content-start h-16 text-moon-24"
                      onClick={copyCode(iconName)}
                    >
                      {renderIcon(iconName)}
                    </Chip>
                    <p className="text-moon-10 text-trunks text-center truncate ...">
                      {iconName}
                    </p>
                  </Search.ResultItem>
                ))}
              </div>
            ) : (
              <Search.NoResults />
            )}
          </Search.Result>
        </Search.Transition>
      </Search>
      <Snackbar isOpen={snackbar === "top-right"} onOpenChange={setSnackbar}>
        <Snackbar.Message className="flex gap-2">
          Icon copied for import
          {renderIcon(lastClickedIcon)}
        </Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default IconSearch;
