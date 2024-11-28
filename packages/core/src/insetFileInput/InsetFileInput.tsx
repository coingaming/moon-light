import React, { forwardRef, memo } from "react";
import InsetInput from "../insetInput/InsetInput";
import InsetFileInputProps from "./types/InsetFileInputProps";
import FileInputRef from "../private/components/fileInputBase/types/FileInputRef";
import FileInputBase from "../private/components/fileInputBase/FileInputBase";

const InsetFileInput = memo(
  forwardRef<FileInputRef, InsetFileInputProps>((props, ref) => {
    const {
      id,
      accept,
      maxFileSize,
      initFile,
      onFileUpload,
      onFileRemove,
      errorMessages,
      label = "Choose a file",
      placeholder = "No file chosen",
      ...rest
    } = props;

    const fileUploadHandler = (file: File | undefined) => {
      onFileUpload?.(file);
    };

    const fileRemoveHandler = () => {
      onFileRemove?.();
    };

    return (
      <FileInputBase
        id={id}
        accept={accept}
        maxFileSize={maxFileSize}
        initFile={initFile}
        onFileUpload={fileUploadHandler}
        onFileRemove={fileRemoveHandler}
        errorMessages={errorMessages}
        ref={ref}
      >
        {(file: File | undefined) => (
          <InsetInput
            value={file?.name || ""}
            placeholder={placeholder}
            readOnly
            {...rest}
          >
            <InsetInput.Label>{label}</InsetInput.Label>
          </InsetInput>
        )}
      </FileInputBase>
    );
  }),
);

export default InsetFileInput;
