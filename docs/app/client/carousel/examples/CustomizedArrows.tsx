"use client";

import { Button, Carousel } from "@heathmont/moon-core-tw";

type RenderProps = {
  scrollLeftToStep?: () => void;
  scrollRightToStep?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
};

const Example = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel scrollTo={5}>
      {({
        scrollLeftToStep,
        scrollRightToStep,
        canScrollLeft,
        canScrollRight,
      }: RenderProps) => (
        <>
          <Button
            onClick={scrollLeftToStep}
            disabled={!canScrollLeft}
            className="my-4"
            data-testid="scroll-left"
          >
            Scroll to left
          </Button>
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
          <Button
            onClick={scrollRightToStep}
            disabled={!canScrollRight}
            className="my-4"
            data-testid="scroll-right"
          >
            Scroll to Right
          </Button>
        </>
      )}
    </Carousel>
  );
};

export default Example;
