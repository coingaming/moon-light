import InputProps from "../../input/private/types/InputProps";
import Errors from "./Errors";

type FileInputProps = Omit<InputProps, "type"> & {
  accept?: string;
  maxFileSize?: number;
  onFileUpload?: (file?: File) => void;
  onFileRemove?: () => void;
  initFile?: File;
  errorMessages?: Errors;
};

export default FileInputProps;
