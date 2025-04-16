"use client";

import { Chip } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const Customization = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = useCallback(() => {
    setIsActive(!isActive);
  }, [setIsActive, isActive]);

  return (
    <>
      <Chip
        onClick={onClick}
        isActive={isActive}
        isStroke
        className={
          isActive
            ? "outline-none text-primary hover:text-negative border border-brand hover:border-primary"
            : "border border-primary text-negative hover:bg-brand-subtle hover:shadow-none"
        }
      >
        Custom Chip
      </Chip>
    </>
  );
};

export default Customization;
