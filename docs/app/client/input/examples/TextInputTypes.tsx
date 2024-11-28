"use client";

import { FileInput, Input, Label, Hint } from "@heathmont/moon-core-tw";
import { useState } from "react";

const TextInputTypes = () => {
  const [file, setFile] = useState<File>();
  const fileHandler = (file: File | undefined) => {
    setFile(file);
  };

  const removeFileHandler = () => {
    setFile(undefined);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <div className="w-full">
          <Label>Number</Label>
          <Input type="number" placeholder="e.g. 12345" />
        </div>

        <div className="w-full">
          <Label>Date</Label>
          <Input type="date" aria-label="Date" />
        </div>
        <div className="w-full">
          <Label htmlFor="time-type">Time</Label>
          <Input type="time" id="time-type" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <div className="w-full">
          <Label htmlFor="datetimelocal-type">Datetime local</Label>
          <Input type="datetime-local" id="datetimelocal-type" />
        </div>
        <div className="w-full">
          <Label>Email</Label>
          <Input type="email" placeholder="e.g. john.doe@domain.com" />
        </div>
        <div className="w-full">
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
        <div className="w-full">
          <Label>Search</Label>
          <Input type="search" placeholder="e.g. Search something" />
        </div>
        <div className="w-full">
          <Label>Tel</Label>
          <Input type="tel" placeholder="e.g. +372 123 4567" />
        </div>
        <div className="w-full">
          <Label>Url</Label>
          <Input type="url" placeholder="e.g. https://domain.com" />
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-2 w-full">
        <div>
          <Label>File</Label>
          <FileInput
            onFileUpload={fileHandler}
            onFileRemove={removeFileHandler}
            placeholder="Choose a file"
            accept=".jpg, .png, video/mp4, .pdf"
            maxFileSize={4000 * 1024}
          />
          {file && <Hint>File uploaded: {file.name}</Hint>}
        </div>
      </div>
    </>
  );
};

export default TextInputTypes;
