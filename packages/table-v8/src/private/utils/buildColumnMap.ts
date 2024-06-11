import type ColumnData from "../types/ColumnData";

const buildColumnMap = (tableRef: HTMLTableElement) => {
  const columnMap: ColumnData[][] = [];
  const tHeadRef = tableRef.querySelector("thead");
  tHeadRef?.childNodes.forEach((row, rowIndex) => {
    const rowCap = row.childNodes.length;
    const columns = JSON.parse(
      JSON.stringify(
        Array<ColumnData>(rowCap).fill({ left: 0, width: 0, right: 0 }),
      ),
    );

    for (let i = 0; i < rowCap; i++) {
      if (i > 0) {
        columns[i].left = columns[i - 1].left + columns[i - 1].width;
        columns[rowCap - i - 1].right =
          columns[rowCap - i].right + columns[rowCap - i].width;
      }
      columns[i].width = (
        row.childNodes[i] as HTMLTableCellElement
      ).offsetWidth;
      columns[rowCap - i - 1].width = (
        row.childNodes[rowCap - i - 1] as HTMLTableCellElement
      ).offsetWidth;
    }

    columnMap[rowIndex] = columns;
  });

  return columnMap;
};

export default buildColumnMap;
