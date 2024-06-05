import React from "react";
import TH from "./TH";
import THeadProps from "../private/types/THeadProps";

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
    top: top,
    "--beforeShift": top,
    "--headerBGColor": `rgba(var(--${backgroundColor}, var(--gohan)))`,
  } as const;

  return isSticky ? (
    <thead
      style={styles}
      className={
        "sticky z-[2] before:absolute before:w-full before:bottom-0 before:-top-[var(--beforeShift)] before:bg-[color:var(--headerBGColor)]"
      }
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
            />
          ))}
        </tr>
      ))}
    </thead>
  ) : (
    <thead>
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
