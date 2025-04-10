"use client";

import { useState } from "react";
import { BottomSheet, Button } from "@heathmont/moon-core-tw";

export const Sizes = () => {
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const closeSmallBottomSheet = () => {
    setIsSmallOpen(false);
  };
  const openSmallBottomSheet = () => {
    setIsSmallOpen(true);
  };
  const [isMediumOpen, setIsMediumOpen] = useState(false);
  const closeMediumBottomSheet = () => {
    setIsMediumOpen(false);
  };
  const openMediumBottomSheet = () => {
    setIsMediumOpen(true);
  };
  const [isFullOpen, setIsFullOpen] = useState(false);
  const closeFullBottomSheet = () => {
    setIsFullOpen(false);
  };
  const openFullBottomSheet = () => {
    setIsFullOpen(true);
  };
  return (
    <>
      <div>
        <Button variant="outline" onClick={openSmallBottomSheet}>
          Default small BottomSheet
        </Button>
        <BottomSheet open={isSmallOpen} onClose={closeSmallBottomSheet}>
          <BottomSheet.Panel className="flex flex-col gap-space-8 items-center">
            <div className="flex grow w-full items-center justify-center bg-brand-subtle text-brand">
              BottomSheet content
            </div>
            <Button onClick={closeSmallBottomSheet}>Optional close</Button>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
      <div>
        <Button variant="outline" onClick={openMediumBottomSheet}>
          Medium BottomSheet
        </Button>
        <BottomSheet open={isMediumOpen} onClose={closeMediumBottomSheet}>
          <BottomSheet.Panel className="flex flex-col gap-space-8 items-center h-2/3">
            <div className="flex grow w-full items-center justify-center bg-brand-subtle text-brand">
              BottomSheet content
            </div>
            <Button onClick={closeMediumBottomSheet}>Optional close</Button>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
      <div>
        <Button variant="outline" onClick={openFullBottomSheet}>
          Fullscreen BottomSheet
        </Button>
        <BottomSheet open={isFullOpen} onClose={closeFullBottomSheet}>
          <BottomSheet.Panel className="flex flex-col gap-space-8 items-center h-full">
            <div className="flex grow w-full items-center justify-center bg-brand-subtle text-brand">
              BottomSheet content
            </div>
            <Button onClick={closeFullBottomSheet}>Optional close</Button>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
    </>
  );
};

export default Sizes;
