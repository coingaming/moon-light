export default function sortExamples(arr: string[]): string[] {
  return arr.sort((a: string, b: string) => {
    if (["Default", "Sizes", "Disabled"].includes(a)) {
      return -1;
    }
    return a > b ? -1 : 1;
  });
}
