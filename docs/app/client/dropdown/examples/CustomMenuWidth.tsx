"use client";

import { useState } from "react";
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

export const CustomMenuWidth = () => {
  const [selected, setSelected] = useState<People | null>(null);

  return (
    <div className="w-56">
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
                    <MenuItem
                      isActive={active}
                      isSelected={selected}
                      data-testid={`test-${index}`}
                    >
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
    </div>
  );
};

export default CustomMenuWidth;
