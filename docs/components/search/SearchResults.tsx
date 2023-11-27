"use client"

import { useContext } from 'react';
import { SearchCmdk } from '@heathmont/moon-cmdk-tw/lib/es/index';
import { SearchContext } from './SearchProvider';
import { Action } from './useSearchActions';
import { useRouter } from 'next/navigation'

export const SearchResults = ({
  onSelectHandler,
}: {
  onSelectHandler?: () => void;
}) => {
  const router = useRouter()
  const { search, actions } = useContext(SearchContext);

  const filterItems = (values: Action[], search: string) => {
    return values.filter(({ name }) => +name.toLowerCase().includes(search));
  };
  const filteredActions = filterItems(actions, search?.toLowerCase() || '');
  return (
    <SearchCmdk.Result>
      <SearchCmdk.NoResults>No results for your search...</SearchCmdk.NoResults>
      {filteredActions.map((action) => (
        <SearchCmdk.ResultItem
          key={action.id}
          onSelect={() => {
            router.push(action.href)
            // setOpen(() => false);
            if (typeof onSelectHandler === 'function') {
              onSelectHandler();
            }
          }}
        >
          <span className="text-moon-14">{action.name}</span>
          {action.section && (
            <span className="text-moon-14 text-piccolo">{action.section}</span>
          )}
        </SearchCmdk.ResultItem>
      ))}
    </SearchCmdk.Result>
  );
};
