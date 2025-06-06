import Errors from "./Errors";

type FileInputBaseProps = {
  children?: React.ReactNode | ((file?: File) => React.ReactElement);
  accept?: string;
  maxFileSize?: number;
  onFileUpload?: (file?: File) => void;
  onFileRemove?: () => void;
  initFile?: File;
  errorMessages?: Errors;
  id?: string;
  disabled?: boolean;
  readonly?: boolean;
};

export default FileInputBaseProps;
