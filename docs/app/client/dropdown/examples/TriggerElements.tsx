"use client";

import { useState } from "react";
import { Dropdown, MenuItem, Button } from "@heathmont/moon-core-tw";
import { ControlsChevronDown } from "@heathmont/moon-icons-tw";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];

export const TriggerElements = () => {
  const [option, setOption] = useState(null);
  const [option2, setOption2] = useState(null);
  return (
    <div className="flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-space-8">
      {/** ***** Custom trigger element ***** */}
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger
          aria-label="Dropdown trigger"
          className="size-space-40 bg-tertiary rounded-12 flex align-middle justify-center items-center cursor-pointer transition-colors hover:bg-brand-subtle text-heading-200 text-secondary"
        >
          <ControlsChevronDown />
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

      {/** ***** Button ***** */}
      <Dropdown value={option2} onChange={setOption2}>
        <Dropdown.Trigger>
          <Button as="span" role="button">
            Select name
          </Button>
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

export default TriggerElements;
