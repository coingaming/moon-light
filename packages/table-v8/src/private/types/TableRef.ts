import DataHelper from "../../private/types/DataHelper";
import { Column } from ".";

type TableRef = {
  getAllLeafColumns: () => Column<DataHelper, unknown>[];
  getIsAllColumnsVisible: () => boolean;
  getToggleAllColumnsVisibilityHandler: () => (event: unknown) => void;
};

export default TableRef;
