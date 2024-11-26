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
          openSnackbarHandler("isOpen");
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
              <div className="flex flex-wrap gap-2 p-4 text-moon-14">
                {filteredIcons.map((iconName, index) => (
                  <div
                    key={iconName}
                    className="flex flex-col gap-1 items-center w-14"
                  >
                    <Search.ResultItem
                      index={index}
                      closeOnSelect={true}
                      className="flex flex-col gap-1 items-center w-14"
                    >
                      <Chip
                        as="span"
                        variant="ghost"
                        aria-label={iconName}
                        onClick={copyCode(iconName)}
                        iconOnly={renderIcon(iconName)}
                        className="text-moon-24"
                      />
                    </Search.ResultItem>
                    <p className="w-full text-moon-10 text-trunks text-center truncate hover:w-auto hover:bg-goku hover:px-2 hover:z-1">
                      {iconName}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <Search.NoResults />
            )}
          </Search.Result>
        </Search.Transition>
      </Search>
      <Snackbar
        isOpen={snackbar === "isOpen"}
        onOpenChange={setSnackbar}
        position="bottom-center"
      >
        <Snackbar.Message className="flex gap-2">
          <Icons.GenericCheckAlternative className="text-moon-24 text-roshi" />
          Icon {renderIcon(
            lastClickedIcon,
          )} copied for import
        </Snackbar.Message>
      </Snackbar>
    </div>
  );
};

export default IconSearch;
