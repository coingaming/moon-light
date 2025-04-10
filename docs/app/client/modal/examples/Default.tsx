"use client";

import React, { useState } from "react";
import { Modal, Button } from "@heathmont/moon-core-tw";

const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal open={isOpen} onClose={closeModal} className="z-50">
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="p-space-16 border-b-space-8 border-primary">
            <h3 className="text-heading-100 text-primary">
              Payment successful
            </h3>
          </div>
          <div className="p-space-16">
            <p className="text-body-300 text-secondary">
              {/* cSpell:disable */}
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam blandit massa at lorem
              fermentum volutpat. Aliquam varius faucibus turpis, in facilisis
              dui dictum ac. Nulla ac consequat enim. Ut lobortis ultricies
              mauris eget volutpat. Aliquam aliquam nisl in nulla sagittis, eget
              viverra est ullamcorper.
              {/* cSpell:enable */}
            </p>
          </div>
          <div className="p-space-16 border-t-space-8 border-primary">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Default;
