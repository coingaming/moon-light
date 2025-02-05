import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { Modal as ModalComponent } from "@heathmont/moon-core-tw";

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

export const Modal = (args: any) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Click to open the Modal</button>
      <ModalComponent {...args} open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalComponent.Panel>
          <div className="p-4">
            <ModalComponent.Title>Modal Title</ModalComponent.Title>
            <p>{args.children}</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </ModalComponent.Panel>
      </ModalComponent>
    </>
  );
};

Modal.args = {
  open: false,
};
