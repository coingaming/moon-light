import FileInputBaseProps from "../../FileInputBase/types/FileInputBaseProps";
import InsetInputProps from "../../insetInput/private/types/InsetInputProps";

type InsetFileInputProps = Omit<InsetInputProps, "type"> &
  FileInputBaseProps & {
    label?: string;
  };

export default InsetFileInputProps;
