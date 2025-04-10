"use client";

import { useState } from "react";
import { Button, Drawer } from "@heathmont/moon-core-tw";

export const WithBackdrop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  return (
    <>
      <Button variant="outline" onClick={handleClick}>
        Show Drawer with Backdrop
      </Button>
      <Drawer open={isOpen} setOpen={setIsOpen}>
        <Drawer.Panel>
          <div className="flex justify-between items-center p-space-12 border-b border-primary">
            <p>Drawer with Backdrop</p>
          </div>
          <div className="p-space-12">Drawer content</div>
        </Drawer.Panel>
        <Drawer.Backdrop />
      </Drawer>
    </>
  );
};

export default WithBackdrop;
