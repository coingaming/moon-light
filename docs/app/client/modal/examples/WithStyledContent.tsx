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
        <Modal.Panel className="lg:max-w-md bg-roshi text-goten rounded-none">
          <IconButton
            variant="ghost"
            size="sm"
            className="absolute top-4 end-5 text-goten"
            onClick={closeModal}
          >
            <ControlsCloseSmall className="text-moon-24" />
          </IconButton>
          <div className="p-4 pt-11">
            <div className="mt-2">
              <h3 className="text-moon-24 text-goten font-medium text-center">
                Your payment has been successfully submitted.
              </h3>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center">
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
