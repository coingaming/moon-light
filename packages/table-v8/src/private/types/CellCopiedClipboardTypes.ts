import { RefObject } from "react";

export type CopyTextToClipboardOutputType = {
  wasCopiedSuccess: boolean;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
  mouseEnter: boolean;
  textRef: RefObject<HTMLDivElement>;
  onClickHandler: () => void;
};

export type CellCopiedClipboardWrapperProps = {
  children: React.ReactNode;
  classes?: {
    wrapperClass?: string;
    iconClass?: string;
  };
};
