"use client";

import { useState, useEffect } from "react";
import { Modal, Button } from "@heathmont/moon-core-tw";

interface WelcomeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToNew: () => void;
}

const WelcomeDialogComponent: React.FC<WelcomeDialogProps> = ({
  isOpen,
  onClose,
  onGoToNew,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose} className="z-50">
      <Modal.Backdrop />
      <Modal.Panel className="max-w-lg">
        <div className="p-6 border-b border-beerus">
          <Modal.Title className="text-moon-24 text-bulma font-medium">
            New Generation of Moon is Here!
          </Modal.Title>
        </div>
        <div className="flex flex-col gap-4 p-6 text-moon-16">
          <p>
            Explore the next generation of Moon Design System! We&apos;ve
            completely reimagined and rebuilt our Design System from the ground
            up to provide you with:
          </p>
          <ul className="ms-10 list-disc">
            <li>Enhanced customization possibilities</li>
            <li>Improved adoptability experience</li>
            <li>3-layer architecture for better scalability</li>
            <li>Comprehensive documentation and examples</li>
          </ul>
          <p>
            Join thousands of developers and designers who are already building
            amazing experiences with Moon Design System!
          </p>
        </div>
        <div className="p-6 border-t border-beerus flex gap-3 justify-end">
          <Button variant="ghost" onClick={onClose} tabIndex={-1}>
            Maybe Later
          </Button>
          <Button onClick={onGoToNew}>Explore New Moon</Button>
        </div>
      </Modal.Panel>
    </Modal>
  );
};

interface WelcomeDialogWrapperProps {
  children: React.ReactNode;
}

const WelcomeDialog: React.FC<WelcomeDialogWrapperProps> = ({ children }) => {
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);

  useEffect(() => {
    setShowWelcomeDialog(true);
  }, []);

  const handleCloseDialog = () => {
    setShowWelcomeDialog(false);
  };

  const handleGoToNew = () => {
    window.open("https://beta.moon.io", "_blank");
    setShowWelcomeDialog(false);
  };

  return (
    <>
      {children}
      <WelcomeDialogComponent
        isOpen={showWelcomeDialog}
        onClose={handleCloseDialog}
        onGoToNew={handleGoToNew}
      />
    </>
  );
};

export default WelcomeDialog;
