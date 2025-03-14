import { RefObject } from "react";

export type CellCopyTextOutputType = {
  wasCopiedSuccess: boolean;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
  mouseEnter: boolean;
  textRef: RefObject<HTMLDivElement>;
  onClickHandler: () => void;
};

export type CellCopyWrapperProps = {
  children: React.ReactNode;
  classes?: {
    wrapperClass?: string;
    iconClass?: string;
  };
};
