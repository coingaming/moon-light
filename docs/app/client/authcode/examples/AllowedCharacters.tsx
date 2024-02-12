"use client";

import { useCallback, useState } from "react";
import { AuthCode } from "@heathmont/moon-core-tw";

export const AllowedCharacters = () => {
  const [result, setResult] = useState("");
  const handleOnChange = useCallback((res: string) => {
    setResult(res);
  }, []);
  return <AuthCode allowedCharacters="numeric" onChange={handleOnChange} />;
};

export default AllowedCharacters;
