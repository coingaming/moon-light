"use client";

import { useState } from "react";
import { Modal, Button, IconButton } from "@heathmont/moon-core-tw";
import { ControlsCloseSmall } from "@heathmont/moon-icons-tw";

const WithStyledContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal open={isOpen} onClose={closeModal} className="z-50">
        <Modal.Backdrop />
        <Modal.Panel className="lg:max-w-md bg-positive text-force-light rounded-none">
          <IconButton
            variant="ghost"
            size="sm"
            className="absolute top-space-16 end-space-20 icon-force-light"
            onClick={closeModal}
          >
            <ControlsCloseSmall className="text-heading-200" />
          </IconButton>
          <div className="p-space-16 pt-space-44">
            <div className="mt-space-8">
              <h3 className="text-heading-200 text-force-light text-center">
                Your payment has been successfully submitted.
              </h3>
            </div>
          </div>
          <div className="p-space-16 flex items-center justify-center">
            <Button variant="outline" onClick={closeModal}>
              Got it, thanks!
            </Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default WithStyledContent;
