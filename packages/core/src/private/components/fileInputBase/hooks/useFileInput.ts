import React, {
  ForwardedRef,
  forwardRef,
  memo,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import createAcceptRegex from "../utils/createAcceptRegex";
import Errors from "../types/Errors";
import FileInputBaseProps from "../types/FileInputBaseProps";
import FileInputRef from "../types/FileInputRef";

const useFileInput = (
  props: FileInputBaseProps,
  ref: ForwardedRef<FileInputRef>,
) => {
  const {
    onFileUpload,
    onFileRemove,
    initFile,
    accept = "*/*",
    maxFileSize,
    errorMessages = {
      maxFileSize: "File is too large",
      type: "Invalid file type",
    },
  } = props;

  const [file, setFile] = useState<File | undefined>(initFile);
  const [errors, setErrors] = React.useState<Errors>({});
  const inputFileRef = useRef<HTMLInputElement>(null);
  const acceptRegexp =
    accept !== "*/*" ? createAcceptRegex(accept) : /^.*\/.*$/;
  const hasErrors = Object.keys(errors).length > 0;
  const fileName = file?.name || "";

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
    if (event.key === "Enter" || event.key === " " || event.key === "Space") {
      event.preventDefault();
      inputFileRef?.current?.click();
    }
  };

  return {
    handleFileUpload,
    handleFileRemove,
    handleKeyDown,
    file,
    errors,
    inputFileRef,
    hasErrors,
    fileName,
  };
};

export default useFileInput;
