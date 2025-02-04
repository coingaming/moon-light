const getDefaultValues = (
  obj: Record<string, string | boolean | number | undefined>,
  defaultValues: Record<string, string | boolean | number>,
) => {
  const obj2 = Object.entries(obj).reduce((acc, [key, value]) => {
    return value !== defaultValues[key] ? { ...acc, [key]: value } : acc;
  }, {});
  return obj2;
};

export default getDefaultValues;
