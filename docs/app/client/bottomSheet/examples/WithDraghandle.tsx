"use client";

import { useState } from "react";
import { BottomSheet, Button } from "@heathmont/moon-core-tw";

export const WithDraghandle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeBottomSheet = () => {
    setIsOpen(false);
  };
  const openBottomSheet = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Button variant="outline" onClick={openBottomSheet}>
        BottomSheet with Draghandle
      </Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet}>
        <BottomSheet.Panel>
          <BottomSheet.Draghandle />
          <div className="flex grow items-center justify-center bg-brand-subtle text-brand">
            BottomSheet content
          </div>
        </BottomSheet.Panel>
        <BottomSheet.Backdrop />
      </BottomSheet>
    </>
  );
};

export default WithDraghandle;
