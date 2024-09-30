"use client";

import { Carousel } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";

const Example = () => {
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <div className="flex flex-col w-full items-center">

    
    <Carousel step={1} selectedIndex={1} className="w-full max-w-80">
      <Carousel.LeftArrow data-testid="scroll-left">
        <ControlsChevronLeftSmall />
      </Carousel.LeftArrow>
      <Carousel.Reel>
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
      <Carousel.Indicators />
    </Carousel>
    </div>
  );
};

export default Example;
