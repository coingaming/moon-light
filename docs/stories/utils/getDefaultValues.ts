import React from "react";

export type DefaultValue = Record<
  string,
  string | boolean | number | React.ReactNode | object | undefined
>;

const getDefaultValues = (obj: DefaultValue, defaultValues: DefaultValue) => {
  const obj2 = Object.entries(obj).reduce((acc, [key, value]) => {
    return value !== defaultValues[key] ? { ...acc, [key]: value } : acc;
  }, {});
  return obj2;
};

export default getDefaultValues;
