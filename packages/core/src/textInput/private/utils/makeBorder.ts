const makeBorder = (
  isSideBorderHidden?: boolean,
  isTopBottomBorderHidden?: boolean,
  isFirst?: boolean,
  isRtl?: boolean,
  error?: boolean,
) => {
  if (error) return "";
  if (isSideBorderHidden) {
    if (isRtl) {
      return isFirst ? "" : "";
    }
    return isFirst ? "" : "";
  } else if (isTopBottomBorderHidden) {
    return isFirst ? "" : "";
  }
  return "";
};

export default makeBorder;
