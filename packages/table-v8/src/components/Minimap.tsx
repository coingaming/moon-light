import React from "react";
import MinimapProps from "../private/types/MinimapProps";

const Minimap = ({tableRef, footerRef, numberOfColumns}: MinimapProps) => {
  console.log(tableRef);
  console.log(footerRef);
  console.log(numberOfColumns);
  return (
    <div
      className="absolute z-10 w-96 h-14 bottom-4 end-10 rounded-moon-s-sm p-1 bg-black/20 shadow-md"
    >
    </div>
  );
}

export default Minimap;
