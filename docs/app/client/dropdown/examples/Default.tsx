"use client";

import { useState } from "react";
import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";

type People = {
  name?: string;
};

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const Default = () => {
  const [option, setOption] = useState<People>({ name: "Choose a name..." });

  return (
    <div className="w-56">
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger className="p-space-8 cursor-pointer text-primary hover:text-brand border border-primary rounded-8 w-full">
          {option?.name}
        </Dropdown.Trigger>

        <Dropdown.Options>
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
      </Dropdown>
    </div>
  );
};

export default Default;
