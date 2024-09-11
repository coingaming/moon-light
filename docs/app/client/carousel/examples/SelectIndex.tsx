"use client";

import { Carousel, Chip } from "@heathmont/moon-core-tw";
import { useState } from "react";

const ITEMS = Array.from({ length: 5 }, (index) => index);

const SelectIndex = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-1">
        {ITEMS.map((_, index) => (
          <Chip
            key={index}
            isActive={selected === index}
            onClick={() => setSelected(index)}
            className="px-4"
            data-testid={`carousel-button-${index}`}
          >
            {index}
          </Chip>
        ))}
      </div>
      <Carousel step={1} selectedIndex={selected} className="w-[320px]">
        <Carousel.Reel>
          {ITEMS.map((_, index) => (
            <Carousel.Item
              key={index}
              className="w-80 h-48 border border-beerus"
              data-testid={`carousel-${index}`}
            >
              {index}
            </Carousel.Item>
          ))}
        </Carousel.Reel>
      </Carousel>
    </div>
  );
};

export default SelectIndex;
