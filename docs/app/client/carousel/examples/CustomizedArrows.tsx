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
    <div className="flex flex-col w-full items-center">
      <Carousel scrollTo={5} className="w-full sm:max-w-auto">
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
                  className="w-full max-w-80 h-48 border border-beerus"
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
    </div>
  );
};

export default Example;
