"use client";

import { useState } from "react";
import { Button, Drawer, IconButton } from "@heathmont/moon-core-tw";
import { ControlsCloseSmall } from "@heathmont/moon-icons-tw";

export const WithClose = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button variant="outline" onClick={handleClick}>
        Show Drawer with Close button
      </Button>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Drawer.Panel>
          <div className="flex justify-between items-center p-space-12 border-b border-primary">
            <p>Header</p>
            <IconButton
              variant="ghost"
              onClick={handleClose}
              aria-label="Close"
            >
              <ControlsCloseSmall />
            </IconButton>
          </div>
          <div className="p-space-12">Drawer content</div>
        </Drawer.Panel>
      </Drawer>
    </>
  );
};

export default WithClose;
