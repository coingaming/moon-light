import { useState, useEffect, useCallback } from "react";

const useRtl = () => {
  const [isRtl, setIsRtl] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedIsRtl = localStorage.getItem("isRtl");
      setIsRtl(storedIsRtl === "true");
      document.documentElement.setAttribute(
        "dir",
        storedIsRtl === "true" ? "rtl" : "ltr",
      );
    }
  }, []);
  const toggleRtl = useCallback(() => {
    const newIsRtl = !isRtl;
    setIsRtl(newIsRtl);
    localStorage.setItem("isRtl", newIsRtl ? "true" : "false");
    if (document)
      document.cookie = `dir=${
        newIsRtl ? "rtl" : "ltr"
      };path=/;MaxAge=0;SameSite=Strict`;
    document.documentElement.setAttribute("dir", newIsRtl ? "rtl" : "ltr");
  }, [isRtl]);
  return {
    toggleRtl,
    isRtl,
  };
};

export default useRtl;
