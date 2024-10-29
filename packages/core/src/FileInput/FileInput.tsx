import React, { FC, forwardRef } from "react";
import Input from "../input/Input";
import GenericUpload from "../private/icons/GenericUpload";
import InputProps from "../input/private/types/InputProps";

type FileInputProps = InputProps & {
  onFileUpload?: (file?: File) => void;
  initFile?: string;
};

const FileInput: FC = forwardRef<HTMLInputElement, FileInputProps>(
  ({ onFileUpload, initFile, ...rest }, ref) => {
    const [file, setFile] = React.useState<File | undefined>();

    const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (
      event,
    ) => {
      const file = event?.target?.files?.[0];
      setFile(file);
      onFileUpload?.(file);
    };

    const fileName = file?.name || "";

    return (
      <div className="relative">
        <label
          htmlFor="file-input"
          className="absolute w-full h-full top-0 left-0 cursor-pointer z-20"
        />
        <Input
          type="text"
          className="top-0 left-0 pr-10"
          placeholder="Choose a file"
          value={fileName}
          {...rest}
        />
        <GenericUpload className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 size-6" />
        <input
          id="file-input"
          type="file"
          className="hidden"
          ref={ref}
          onChange={handleFileUpload}
        />
      </div>
    );
  },
);

export default FileInput;
