"use client";

import { Chip } from "@heathmont/moon-core-tw";
import { useCallback, useState } from "react";

const sports = ["basket", "football", "cricket"];

const IsActive = () => {
  const [isActive, setIsActive] = useState<string[]>([]);
  const onClick = useCallback(
    (item: string) => {
      if (isActive.includes(item)) {
        setIsActive((prev: string[]) =>
          prev.filter((sport: string) => sport !== item)
        );
      } else {
        setIsActive([...isActive, item]);
      }
    },
    [setIsActive, isActive]
  );

  return (
    <div className="flex items-center gap-2 mt-2">
      <p className="text-moon-14">Hobbies (Poker is mandatory):</p>
      <Chip className="border border-beerus" isActive>
        Poker
      </Chip>
      {sports.map((item: string) => (
        <Chip
          className="border border-beerus"
          onClick={() => onClick(item)}
          isActive={isActive.includes(item)}
          isStroke
        >
          {item}
        </Chip>
      ))}
    </div>
  );
};

export default IsActive;
