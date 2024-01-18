"use client";

import { Carousel } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";

const Default = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel scrollTo={5}>
      <Carousel.LeftArrow data-testid="left-arrow">
        <ControlsChevronLeftSmall />
      </Carousel.LeftArrow>
      <Carousel.Reel>
        {items.map((_, index) => (
          <Carousel.Item
            key={index}
            className="w-80 h-48 border border-beerus"
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
  );
};

export default Default;
