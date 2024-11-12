import React, { forwardRef, memo } from "react";
import Input from "../input/Input";
import GenericUpload from "../private/icons/GenericUpload";
import GenericCloseSmall from "../private/icons/ControlsCloseSmall";
import type InputProps from "../input/private/types/InputProps";
import createAcceptRegex from "./utils/createAcceptRegex";

type Errors = {
  size?: string;
  type?: string;
};

type FileInputProps = Omit<InputProps, "type"> & {
  accept?: string;
  size?: number;
  onFileUpload?: (file?: File) => void;
  onFileRemove?: () => void;
  initFile?: File;
  errorMessages?: Errors;
};

const FileInput = memo(
  forwardRef<HTMLInputElement, FileInputProps>(
    (
      {
        onFileUpload,
        onFileRemove,
        initFile,
        placeholder,
        className,
        accept = "*/*",
        size,
        errorMessages = {
          size: "File is too large",
          type: "Invalid file type",
        },
        ...rest
      },
      ref,
    ) => {
      const [file, setFile] = React.useState<File | undefined>(initFile);
      const [errors, setErrors] = React.useState<Errors>({});
      const inputFileRef = React.useRef<HTMLInputElement>(null);
      const acceptRegexp =
        accept !== "*/*" ? createAcceptRegex(accept) : /^.*\/.*$/;

      const clearFile = () => {
        setFile(undefined);
      };

      const clearErrors = () => {
        setErrors({});
      };

      const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (
        event,
      ) => {
        clearErrors();
        const file = event?.target?.files?.[0];

        if (!file) {
          return;
        }

        const errors = errorHandling(file);
        if (Object.keys(errors).length) {
          setErrors(errors);
          return;
        }

        setFile(file);
        onFileUpload?.(file);
      };

      const handleFileRemove = () => {
        clearFile();
        clearErrors();
        onFileRemove?.();
      };

      const errorHandling = (file: File | undefined) => {
        const errors: Errors = {};
        if (!file) {
          return {};
        }

        console.log("in here oe file", { file });

        if (size && file.size > size) {
          errors.size = errorMessages.size;
        }

        if (accept === "*/*") {
          return errors;
        }

        const isValidExtension = acceptRegexp.test(file.name);
        const isValidMimeType = acceptRegexp.test(file.type);

        if (!isValidMimeType && !isValidExtension) {
          errors.type = errorMessages.type;
        }

        return errors;
      };

      const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
        if (
          event.key === "Enter" ||
          event.key === " " ||
          event.key === "Space"
        ) {
          event.preventDefault();
          inputFileRef?.current?.click();
        }
      };

      const fileName = file?.name || "";

      return (
        <div>
          <div className="relative">
            <label
              htmlFor="file-input"
              className="absolute w-full h-full top-0 start-0 cursor-pointer z-20"
              tabIndex={0}
              onKeyDown={handleKeyDown}
            />
            <Input
              type="text"
              className={`top-0 start-0 pe-10 ${className || ""}`}
              placeholder={placeholder}
              value={fileName}
              readOnly
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
              size={size}
            />
          </div>
          <ul className="text-chichi">
            {Object.entries(errors).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      );
    },
  ),
);

export default FileInput;
