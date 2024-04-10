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
      openSnackbarHandler("isOpen");
    }
  };

  const renderIcon = (name: string) => {
    const IconComponent = Icons[name as keyof typeof Icons];
    return IconComponent ? <IconComponent className="text-moon-24" /> : null;
  };

  return (
    <>
      <div className="flex flex-col gap-1 items-center w-14">
        <Chip
          variant="ghost"
          aria-label={name}
          onClick={copyCode}
          iconOnly={children}
          className="text-moon-24"
        />
        <p className="w-full text-moon-10 text-trunks text-center truncate hover:w-auto hover:bg-goku hover:px-2 hover:z-1">
          {name}
        </p>
      </div>
      <Snackbar
        isOpen={snackbar === "isOpen"}
        onOpenChange={setSnackbar}
        position="bottom-center"
      >
        <Snackbar.Message className="flex gap-2">
          <Icons.GenericCheckAlternative className="text-moon-24 text-roshi" />
          Icon {renderIcon(name)} copied for import
        </Snackbar.Message>
      </Snackbar>
    </>
  );
};

export default IconWrapper;
