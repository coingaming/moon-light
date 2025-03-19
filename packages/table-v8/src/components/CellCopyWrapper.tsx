import React from "react";
import { useCellCopyText } from "../private/utils/useClipboardText";
import { CellCopyWrapperProps } from "../private/types/CellCopy";
import { FilesCopy } from "../private/icons/FilesCopy";
import GenericCheckRounded from "../private/icons/GenericCheckRounded";

const CellCopyWrapper = ({
  children,
  wrapperClass = "",
  iconClass = "",
}: CellCopyWrapperProps) => {
  const { wasCopiedSuccess, textRef, onClickHandler } = useCellCopyText();
  const wrapperClasses = `cursor-pointer group ${wrapperClass}`;
  const iconClasses = `absolute ${iconClass}`;

  return (
    <span className={wrapperClasses} onClick={onClickHandler} ref={textRef}>
      {children}
      <span className={iconClasses}>
        <span className="hidden group-hover:inline-block text-moon-18">
          {wasCopiedSuccess ? (
            <span className="text-moon-18">
              <GenericCheckRounded />
            </span>
          ) : (
            <span className="hidden group-hover:inline-block text-moon-18">
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
