import React, { forwardRef, memo } from "react";
import InsetInput from "../insetInput/InsetInput";
import InsetFileInputProps from "./types/InsetFileInputProps";
import FileInputRef from "../FileInputBase/types/FileInputRef";
import FileInputBase from "../FileInputBase/FileInputBase";

const InsetFileInput = memo(
  forwardRef<FileInputRef, InsetFileInputProps>((props, ref) => {
    const { label = "Choose a file" } = props;

    return (
      <FileInputBase {...props} ref={ref}>
        <InsetInput>
          <InsetInput.Label>{label}</InsetInput.Label>
        </InsetInput>
      </FileInputBase>
    );
  }),
);

export default InsetFileInput;
