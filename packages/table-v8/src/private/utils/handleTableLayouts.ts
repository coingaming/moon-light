import TableLayouts from "../types/TableLayouts";

export const handleTableLayouts = (layout: TableLayouts, isResizable: boolean) => {
  return layout === "fixed"
    ? isResizable
      ? undefined
      : "max-content"
    : layout === "auto"
      ? isResizable
        ? "max-content"
        : "100%"
      : "100%";
}

export const handleTableMaxWidth = (maxWidth: number | string) => {
  for (const [match, callback] of new Map([
    [/^([0-9]+)$/, (data: string) => `${data}px`],
    [/^([0-9]+)([\%\w]+)$/, (data: string, dim: string) => data + dim],
    [/^(w-max)$/, () => 'max-content'],
    [/^(w-full)$/, () => '100%']]).entries()) {
      if (`${maxWidth}`.match(match) !== null) {
        return `${maxWidth}`.replace(match, callback('$1', '$2'));
      }
    }   
};
