import React from "react";
import TF from "./TF";
import type TFootProps from "../private/types/TFootProps";

const TFoot = ({
  table,
  backgroundColor,
  rowSize,
  rowGap,
  isSticky,
  withBorder,
  columnMap,
}: TFootProps) => {
  const bottom = isSticky && rowGap ? rowGap : undefined;
  const styles = {
    bottom: bottom,
    "--beforeShift": bottom,
    "--footerBGColor": `rgba(var(--${backgroundColor}, var(--gohan)))`,
  } as const;

  const cmLength = columnMap?.length || 0;

  return isSticky ? (
    <tfoot
      style={styles}
      className={
        "sticky z-[2] before:absolute before:w-full before:h-full before:-bottom-[var(--beforeShift)] before:bg-[color:var(--footerBGColor)]"
      }
    >
      {table.getFooterGroups().map((footerGroup, indexFG) => (
        <tr key={indexFG}>
          {footerGroup.headers.map((header, index) => (
            <TF
              key={index}
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
              isFirstColumn={index === 0}
              isLastColumn={index === footerGroup.headers.length - 1}
              columnData={columnMap && columnMap[cmLength - indexFG - 1][index]}
              withBorder={withBorder}
            />
          ))}
        </tr>
      ))}
    </tfoot>
  ) : (
    <tfoot>
      {table.getFooterGroups().map((footerGroup, indexTF) => (
        <tr key={indexTF}>
          {footerGroup.headers.map((header, index) => (
            <TF
              key={index}
              header={header}
              backgroundColor={backgroundColor}
              isFirstColumn={index === 0}
              rowSize={rowSize}
              withBorder={withBorder}
            />
          ))}
        </tr>
      ))}
    </tfoot>
  );
};

export default TFoot;
