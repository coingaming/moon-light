"use client"

import { useContext } from 'react';
import { SearchCmdk } from '@heathmont/moon-cmdk-tw/lib/es/index';
import { SearchContext } from './SearchProvider';

const SearchButton = () => {
  const { setOpen } = useContext(SearchContext);
  return (
    <SearchCmdk.Trigger
      onClick={() => {
        setOpen && setOpen(true);
      }}
    >
      <SearchCmdk.TriggerIcon />
      <span className="text-moon-16">Search...</span>
      <SearchCmdk.TriggerKbd>⌘K</SearchCmdk.TriggerKbd>
    </SearchCmdk.Trigger>
  );
};

export default SearchButton;
