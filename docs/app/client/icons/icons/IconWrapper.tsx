"use client";

import { Chip, Snackbar } from "@heathmont/moon-core-tw";
import React from "react";
import { useState, useCallback } from "react";
import * as Icons from "@heathmont/moon-icons-tw";

type IconProps = {
  name: string;
  children?: React.ReactNode;
};

const IconWrapper = ({ children, name }: IconProps) => {
  const [snackbar, setSnackbar] = useState("");

  const openSnackbarHandler = useCallback(
    (type: string) => {
      if (snackbar) {
        setSnackbar("");
        setTimeout(() => {
          setSnackbar(type);
        }, 400);
      } else {
        setSnackbar(type);
      }
    },
    [snackbar],
  );

  const copyCode = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(
        name ? `import { ${name} } from '@heathmont/moon-icons-tw';` : "",
      );
      openSnackbarHandler("top-right");
    }
  };

  const renderIcon = (name: string) => {
    const IconComponent = Icons[name as keyof typeof Icons];
    return IconComponent ? <IconComponent className="text-moon-24" /> : null;
  };

  return (
    <>
      <div className="flex flex-col min-w-16 w-16 content-start">
        <Chip
          variant="ghost"
          aria-label={name}
          onClick={copyCode}
          iconOnly={children}
          className="text-moon-24 h-16"
        />
        <p className="text-moon-10 text-trunks text-center truncate ...">
          {name}
        </p>
      </div>
      <Snackbar isOpen={snackbar === "top-right"} onOpenChange={setSnackbar}>
        <Snackbar.Message className="flex gap-2">
          Icon copied for import
          {renderIcon(name)}
        </Snackbar.Message>
      </Snackbar>
    </>
  );
};

export default IconWrapper;
