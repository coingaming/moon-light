"use client";

import { Carousel } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";

type RenderProps = {
  firstVisibleIndex?: number;
  lastVisibleIndex?: number;
};

const VisibleIndices = () => {
  const items = Array.from({ length: 25 }, (index) => index);
  return (
    <Carousel>
      {({ firstVisibleIndex, lastVisibleIndex }: RenderProps) => (
        <>
          <Carousel.LeftArrow data-testid="scroll-left">
            <ControlsChevronLeftSmall />
          </Carousel.LeftArrow>
          <Carousel.Reel>
            {items.map((_, index) => (
              <Carousel.Item
                key={index}
                className="w-80 h-48 border border-beerus flex-col" /* flex-col added, Carousel.Item have as base flex */
                data-testid={`carousel-${index}`}
              >
                <p>Current index: {index}</p>
                <p data-testid={`visible-indices-${index}`}>
                  Visible indices:
                  {`${firstVisibleIndex}-${lastVisibleIndex}`}
                </p>
              </Carousel.Item>
            ))}
          </Carousel.Reel>
          <Carousel.RightArrow data-testid="scroll-right">
            <ControlsChevronRightSmall />
          </Carousel.RightArrow>
        </>
      )}
    </Carousel>
  );
};

export default VisibleIndices;
