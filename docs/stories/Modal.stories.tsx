import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, Modal as ModalComponent } from "@heathmont/moon-core-tw";
import { useArgs } from "@storybook/preview-api";

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
      type: "string",
      description: "Custom class names for styling the modal.",
    },
  },
} as Meta<typeof ModalComponent>;

const Template: StoryFn<typeof ModalComponent> = () => {
  const [{ open }, updateArgs] = useArgs();

  const closeModal = () => updateArgs({ open: false });
  const openModal = () => updateArgs({ open: true });

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <ModalComponent open={open} onClose={closeModal} className="z-50">
        <ModalComponent.Backdrop />
        <ModalComponent.Panel>
          <div className="p-4 border-b-2 border-beerus">
            <h3 className="text-moon-18 text-bulma font-medium">
              Payment successful
            </h3>
          </div>
          <div className="p-4">
            <p className="text-moon-sm text-trunks">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
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

export const Modal = Template.bind({});
Modal.args = {
  open: false,
  className: "",
};
