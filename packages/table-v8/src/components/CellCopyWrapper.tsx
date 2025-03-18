import React from "react";
import { useCellCopyText } from "../private/utils/useClipboardText";
import { CellCopyWrapperProps } from "../private/types/CellCopy";
import { FilesCopy } from "../private/icons/FilesCopy";
import GenericCheckRounded from "../private/icons/GenericCheckRounded";

const CellCopyWrapper = ({ children }: CellCopyWrapperProps) => {
  const { wasCopiedSuccess, textRef, onClickHandler } = useCellCopyText();

  return (
    <span
      className="cursor-pointer group"
      onClick={onClickHandler}
      ref={textRef}
    >
      {children}
      <span className="absolute">
        <span className="hidden group-hover:inline-block text-moon-18 top-0">
          {wasCopiedSuccess ? (
            <span className="text-moon-18 top-2">
              <GenericCheckRounded />
            </span>
          ) : (
            <span className="hidden group-hover:inline-block text-moon-18 top-2">
              {" "}
              <FilesCopy />
            </span>
          )}
        </span>
      </span>
    </span>
  );
};

export default CellCopyWrapper;
