import React from "react";
import TF from "./TF";
import TFootProps from "../private/types/TFootProps";

const TFoot = ({
  table,
  backgroundColor,
  rowSize,
  rowGap,
  isSticky,
  columnMap,
}: TFootProps) => {
  const bottom = isSticky && rowGap ? rowGap : undefined;
  const styles = {
    bottom: bottom,
    '--beforeShift': bottom,
    '--footerBGColor': `rgba(var(--${backgroundColor}, var(--gohan)))`,
  } as const;

  const cmLength = columnMap?.length || 0;

  return isSticky ? (
    <tfoot
      style={styles}
      className={"sticky z-[1] before:absolute before:w-full before:h-full before:-bottom-[var(--beforeShift)] before:bg-[color:var(--footerBGColor)]"}
    >
      {table.getFooterGroups().map((footerGroup, indexFG) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header, index) => (
            <TF
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
              rowGap={rowGap}
              isLastColumn={index === footerGroup.headers.length - 1}
              columnData={columnMap && columnMap[cmLength - indexFG - 1][index]}
            />
          ))}
        </tr>
      ))}
    </tfoot>
  ) : (
    <tfoot>
      {table.getFooterGroups().map((footerGroup) => (
        <tr key={footerGroup.id}>
          {footerGroup.headers.map((header, index) => (
            <TF
              header={header}
              backgroundColor={backgroundColor}
              rowSize={rowSize}
            />
          ))}
        </tr>
      ))}
    </tfoot>
  );
};

export default TFoot;
