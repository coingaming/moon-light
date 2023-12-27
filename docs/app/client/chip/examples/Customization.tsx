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
            ? "outline-none text-bulma hover:text-chichi shadow shadow-bulma hover:shadow-bulma"
            : "border border-beerus text-chichi hover:bg-chichi-10 hover:shadow-none"
        }
      >
        Custom Chip
      </Chip>
    </>
  );
};

export default Customization;
