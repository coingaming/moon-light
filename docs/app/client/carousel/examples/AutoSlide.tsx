"use client";

import { Carousel } from "@heathmont/moon-core-tw";

const AutoSlide = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <div className="flex flex-col w-full items-center">
      <Carousel
        autoSlideDelay={3000}
        step={1}
        data-testid="autoSlide-carousel"
        className="w-full sm:max-w-auto"
      >
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
      </Carousel>
    </div>
  );
};

export default AutoSlide;
