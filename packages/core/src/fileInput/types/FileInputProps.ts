import InputProps from "../../input/private/types/InputProps";
import FileInputBaseProps from "../../private/components/fileInputBase/types/FileInputBaseProps";

type FileInputProps = Omit<InputProps, "type"> & FileInputBaseProps;

export default FileInputProps;
