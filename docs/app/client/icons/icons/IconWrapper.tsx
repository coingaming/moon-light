"use client";

import CodeCopy from "@/components/exampleSection/codePreview/CodeCopy";
import { Chip, Tooltip, Modal } from "@heathmont/moon-core-tw";
import React from "react";
import { useState } from "react";

type IconProps = {
  name: string;
  children?: React.ReactNode;
  onClick: (v: string) => void;
  selectedIcons: string[];
};

const IconWrapper = ({ children, name, onClick, selectedIcons }: IconProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      {/* <Tooltip>
        <Tooltip.Trigger> */}
      <div className="flex flex-col min-w-16 w-16 content-start">
        <Chip
          variant="ghost"
          aria-label={name}
          onClick={openModal}
          // onClick={() => onClick(name)}
          // isActive={isShown}
          iconOnly={children}
          className="text-moon-24 h-16"
        />
        {/* </Tooltip.Trigger>
        <Tooltip.Content>
          {name}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip> */}
        <p className="text-moon-10 text-trunks text-center truncate ...">
          {name}
        </p>
      </div>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel className="bg-bulma text-gohan ps-8 pe-12 py-4 w-auto max-w-full">
          <pre className="text-gohan">{`import { ${name} } from '@heathmont/moon-icons-tw';`}</pre>
          {name && (
            <CodeCopy
              code={`import { ${name} } from '@heathmont/moon-icons-tw';`}
              className="text-roshi"
            />
          )}
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default IconWrapper;
