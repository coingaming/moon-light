import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import createAcceptRegex from "../utils/createAcceptRegex";
import Errors from "../types/Errors";
import FileInputBaseProps from "../types/FileInputBaseProps";
import FileInputRef from "../types/FileInputRef";

const DEFAULT_MAX_FILE_SIZE = 100 * 1014 * 1024;

const useFileInput = (
  props: FileInputBaseProps,
  ref: ForwardedRef<FileInputRef>,
) => {
  const {
    onFileUpload,
    onFileRemove,
    initFile,
    accept = "*/*",
    maxFileSize = DEFAULT_MAX_FILE_SIZE,
    errorMessages = {
      maxFileSize: "File is too large",
      type: "Invalid file type",
    },
  } = props;

  const [file, setFile] = useState<File | undefined>();
  const [errors, setErrors] = React.useState<Errors>({});
  const inputFileRef = useRef<HTMLInputElement>(null);
  const acceptRegexp = useMemo(
    () => (accept !== "*/*" ? createAcceptRegex(accept) : /^.*\/.*$/),
    [accept],
  );
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

  useEffect(() => {
    handleFileUpdate(initFile);
  }, [initFile]);

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

    handleFileUpdate(file) && onFileUpload?.(file);
  };

  const handleFileUpdate = (file: File | undefined) => {
    const hasErrors = handleFileErrors(file);

    if (hasErrors) {
      return false;
    }

    setFile(file);
    return true;
  };

  const handleFileRemove = () => {
    clearFile();
    clearErrors();
    onFileRemove?.();
  };

  const handleFileErrors = (file: File | undefined) => {
    const fileErrors = errorHandling(file);
    if (Object.keys(fileErrors).length) {
      setErrors(fileErrors);
      return true;
    }
    return false;
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
