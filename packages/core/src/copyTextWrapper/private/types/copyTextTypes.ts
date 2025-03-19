import { RefObject } from "react";

export type CellCopyTextOutputType = {
  wasCopiedSuccess: boolean;
  textRef: RefObject<HTMLDivElement>;
  onClickHandler: () => void;
};

export type CellCopyWrapperProps = {
  children: React.ReactNode;
  containerClass?: string;
  iconWrapperClass?: string;
  iconStylingClass?: string;
};
