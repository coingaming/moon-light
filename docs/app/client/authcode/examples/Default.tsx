"use client";

import { useCallback, useState } from "react";
import { AuthCode } from "@heathmont/moon-core-tw";

export const Default = () => {
  const [result, setResult] = useState("");
  const handleOnChange = useCallback((res: string) => {
    setResult(res);
  }, []);
  return <AuthCode onChange={handleOnChange} />;
};

export default Default;
