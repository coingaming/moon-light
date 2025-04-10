import React, { forwardRef, memo } from "react";
import GenericUpload from "../../icons/GenericUpload";
import GenericCloseSmall from "../../icons/ControlsCloseSmall";
import mergeClassnames from "../../../mergeClassnames/mergeClassnames";

import useFileInput from "./hooks/useFileInput";
import FileInputRef from "./types/FileInputRef";
import FileInputBaseProps from "./types/FileInputBaseProps";

const FileInputBase = forwardRef<FileInputRef, FileInputBaseProps>(
  (props, ref) => {
    const { id, accept = "*/*", children } = props;

    const {
      file,
      hasErrors,
      handleKeyDown,
      handleFileRemove,
      handleFileUpload,
      inputFileRef,
      errors,
    } = useFileInput(props, ref);

    return (
      <>
        <div className="relative">
          <label
            htmlFor={id}
            className={mergeClassnames(
              "absolute w-full h-full top-0 start-0 cursor-pointer z-20 rounded-8 hover:ring-2 hover:ring-inset hover:ring-primary focus:ring-2 focus:ring-inset focus:ring-active transition-shadow",
              hasErrors &&
                "ring-2 ring-negative hover:ring-2 hover:ring-negative focus:ring-2 focus:ring-negative focus:outline-none",
            )}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          />
          {typeof children === "function" ? children(file) : children}
          {!file && (
            <GenericUpload className="absolute end-space-16 top-1/2 transform -translate-y-1/2 z-10 size-space-24" />
          )}
          {file && (
            <GenericCloseSmall
              className="absolute end-space-16 top-1/2 transform -translate-y-1/2 z-30 size-space-24 cursor-pointer"
              onClick={handleFileRemove}
            />
          )}
          <input
            id={id}
            type="file"
            className="hidden"
            ref={inputFileRef}
            onChange={handleFileUpload}
            accept={accept}
          />
        </div>
        <ul className="text-negative">
          {Object.entries(errors).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </>
    );
  },
);

export default FileInputBase;
