import React, { useEffect, useState } from "react";
import { Meta } from "@storybook/react";
import { Button, Modal as ModalComponent } from "@heathmont/moon-core-tw";

export default {
  title: "Moon DS/Modal",
  component: ModalComponent,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the modal is open or closed.",
    },
    className: {
      control: "text",
      description: "Custom class names for styling the modal.",
    },
    children: {
      control: "text",
      description: "Content inside the modal.",
      defaultValue: "Modal Content Here",
    },
  },
} as Meta;

// TODO: Set args type accordingly
export const Modal = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  useEffect(() => {
    if (args.open !== isOpen) {
      setIsOpen(args.open);
    }
  }, [args.open]);

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <ModalComponent open={isOpen} onClose={closeModal} className="z-50">
        <ModalComponent.Backdrop />
        <ModalComponent.Panel>
          <div className="p-4 border-b-2 border-beerus">
            <h3 className="text-moon-18 text-bulma font-medium">
              Payment successful
            </h3>
          </div>
          <div className="p-4">
            <p className="text-moon-sm text-trunks">
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
          <div className="p-4 border-t-2 border-beerus">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </ModalComponent.Panel>
      </ModalComponent>
    </>
  );
};

Modal.args = {
  open: false,
};
