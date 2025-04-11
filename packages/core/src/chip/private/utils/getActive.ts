import type ChipProps from "../types/ChipProps";

const getActive = ({
  isActive,
  isStroke,
}: Pick<ChipProps, "isActive" | "isStroke">): string =>
  isStroke && isActive
    ? "ring-inset ring-2 ring-brand bg-brand-subtle text-brand"
    : isActive
      ? "bg-brand-subtle text-brand"
      : "text-primary";

export default getActive;
