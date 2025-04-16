"use client";

import { Carousel, Chip } from "@heathmont/moon-core-tw";
import { useState } from "react";

const ITEMS = Array.from({ length: 5 }, (index) => index);

const SelectIndex = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col items-center gap-space-16 w-full">
      <div className="flex gap-space-4">
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
      <Carousel
        step={1}
        selectedIndex={selected}
        className="w-full max-w-80"
        data-testid="selectedIndex-carousel"
      >
        <Carousel.Reel>
          {ITEMS.map((_, index) => (
            <Carousel.Item
              key={index}
              className="w-full h-48 border border-primary"
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
