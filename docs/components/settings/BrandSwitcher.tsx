"use client"

import React, { useCallback, useState } from 'react';
import MenuItem from '@heathmont/moon-core-tw/lib/es/menuItem/MenuItem';
import useTheme, { Brand, themes } from './utils/useThemes';

const THEMES = Object.keys(themes);

const BrandSwitcher = () => {
  const { setBrand, getBrand } = useTheme();
  const [theme, setTheme] = useState(getBrand);
  const onClickSetTheme = useCallback((value: string) => () => {
    setTheme(value);
    setBrand(value as Brand);
  }, [setTheme, setBrand]);
  return (
    <>
      <div className="max-h-72 over overflow-auto">
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
