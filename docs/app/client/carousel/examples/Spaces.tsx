"use client";

import { Carousel } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";

const Spaces = () => {
  const items = Array.from({ length: 10 }, (index) => index);
  return (
    <div className="flex flex-col items-center gap-4 w-full">
    <Carousel className="w-full sm:max-w-auto">
      <Carousel.LeftArrow data-testid="scroll-left">
        <ControlsChevronLeftSmall />
      </Carousel.LeftArrow>
      <Carousel.Reel className="gap-20">
        {items.map((_, index) => (
          <Carousel.Item
            key={index}
            className="w-full max-w-80 h-48 border border-beerus"
            data-testid={`carousel-${index}`}
          >
            {index}
          </Carousel.Item>
        ))}
      </Carousel.Reel>
      <Carousel.RightArrow data-testid="scroll-right">
        <ControlsChevronRightSmall />
      </Carousel.RightArrow>
    </Carousel>
    </div>
  );
};

export default Spaces;
