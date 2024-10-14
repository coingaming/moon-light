import React from "react";
import { FC } from "react";
import TDProps from "../private/types/TDProps";
import CellBorder from "./CellBorder";
import TDFlexRender from "./TDFlexRender";

type Props = TDProps & {
  stickySide?: string;
};

const TDContent: FC<Props> = (props) => {
  const { isFirstColumn, stickySide, withBorder } = props;

  return (
    <>
      <CellBorder
        withBorder={withBorder}
        isFirstColumn={isFirstColumn}
        stickySide={stickySide}
      />

      <TDFlexRender {...props} />
    </>
  );
};

export default TDContent;
