import React from "react";
import TH from "./TH";
import THeadProps from "../private/types/THeadProps";

const THead = ({
  table,
  backgroundColor,
  rowGap,
  rowSize,
  isSticky,
  columnMap,
}: THeadProps) => {
  const top = isSticky && rowGap ? rowGap : undefined;
  const styles = {
    top: top,
    '--beforeShift': top,
    '--headerBGColor': `rgba(var(--${backgroundColor}, var(--gohan)))`,
  } as const;

  return isSticky ? (
    <thead
      style={styles}
      className={"sticky z-[1] before:absolute before:w-full before:bottom-0 before:-top-[var(--beforeShift)] before:bg-[color:var(--headerBGColor)]"}
    >
      {table.getHeaderGroups().map((headerGroup, indexHG) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header, index) => (
            <TH
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
              rowGap={rowGap}
              isLastColumn={index === headerGroup.headers.length - 1}
              columnData={columnMap && columnMap[indexHG][index]}
            />
          ))}
        </tr>
      ))}
    </thead>
  ) : (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TH
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
            />
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default THead;
