const DEFAULT_ORDER = ["Default", "Sizes", "Disabled"];

export default function sortExamples(arr: string[]): string[] {
  let firsts: string[] = [];
  DEFAULT_ORDER.forEach((name: string) => {
    if (arr.includes(name)) firsts.push(name);
  });
  let _arrCopy = [
    ...arr.filter((item: string) => {
      if (DEFAULT_ORDER.includes(item) || item === "Customization") {
        return false;
      }
      return true;
    }),
  ];
  return [
    ...firsts,
    ..._arrCopy.sort((a: string, b: string) => a.localeCompare(b)),
    ...(arr.includes("Customization") ? ["Customization"] : []),
  ];
}
