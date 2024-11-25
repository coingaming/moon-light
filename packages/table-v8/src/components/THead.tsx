import React from "react";
import TH from "./TH";
import type THeadProps from "../private/types/THeadProps";

const THead = ({
  table,
  backgroundColor,
  rowGap,
  rowSize,
  isResizable,
  isSticky,
  withBorder,
  columnMap,
}: THeadProps) => {
  const top = isSticky && rowGap ? rowGap : undefined;
  const styles = {
    top,
    "--headerBGColor": `rgb(var(--${backgroundColor || "gohan"}))`,
    boxShadow: `0 ${rowGap} rgba(var(--${backgroundColor}, var(--gohan)))`,
  } as const;

  const beforeBg = backgroundColor || "gohan";

  return isSticky ? (
    <thead
      style={styles}
      className={`sticky z-[2] before:content-[''] before:absolute before:-top-0.5 before:left-0 before:w-full before:max-h-2 before:h-2 before:bg-[color:rgba(var(--${beforeBg}))]`}
    >
      {table.getHeaderGroups().map((headerGroup, indexHG) => (
        <tr key={indexHG}>
          {headerGroup.headers.map((header, index) => (
            <TH
              key={index}
              table={table}
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
              isResizable={isResizable}
              isFirstColumn={index === 0}
              isLastColumn={index === headerGroup.headers.length - 1}
              columnData={columnMap && columnMap[indexHG][index]}
              withBorder={withBorder}
              rowGap={rowGap}
            />
          ))}
        </tr>
      ))}
    </thead>
  ) : (
    <thead style={styles}>
      {table.getHeaderGroups().map((headerGroup, indexTH) => (
        <tr key={indexTH}>
          {headerGroup.headers.map((header, index) => (
            <TH
              key={index}
              table={table}
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
              isResizable={isResizable}
              isFirstColumn={index === 0}
              withBorder={withBorder}
            />
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default THead;
