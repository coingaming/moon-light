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
          prev.filter((sport: string) => sport !== item),
        );
      } else {
        setIsActive([...isActive, item]);
      }
    },
    [setIsActive, isActive],
  );

  return (
    <div className="flex items-center gap-space-8 mt-space-8">
      <p className="text-body-400">Hobbies (Poker is mandatory):</p>
      <Chip className="border border-primary" isActive>
        Poker
      </Chip>
      {sports.map((item: string) => (
        <Chip
          className="border border-primary"
          onClick={() => onClick(item)}
          isActive={isActive.includes(item)}
          isStroke
          key={item}
        >
          {item}
        </Chip>
      ))}
    </div>
  );
};

export default IsActive;
