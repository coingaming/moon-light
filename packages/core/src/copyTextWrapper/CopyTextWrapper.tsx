import React from "react";
import { useCopyText } from "./private/utils/useCopyText";
import { CellCopyWrapperProps } from "./private/types/copyTextTypes";
import GenericCheckRounded from "./private/icons/GenericCheckRounded";
import { FilesCopy } from "./private/icons/FileCopy";

const CopyTextWrapper = ({
  children,
  containerClass = "",
  iconWrapperClass = "",
  iconStylingClass = "",
}: CellCopyWrapperProps) => {
  const { wasCopiedSuccess, textRef, onClickHandler } = useCopyText();
  const wrapperClasses = `cursor-pointer group ${containerClass}`;
  const iconClasses = `absolute ${iconWrapperClass}`;

  return (
    <span className={wrapperClasses} onClick={onClickHandler} ref={textRef}>
      {children}
      <span className={iconClasses}>
        <span className="hidden group-hover:inline-block">
          {wasCopiedSuccess ? (
            <span>
              <GenericCheckRounded className={iconStylingClass} />
            </span>
          ) : (
            <span className="hidden group-hover:inline-block">
              {" "}
              <FilesCopy className={iconStylingClass} />
            </span>
          )}
        </span>
      </span>
    </span>
  );
};

export default CopyTextWrapper;
