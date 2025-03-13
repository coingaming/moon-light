import React from "react";
import { FilesCopy } from "@heathmont/moon-icons-tw";
import { Tooltip } from "@heathmont/moon-core-tw";
import { useCopyTextToClipboard } from "../private/utils/useCopyTextToClipboard";
import { CellCopiedClipboardWrapperProps } from "../private/types/CellCopiedClipboardTypes";

const CellCopiedClipboardWrapper = ({
  children,
  classes,
}: CellCopiedClipboardWrapperProps) => {
  const {
    wasCopiedSuccess,
    mouseEnterHandler,
    mouseLeaveHandler,
    textRef,
    mouseEnter,
    onClickHandler,
  } = useCopyTextToClipboard();
  const wrapperClasses = `cursor-pointer flex ${classes?.wrapperClass ?? ""}`;
  const iconClass = `text-moon-18 top-0 ${classes?.iconClass ?? ""}`;

  return (
    <div
      ref={textRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className={wrapperClasses}
      onClick={onClickHandler}
    >
      <p className="relative flex whitespace-nowrap">
        {mouseEnter ? (
          <>
            {children}
            <span className={iconClass}>
              <FilesCopy />
            </span>
          </>
        ) : (
          children
        )}
        {wasCopiedSuccess ? (
          <Tooltip>
            {
              <p className="absolute bg-bulma p-2 text-goku z-[60] translate-y-full top-[-7px]">
                Copied to clipboard
              </p>
            }
          </Tooltip>
        ) : null}
      </p>
    </div>
  );
};

export default CellCopiedClipboardWrapper;
