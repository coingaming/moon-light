import React, { forwardRef, memo } from "react";
import Input from "../input/Input";
import GenericUpload from "../private/icons/GenericUpload";
import GenericCloseSmall from "../private/icons/ControlsCloseSmall";
import type InputProps from "../input/private/types/InputProps";

type FileInputProps = Omit<InputProps, "type"> & {
  onFileUpload?: (file?: File) => void;
  onFileRemove?: () => void;
  initFile?: File;
};

const FileInput = memo(
  forwardRef<HTMLInputElement, FileInputProps>(
    (
      { onFileUpload, onFileRemove, initFile, placeholder, className, ...rest },
      ref,
    ) => {
      const [file, setFile] = React.useState<File | undefined>(initFile);
      const inputFileRef = React.useRef<HTMLInputElement>(null);

      const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (
        event,
      ) => {
        const file = event?.target?.files?.[0];

        if (!file) {
          return;
        }

        setFile(file);
        onFileUpload?.(file);
      };

      const handleFileRemove = () => {
        setFile(undefined);
        onFileRemove?.();
      };

      const fileName = file?.name || "";

      return (
        <div className="relative">
          <label
            htmlFor="file-input"
            className="absolute w-full h-full top-0 left-0 cursor-pointer z-20"
            tabIndex={0}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" ||
                event.key === " " ||
                event.key === "Space"
              ) {
                event.preventDefault();
                inputFileRef?.current?.click();
              }
            }}
          />
          <Input
            type="text"
            className={`top-0 left-0 pr-10 ${className || ""}`}
            placeholder={placeholder}
            value={fileName}
            readOnly
            {...rest}
          />
          {!file && (
            <GenericUpload className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 size-6" />
          )}
          {file && (
            <GenericCloseSmall
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 size-6 cursor-pointer"
              onClick={handleFileRemove}
            />
          )}
          <input
            id="file-input"
            type="file"
            className="hidden"
            ref={inputFileRef}
            onChange={handleFileUpload}
          />
        </div>
      );
    },
  ),
);

export default FileInput;
