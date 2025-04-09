"use client";

import { useState } from "react";
import { BottomSheet, Button } from "@heathmont/moon-core-tw";

export const WithTitle = () => {
  const [isTitleOpen, setIsTitleOpen] = useState(false);
  const closeTitleBottomSheet = () => {
    setIsTitleOpen(false);
  };
  const openTitleBottomSheet = () => {
    setIsTitleOpen(true);
  };
  const [isMediumOpen, setIsMediumOpen] = useState(false);
  const closeMediumBottomSheet = () => {
    setIsMediumOpen(false);
  };
  const openMediumBottomSheet = () => {
    setIsMediumOpen(true);
  };
  return (
    <>
      <div>
        <Button variant="outline" onClick={openTitleBottomSheet}>
          BottomSheet with Title
        </Button>
        <BottomSheet open={isTitleOpen} onClose={closeTitleBottomSheet}>
          <BottomSheet.Panel>
            <BottomSheet.Title>BottomSheet Title</BottomSheet.Title>
            <div className="flex grow items-center justify-center bg-brand-subtle text-brand">
              BottomSheet content
            </div>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
      <div>
        <Button variant="outline" onClick={openMediumBottomSheet}>
          BottomSheet with Title and Draghandle
        </Button>
        <BottomSheet open={isMediumOpen} onClose={closeMediumBottomSheet}>
          <BottomSheet.Panel>
            <BottomSheet.Draghandle>
              <BottomSheet.Title>BottomSheet Title</BottomSheet.Title>
            </BottomSheet.Draghandle>
            <div className="flex grow items-center justify-center bg-brand-subtle text-brand">
              BottomSheet content
            </div>
          </BottomSheet.Panel>
          <BottomSheet.Backdrop />
        </BottomSheet>
      </div>
    </>
  );
};

export default WithTitle;
