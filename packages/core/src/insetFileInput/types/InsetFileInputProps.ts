import FileInputBaseProps from "../../private/components/fileInputBase/types/FileInputBaseProps";
import InsetInputProps from "../../insetInput/private/types/InsetInputProps";
import React from "react";

type InsetFileInputProps = Omit<InsetInputProps, "type"> &
  Omit<FileInputBaseProps, "children"> & {
    label?: React.ReactNode;
  };

export default InsetFileInputProps;
