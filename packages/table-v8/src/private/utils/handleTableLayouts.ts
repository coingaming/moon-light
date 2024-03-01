import TableLayouts from "../types/TableLayouts";

export const handleTableLayouts = (
  layout: TableLayouts,
  isResizable: boolean,
) => {
  if (layout === "fixed") {
    return handleFixedLayout(isResizable);
  } else if (layout === "auto") {
    return handleAutoLayout(isResizable);
  } else {
    return "100%";
  }
};

const handleFixedLayout = (isResizable: boolean) => {
  return isResizable ? undefined : "max-content";
}

const handleAutoLayout = (isResizable: boolean) => {
  return isResizable ? "max-content" : "100%";
}

const PATTERNS = new Map<RegExp, ((data: string, dim: string) => string)>([
  [/^([0-9]+)$/, (data: string) => `${data}px`],
  [/^([0-9]+)([\%\w]+)$/, (data: string, dim: string) => data + dim],
  [/^(w-max)$/, () => "max-content"],
  [/^(w-full)$/, () => "100%"],
]);

export const handleTableFixedWidth = (fixedWidth: number | string) => {
  const fixedWidthStr = `${fixedWidth}`;

  for (const [pattern, callback] of PATTERNS.entries()) {
    const matched = fixedWidthStr.match(pattern);
    if (matched) {
      return fixedWidthStr.replace(pattern, callback("$1", "$2"));
    }
  }

  return undefined;
};
