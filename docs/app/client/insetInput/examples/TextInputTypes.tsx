"use client";

import { InsetFileInput, InsetInput, Hint } from "@heathmont/moon-core-tw";
import { useState } from "react";

const TextInputTypes = () => {
  const [file, setFile] = useState<File>();
  const testFileHandler = (file: File | undefined) => {
    setFile(file);
  };

  const removeTestFileHandler = () => {
    setFile(undefined);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <InsetInput type="number" placeholder="e.g. 12345">
          <InsetInput.Label>Number</InsetInput.Label>
        </InsetInput>
        <InsetInput type="date" aria-label="date">
          <InsetInput.Label>Date</InsetInput.Label>
        </InsetInput>
        <InsetInput type="time" aria-label="time">
          <InsetInput.Label>Time</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <InsetInput type="datetime-local" aria-label="datetime-local">
          <InsetInput.Label>Datetime local</InsetInput.Label>
        </InsetInput>
        <InsetInput type="email" placeholder="e.g. john.doe@domain.com">
          <InsetInput.Label>Email</InsetInput.Label>
        </InsetInput>
        <InsetInput type="password" placeholder="Password">
          <InsetInput.Label>Password</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <InsetInput type="search" placeholder="e.g. Search something">
          <InsetInput.Label>Search</InsetInput.Label>
        </InsetInput>
        <InsetInput type="tel" placeholder="e.g. +372 123 4567">
          <InsetInput.Label>Tel</InsetInput.Label>
        </InsetInput>
        <InsetInput type="url" placeholder="e.g. https://domain.com">
          <InsetInput.Label>Url</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="grid grid-cols-3 w-full gap-2">
        <div className="w-full">
          <InsetFileInput
            onFileUpload={testFileHandler}
            onFileRemove={removeTestFileHandler}
            label={!file ? "Choose a file" : "File"}
            accept="image/*, .pdf"
            maxFileSize={4000 * 1024}
          />
          {file && <Hint>File uploaded: {file.name}</Hint>}
        </div>
      </div>
    </>
  );
};

export default TextInputTypes;
