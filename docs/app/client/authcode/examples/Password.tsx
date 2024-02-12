"use client";

import { useState } from "react";
import { AuthCode } from "@heathmont/moon-core-tw";

export const Password = () => {
  const [result, setResult] = useState("");
  const handleOnChange = (res: string) => {
    setResult(res);
  };
  return <AuthCode onChange={handleOnChange} isPassword />;
};

export default Password;
