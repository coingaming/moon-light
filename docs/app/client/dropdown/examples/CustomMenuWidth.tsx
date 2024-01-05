"use client";

import React, { useState, useCallback } from "react";
import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";

type People = {
  name: string;
};
const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

const peoples = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const CustomMenuWidth = () => {
  const [selected, setSelected] = useState<People | null>(null);
  const [selected1, setSelected1] = useState<People | null>(null);
  const [selected2, setSelected2] = useState<People[]>([]);

  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <Dropdown value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Dropdown.Select
              open={open}
              label="Custom options width"
              placeholder="Choose an option"
            >
              {selected?.name}
            </Dropdown.Select>

            <Dropdown.Options menuWidth="w-40">
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      {person.name}
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown value={selected1} onChange={setSelected1}>
        {({ open }) => (
          <>
            <Dropdown.InsetSelect
              open={open}
              label="Custom options width"
              placeholder="Choose an option"
            >
              {selected1?.name}
            </Dropdown.InsetSelect>
            <Dropdown.Options menuWidth="w-40">
              {people.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      {person.name}
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>

      <Dropdown
        value={selected2}
        onChange={setSelected2}
        onClear={useCallback(() => setSelected2([]), [setSelected2])}
        multiple
      >
        {({ open }) => (
          <>
            <Dropdown.MultiSelect
              open={open}
              label="Custom options width"
              placeholder="Choose an option"
              data-test="data-test"
              counter={selected2.length}
            />
            <Dropdown.Options menuWidth="w-40">
              {peoples.map((person, index) => (
                <Dropdown.Option value={person} key={index}>
                  {({ selected, active }) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      <MenuItem.Title>{person.name}</MenuItem.Title>
                      <MenuItem.Checkbox isSelected={selected} />
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
            <Dropdown.Hint>Informative message holder</Dropdown.Hint>
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default CustomMenuWidth;
