"use client";

import { useState } from "react";
import { BottomSheet, Button } from "@heathmont/moon-core-tw";

export const Default = () => {
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
        Default BottomSheet
      </Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet}>
        <BottomSheet.Panel>
          <div className="flex grow items-center justify-center bg-jiren text-piccolo">
            BottomSheet content
          </div>
        </BottomSheet.Panel>
        <BottomSheet.Backdrop />
      </BottomSheet>
    </>
  );
};

export default Default;
