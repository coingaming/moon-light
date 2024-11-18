import Errors from "./Errors";

type FileInputBaseProps = {
  children?: React.ReactNode | ((file?: File) => React.ReactNode);
  renderContent?: (file?: File) => React.ReactNode;
  accept?: string;
  maxFileSize?: number;
  onFileUpload?: (file?: File) => void;
  onFileRemove?: () => void;
  initFile?: File;
  errorMessages?: Errors;
};

export default FileInputBaseProps;
