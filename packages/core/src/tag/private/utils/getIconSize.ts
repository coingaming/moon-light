import TagProps from "../types/TagProps";

const getIconSize = (size: TagProps["size"]) =>
  size === "2xs" ? "text-body-200" : "text-body-400";

export default getIconSize;
