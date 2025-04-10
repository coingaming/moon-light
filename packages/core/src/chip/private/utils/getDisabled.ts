import type ChipProps from "../types/ChipProps";

const getDisabled = ({
  disabled,
  isStroke,
}: Pick<ChipProps, "disabled" | "isStroke">): string =>
  disabled
    ? "opacity-disabled cursor-not-allowed"
    : isStroke
      ? "hover:ring-inset hover:ring-2 hover:ring-brand hover:text-brand hover:bg-brand-subtle"
      : "hover:text-brand hover:bg-brand-subtle";

export default getDisabled;
