import React from "react";
import { Popover } from "@heathmont/moon-core-tw";
import { useCellCopyText } from "../private/utils/useClipboardText";
import { CellCopyWrapperProps } from "../private/types/CellCopy";
import { FilesCopy } from "../private/icons/FilesCopy";

const CellCopyWrapper = ({ children, classes }: CellCopyWrapperProps) => {
  const { wasCopiedSuccess, textRef, onClickHandler } = useCellCopyText();
  const wrapperClasses = `cursor-pointer flex group ${
    classes?.wrapperClass ?? ""
  }`;
  const iconClass = `hidden group-hover:inline-block text-moon-18 top-0 ${
    classes?.iconClass ?? ""
  }`;

  return (
    <Popover
      data-testid="popover"
      portalElement={
        wasCopiedSuccess ? (
          <p className="p-2 flex justify-center">Copied to clipboard</p>
        ) : null
      }
    >
      <Popover.Trigger data-testid="popover-trigger">
        <div ref={textRef} className={wrapperClasses} onClick={onClickHandler}>
          <p className="relative flex whitespace-nowrap">
            {children}
            <span className={iconClass}>
              <FilesCopy />
            </span>
          </p>
        </div>
      </Popover.Trigger>
    </Popover>
  );
};

export default CellCopyWrapper;
