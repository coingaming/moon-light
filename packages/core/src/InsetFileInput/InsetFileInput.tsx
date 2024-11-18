import React, { forwardRef, memo } from "react";
import InsetInput from "../insetInput/InsetInput";
import InsetFileInputProps from "./types/InsetFileInputProps";
import FileInputRef from "../private/components/fileInputBase/types/FileInputRef";
import FileInputBase from "../private/components/fileInputBase/FileInputBase";

const InsetFileInput = memo(
  forwardRef<FileInputRef, InsetFileInputProps>((props, ref) => {
    const {
      accept,
      maxFileSize,
      initFile,
      onFileUpload,
      onFileRemove,
      errorMessages,
      label = "Choose a file",
      ...rest
    } = props;

    const inputRef = React.useRef<HTMLInputElement>(null);

    const fileUploadHandler = (file: File | undefined) => {
      onFileUpload?.(file);
    };
    const fileRemoveHandler = () => {
      onFileRemove?.();
    };

    return (
      <FileInputBase
        accept={accept}
        maxFileSize={maxFileSize}
        initFile={initFile}
        onFileUpload={fileUploadHandler}
        onFileRemove={fileRemoveHandler}
        errorMessages={errorMessages}
        ref={ref}
        renderContent={(file) => (
          <InsetInput
            value={file?.name || ""}
            placeholder="No file chosen"
            readOnly
            {...rest}
            ref={inputRef}
          >
            <InsetInput.Label>{label}</InsetInput.Label>
          </InsetInput>
        )}
      ></FileInputBase>
    );
  }),
);

export default InsetFileInput;
