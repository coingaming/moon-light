"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/*
  RTL (Right To Left) is a locale property indicating that text is written from right to left.

  For example, the 'he' locale (for Hebrew) specifies right-to-left.
  Arabic (ar) is another common language written RTL.

  The opposite of RTL, LTR (Left To Right) is used in other languages,
  including English (en, en-US, en-GB, etc.), Spanish (es), and French (fr).

  Source: https://developer.mozilla.org/en-US/docs/Glossary/RTL
*/

const RTLContext = createContext({
  isRTLEnabled: false,
  toggleRTL: () => {},
});

// TODO children Type
export const RtlProvider = ({ children }: { children: React.ReactNode }) => {
  const [isRTLEnabled, setRTLEnabled] = useState(false);

  const toggleRTL = useCallback(() => {
    setRTLEnabled(!isRTLEnabled);
  }, [setRTLEnabled, isRTLEnabled]);

  useEffect(() => {
    const htmlElement = document?.querySelector("html");
    if (htmlElement) {
      isRTLEnabled
        ? htmlElement.setAttribute("dir", "rtl")
        : htmlElement.setAttribute("dir", "ltr");
    } else {
      throw new Error("RTLProvider error: html element was not found");
    }
  }, [isRTLEnabled]);

  return (
    <RTLContext.Provider
      value={{
        isRTLEnabled,
        toggleRTL,
      }}
    >
      {children}
    </RTLContext.Provider>
  );
};

export const useRtl = () => useContext(RTLContext);
