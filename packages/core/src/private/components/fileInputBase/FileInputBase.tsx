import React, { forwardRef, memo } from "react";
import GenericUpload from "../../icons/GenericUpload";
import GenericCloseSmall from "../../icons/ControlsCloseSmall";
import mergeClassnames from "../../../mergeClassnames/mergeClassnames";

import useFileInput from "./hooks/useFileInput";
import FileInputRef from "./types/FileInputRef";
import FileInputBaseProps from "./types/FileInputBaseProps";

const FileInputBase = memo(
  forwardRef<FileInputRef, FileInputBaseProps>((props, ref) => {
    const { accept = "*/*", renderContent } = props;

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
          {renderContent?.(file)}
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

export default FileInputBase;
