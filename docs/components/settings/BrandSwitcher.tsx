"use client";

import React, { useCallback, useLayoutEffect, useState } from "react";
import MenuItem from "@heathmont/moon-core-tw/lib/es/menuItem/MenuItem";
import useTheme, { type Brand } from "./utils/useThemes";
import { themes } from "@/constants";

const THEMES = Object.keys(themes) as Brand[];

const BrandSwitcher = () => {
  const { setBrand, getBrand } = useTheme();
  const [theme, setTheme] = useState(getBrand());
  const onClickSetTheme = useCallback(
    (value: Brand) => () => {
      setTheme(value);
      setBrand(value as Brand);
    },
    [setTheme, setBrand]
  );
  return (
    <>
      <div className="max-h-72 overflow-auto">
        {THEMES.map((themeName) => (
          <MenuItem
            key={themeName}
            role="radio"
            isSelected={theme === themeName}
            onClick={onClickSetTheme(themeName)}
          >
            <MenuItem.Title>{themeName}</MenuItem.Title>
            <MenuItem.Radio />
          </MenuItem>
        ))}
      </div>
      <div className="h-px bg-beerus -mx-3" />
    </>
  );
};

export default BrandSwitcher;
