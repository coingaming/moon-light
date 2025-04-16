"use client";

import { useState } from "react";
import { BottomSheet, Button } from "@heathmont/moon-core-tw";

export const Customization = () => {
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
        Customized BottomSheet
      </Button>
      <BottomSheet open={isOpen} onClose={closeBottomSheet}>
        <BottomSheet.Panel className="bg-discovery p-space-16">
          <BottomSheet.Draghandle className="after:bg-brand">
            <BottomSheet.Title className="pt-space-8 text-force-light">
              BottomSheet Title
            </BottomSheet.Title>
          </BottomSheet.Draghandle>
          <div className="flex grow items-center justify-center bg-brand-subtle text-brand">
            BottomSheet content
          </div>
        </BottomSheet.Panel>
        <BottomSheet.Backdrop />
      </BottomSheet>
    </>
  );
};

export default Customization;
