"use client";

import React, { createContext, useState } from "react";
import { SearchCmdk } from "@heathmont/moon-cmdk-tw/lib/es/index";
import useSearch from "./useSearch";
import { SearchResults } from "./SearchResults";
import { Action } from "./useSearchActions";

type SearchState = {
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  actions: Action[];
};

export const SearchContext = createContext<SearchState>({
  actions: [],
  setOpen: () => {
    throw new Error("SearchContext: setOpen is undefined");
  },
});
SearchContext.displayName = "SearchContext";

export const SearchProvider = ({
  children,
  actions,
}: {
  children: React.ReactNode;
  actions: Action[];
}) => {
  const { open, setOpen, closeSearch } = useSearch();
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider
      value={{ actions, open, setOpen, search, setSearch }}
    >
      {open && <SearchCmdk.Overlay />}
      <SearchCmdk
        open={open}
        onOpenChange={setOpen}
        shouldFilter={false}
        label="Command Menu"
        className="translate-y-0 lg:-translate-y-1/2 bottom-0 lg:bottom-auto max-w-sm rounded-b-none lg:rounded-b-moon-s-md"
      >
        <SearchCmdk.InputWrapper>
          <SearchCmdk.Icon />
          <SearchCmdk.Input
            value={search}
            onValueChange={setSearch}
            placeholder="Search for a component"
          />
          <SearchCmdk.Kbd onClick={closeSearch}>Esc</SearchCmdk.Kbd>
        </SearchCmdk.InputWrapper>
        <SearchCmdk.Separator />
        <SearchResults onSelectHandler={closeSearch} />
      </SearchCmdk>
      {children}
    </SearchContext.Provider>
  );
};
