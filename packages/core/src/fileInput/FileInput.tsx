import React, { forwardRef, memo } from "react";
import Input from "../input/Input";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import FileInputProps from "./types/FileInputProps";
import FileInputBase from "../private/components/fileInputBase/FileInputBase";
import FileInputRef from "../private/components/fileInputBase/types/FileInputRef";

const FileInput = memo(
  forwardRef<FileInputRef, FileInputProps>((props, ref) => {
    const {
      id,
      onFileUpload,
      onFileRemove,
      initFile,
      placeholder,
      className,
      accept,
      maxFileSize,
      errorMessages,
      readOnly,
      disabled,
      ...rest
    } = props;

    return (
      <FileInputBase
        id={id}
        accept={accept}
        maxFileSize={maxFileSize}
        initFile={initFile}
        onFileUpload={onFileUpload}
        onFileRemove={onFileRemove}
        errorMessages={errorMessages}
        ref={ref}
        readOnly={readOnly}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {(file: File | undefined) => (
          <Input
            type="text"
            className={mergeClassnames(
              "top-0 start-0 pe-10",
              className && className,
            )}
            placeholder={placeholder}
            value={file?.name || ""}
            readOnly
            disabled={disabled}
            {...rest}
          />
        )}
      </FileInputBase>
    );
  }),
);

export default FileInput;
