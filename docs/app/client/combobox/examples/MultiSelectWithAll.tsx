"use client";

import React, { useCallback, useState } from "react";
import { Combobox, MenuItem } from "@heathmont/moon-core-tw";
import { ControlsChevronDownSmall } from "@heathmont/moon-icons-tw";
import { boolean } from "zod";

const people = [
  { id: 1, label: "Wade Cooper", value: "Wade Cooper" },
  { id: 2, label: "Arlene Mccoy", value: "Arlene Mccoy" },
  { id: 3, label: "Devon Webb", value: "Devon Webb" },
  { id: 4, label: "Tom Cook", value: "Tom Cook" },
  { id: 5, label: "Tanya Fox", value: "Tanya Fox" },
  { id: 6, label: "Hellen Schmidt", value: "Hellen Schmidt" },
];

const filter = (
  query: string,
  people: { id: number; label: string; value: string }[],
) => {
  return query === ""
    ? people
    : people.filter(({ value }) =>
        value
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, "")),
      );
};

const Example = () => {
  const [selected, setSelected] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [query, setQuery] = useState<string>("");

  const filteredPeople = filter(query, people);

  const onChange = useCallback(
    (value: unknown) => {
      const selectedItems = value as [];
      const allSelected = selectedItems.filter((item) => {
        return Array.isArray(item);
      });

      if (allSelected.length > 0) {
        const items = allSelected.at(0) as unknown as [];
        if (isAllSelected) {
          setSelected([]);
        } else {
          setSelected(items);
        }
        setIsAllSelected(!isAllSelected);
      } else {
        setSelected(selectedItems);
        setIsAllSelected(selectedItems.length === people.length);
      }
    },
    [setSelected, isAllSelected],
  );

  const onClear = useCallback(() => {
    setSelected([]);
    setIsAllSelected(false);
  }, [setSelected, setIsAllSelected]);

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-end w-full gap-4">
      <Combobox
        value={selected}
        onChange={onChange}
        onQueryChange={setQuery}
        onClear={onClear}
        className="w-full max-w-xs"
        size="md"
        multiple
      >
        {({ open }) => (
          <>
            <Combobox.MultiSelect
              open={open}
              counter={selected.length}
              placeholder="Choose an option"
              displayValue={({ label }) => label}
              onClose={console.log}
            >
              <ControlsChevronDownSmall />
            </Combobox.MultiSelect>
            <Combobox.Transition>
              <Combobox.Options>
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-trunks">
                    Nothing found.
                  </div>
                ) : (
                  <>
                    {!query.length && (
                      <Combobox.Option value={people} key={-1}>
                        {({ active }) => (
                          <MenuItem isActive={active}>
                            <MenuItem.Title>Select all</MenuItem.Title>
                            <MenuItem.Checkbox isSelected={isAllSelected} />
                          </MenuItem>
                        )}
                      </Combobox.Option>
                    )}
                    {filteredPeople.map((person, index) => (
                      <Combobox.Option value={person} key={index}>
                        {({ selected, active }) => (
                          <MenuItem isActive={active} isSelected={selected}>
                            <MenuItem.Title>{person.label}</MenuItem.Title>
                            <MenuItem.Checkbox isSelected={selected} />
                          </MenuItem>
                        )}
                      </Combobox.Option>
                    ))}
                  </>
                )}
              </Combobox.Options>
            </Combobox.Transition>
            <Combobox.Hint>Informative message holder</Combobox.Hint>
          </>
        )}
      </Combobox>
    </div>
  );
};

export default Example;
