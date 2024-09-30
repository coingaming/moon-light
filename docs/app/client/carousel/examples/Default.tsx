"use client";

import { Carousel } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";

const Default = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <div className="flex flex-col w-full items-center">

    
    <Carousel scrollTo={5} data-testid="carousel" className="w-full sm:max-w-auto">
      <Carousel.LeftArrow data-testid="left-arrow">
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
      <Carousel.RightArrow data-testid="right-arrow">
        <ControlsChevronRightSmall />
      </Carousel.RightArrow>
    </Carousel>
    </div>
  );
};

export default Default;
