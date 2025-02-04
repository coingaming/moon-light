import React from "react";

const getDefaultValues = (
  obj: Record<string, unknown>,
  defaultValues: Record<string, unknown>,
) => {
  const obj2 = Object.entries(obj).reduce((acc, [key, value]) => {
    return value !== defaultValues[key] ? { ...acc, [key]: value } : acc;
  }, {});
  return obj2;
};

export default getDefaultValues;
