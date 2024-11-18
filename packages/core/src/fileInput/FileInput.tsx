import React, { forwardRef, memo } from "react";
import Input from "../input/Input";
import GenericUpload from "../private/icons/GenericUpload";
import GenericCloseSmall from "../private/icons/ControlsCloseSmall";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import FileInputProps from "./types/FileInputProps";
import FileInputRef from "./types/FileInputRef";
import useFileInput from "./hooks/useFileInput";

const FileInput = memo(
  forwardRef<FileInputRef, FileInputProps>((props, ref) => {
    const {
      onFileUpload,
      onFileRemove,
      initFile,
      placeholder,
      className,
      accept = "*/*",
      maxFileSize,
      errorMessages = {
        maxFileSize: "File is too large",
        type: "Invalid file type",
      },
      ...rest
    } = props;

    const {
      file,
      hasErrors,
      handleKeyDown,
      handleFileRemove,
      handleFileUpload,
      inputFileRef,
      errors,
      fileName,
    } = useFileInput(props, ref);

    return (
      <>
        <div className="relative">
          <label
            htmlFor="file-input"
            className={mergeClassnames(
              "absolute w-full h-full top-0 start-0 cursor-pointer z-20 rounded-moon-i-sm hover:shadow-input-hov",
              hasErrors &&
                "shadow-input-err hover:shadow-input-err focus:shadow-input-err focus-visible:shadow-input-err focus:outline-none",
            )}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          />
          <Input
            type="text"
            className={mergeClassnames(
              "top-0 start-0 pe-10",
              className && className,
            )}
            placeholder={placeholder}
            value={fileName}
            readOnly
            error={hasErrors}
            {...rest}
          />
          {!file && (
            <GenericUpload className="absolute end-4 top-1/2 transform -translate-y-1/2 z-10 size-6" />
          )}
          {file && (
            <GenericCloseSmall
              className="absolute end-4 top-1/2 transform -translate-y-1/2 z-30 size-6 cursor-pointer"
              onClick={handleFileRemove}
            />
          )}
          <input
            id="file-input"
            type="file"
            className="hidden"
            ref={inputFileRef}
            onChange={handleFileUpload}
            accept={accept}
          />
        </div>
        <ul className="text-chichi">
          {Object.entries(errors).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </>
    );
  }),
);

export default FileInput;
