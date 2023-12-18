"use client";

import React from "react";
import isStorageAvailable from "./isStorageAvailable";

import type { ThemeColorModes, Themes } from "@/types";
import { themes } from "@/constants";

export type Brand = keyof Themes;
export type Mode = keyof ThemeColorModes;

const useTheme = () => {
  const [themeState, setThemeState] = React.useState({
    brand: "moonDesign" as Brand,
    colorMode: "light" as Mode,
  });

  const setTheme = (className: string) => {
    const previewElements = document.getElementsByTagName("body");
    const themeClasses = [];
    for (let key in themes) {
      const brandName = key as Brand;
      themeClasses.push(themes[brandName].dark);
      themeClasses.push(themes[brandName].light);
    }

    for (let i = 0; i < previewElements.length; i++) {
      themeClasses.map((cl) => {
        previewElements[i].classList.remove(cl);
      });
      previewElements[i].className += ` ${className}`;
    }
    localStorage.setItem("theme", className);
  };

  const getTheme = () => {
    if (!isStorageAvailable("localStorage")) {
      return "light";
    }
    return localStorage.getItem("theme") || "light";
  };

  const getBrand = (): Brand => {
    if (!isStorageAvailable("localStorage")) {
      return "moonDesign";
    }
    const themeFromStorage = localStorage.getItem("brand") as Brand;
    if (Object.keys(themes).includes(themeFromStorage)) {
      return themeFromStorage;
    } else {
      return "moonDesign";
    }
  };

  const setBrand = (brand: Brand) => {
    const currentMode = (getMode() || themeState.colorMode) as Mode;
    const className = themes && themes[brand][currentMode];
    setTheme(className);
    setThemeState({
      brand: brand,
      colorMode: themeState.colorMode,
    });
    localStorage.setItem("brand", brand);
  };

  const apply = () => {
    setBrand(getBrand());
    setTheme(getTheme());
  };

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleMode = () => {
    const localStorageMode =
      isStorageAvailable("localStorage") && localStorage.getItem("themeMode");
    const currentMode = localStorageMode || themeState.colorMode;
    const newColorMode = currentMode === "dark" ? "light" : "dark";
    const className = themes && themes[themeState.brand][newColorMode];
    setTheme(className);
    setThemeState({
      brand: themeState.brand,
      colorMode: newColorMode,
    });
    localStorage.setItem("themeMode", newColorMode);
  };

  const getMode = () => {
    if (!isStorageAvailable("localStorage")) {
      return "";
    }
    return localStorage.getItem("themeMode") || "light";
  };

  return {
    apply,
    setBrand,
    getBrand,
    toggleDarkLightMode: toggleMode,
    getTheme,
    getMode,
    isDarkThemeEnabled: getMode() === "dark",
  };
};

export default useTheme;
