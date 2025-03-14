import React from "react";
import { FilesCopy } from "@heathmont/moon-icons-tw";
import { Tooltip } from "@heathmont/moon-core-tw";
import { useCellCopyText } from "../private/utils/useClipboardText";
import { CellCopyWrapperProps } from "../private/types/CellCopy";

const CellCopyWrapper = ({ children, classes }: CellCopyWrapperProps) => {
  const { wasCopiedSuccess, textRef, onClickHandler } = useCellCopyText();
  const wrapperClasses = `cursor-pointer flex group ${
    classes?.wrapperClass ?? ""
  }`;
  const iconClass = `hidden group-hover:inline-block text-moon-18 top-0 ${
    classes?.iconClass ?? ""
  }`;

  return (
    <div ref={textRef} className={wrapperClasses} onClick={onClickHandler}>
      <p className="relative flex whitespace-nowrap">
        {children}
        <span className={iconClass}>
          <FilesCopy />
        </span>
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

export default CellCopyWrapper;
