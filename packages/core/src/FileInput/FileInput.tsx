import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";
import Input from "../input/Input";
import GenericUpload from "../private/icons/GenericUpload";
import GenericCloseSmall from "../private/icons/ControlsCloseSmall";
import createAcceptRegex from "./utils/createAcceptRegex";
import mergeClassnames from "../mergeClassnames/mergeClassnames";
import FileInputProps from "./types/FileInputProps";
import Errors from "./types/Errors";
import FileInputRef from "./types/FileInputRef";

const FileInput = memo(
  forwardRef<FileInputRef, FileInputProps>(
    (
      {
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
      },
      ref,
    ) => {
      const [file, setFile] = React.useState<File | undefined>(initFile);
      const [errors, setErrors] = React.useState<Errors>({});
      const inputFileRef = useRef<HTMLInputElement>(null);
      const acceptRegexp =
        accept !== "*/*" ? createAcceptRegex(accept) : /^.*\/.*$/;
      const hasErrors = Object.keys(errors).length > 0;

      useImperativeHandle(
        ref,
        () => ({
          click: () => {
            inputFileRef?.current?.click();
          },
          focus: () => {
            inputFileRef?.current?.focus();
          },
        }),
        [],
      );

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

        const fileErrors = errorHandling(file);
        if (Object.keys(fileErrors).length) {
          setErrors(fileErrors);
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
        const fileErrors: Errors = {};
        if (!file) {
          return {};
        }

        if (maxFileSize && file.size > maxFileSize) {
          fileErrors.maxFileSize = errorMessages.maxFileSize;
        }

        if (accept === "*/*") {
          return fileErrors;
        }

        const isValidExtension = acceptRegexp.test(file.name);
        const isValidMimeType = acceptRegexp.test(file.type);

        if (!isValidMimeType && !isValidExtension) {
          fileErrors.type = errorMessages.type;
        }

        return fileErrors;
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
    },
  ),
);

export default FileInput;
