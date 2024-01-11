"use client";

import React, { useEffect, useState } from "react";
import { Dropdown, MenuItem, Button } from "@heathmont/moon-core-tw";
import {
  OtherWater,
  OtherLightning,
  OtherMoon,
  OtherSun,
} from "@heathmont/moon-icons-tw";

const options = [
  {
    name: "Option 1",
    icon: <OtherLightning className="text-moon-24 text-bulma" />,
  },
  {
    name: "Option 2",
    icon: <OtherWater className="text-moon-24 text-bulma" />,
  },
  { name: "Option 3", icon: <OtherSun className="text-moon-24 text-bulma" /> },
  { name: "Option 4", icon: <OtherMoon className="text-moon-24 text-bulma" /> },
];

const languages = [
  { name: "Mandarin Chinese" },
  { name: "Spanish" },
  { name: "English" },
  { name: "Hindi" },
  { name: "Bengali" },
  { name: "Portuguese" },
];

const countries = [
  { name: "Australia" },
  { name: "Canada" },
  { name: "China" },
  { name: "Germany" },
  { name: "Hungary" },
  { name: "Japan" },
];

export const OptionsVariants = () => {
  const [option, setOption] = useState(null);
  const [language, setLanguage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState([
    countries[0],
    countries[3],
  ]);

  useEffect(() => {
    console.log("selected: ", selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="flex flex-col lg:flex-row align-middle justify-around items-center w-full gap-2">
      <Dropdown value={option} onChange={setOption}>
        <Dropdown.Trigger>
          <Button
            as="span"
            role="button"
            className="border border-beerus"
            variant="ghost"
          >
            Sort by
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {options.map((opt, index) => (
            <Dropdown.Option value={opt} key={index}>
              {({ selected, active }) => (
                <MenuItem isActive={active} isSelected={selected}>
                  {opt.icon}
                  <MenuItem.Title>{opt.name}</MenuItem.Title>
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>

      <Dropdown value={language} onChange={setLanguage}>
        <Dropdown.Trigger>
          <Button
            as="span"
            role="button"
            className="border border-beerus"
            variant="ghost"
          >
            Select language
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {languages.map((opt, index) => (
            <Dropdown.Option value={opt} key={index}>
              {({ selected, active }) => (
                <MenuItem
                  isActive={active}
                  isSelected={selected}
                  data-testid={`test-${index}`}
                >
                  <MenuItem.Title>{opt.name}</MenuItem.Title>
                  <MenuItem.Radio />
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>

      <Dropdown value={selectedCountry} onChange={setSelectedCountry} multiple>
        <Dropdown.Trigger>
          <Button
            as="span"
            role="button"
            className="border border-beerus"
            variant="ghost"
          >
            Select countries
          </Button>
        </Dropdown.Trigger>
        <Dropdown.Options>
          {countries.map((country, index) => (
            <Dropdown.Option value={country} key={index}>
              {({ selected, active }) => (
                <MenuItem isSelected={selected} isActive={active}>
                  <MenuItem.Title> {country.name}</MenuItem.Title>
                  <MenuItem.Checkbox />
                </MenuItem>
              )}
            </Dropdown.Option>
          ))}
        </Dropdown.Options>
      </Dropdown>
    </div>
  );
};

export default OptionsVariants;
