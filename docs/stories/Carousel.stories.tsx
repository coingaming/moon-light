import { Carousel as CarouselComponent } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

type CarouselComponentProps = typeof CarouselComponent;

const defaultValues = {
  step: 5,
  className: "",
  scrollTo: 0,
};

const meta: Meta<CarouselComponentProps> = {
  component: CarouselComponent,
  title: "Moon DS/Carousel",
  tags: ["autodocs"],
  argTypes: {
    scrollTo: {
      description: "Index of item to scroll to",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "0" },
      },
    },
    step: {
      description: "Step of scroll.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "5" },
      },
    },
    className: {
      description: "Additional CSS class for the Carousel.",
      type: "string",
    },
  },
  render: ({ className, step, scrollTo, ...args }) => {
    const items = Array.from({ length: 25 }, (index) => index);
    const rootProps = getDefaultValues(
      {
        className,
        step,
        scrollTo,
      },
      defaultValues,
    );

    return (
      <CarouselComponent {...rootProps}>
        <CarouselComponent.LeftArrow data-testid="left-arrow">
          <ControlsChevronLeftSmall />
        </CarouselComponent.LeftArrow>

        <CarouselComponent.Reel>
          {items.map((_, index) => (
            <CarouselComponent.Item
              key={index}
              className="w-full max-w-80 h-48 border border-beerus"
              data-testid={`carousel-${index}`}
            >
              {index}
            </CarouselComponent.Item>
          ))}
        </CarouselComponent.Reel>
        <CarouselComponent.RightArrow data-testid="right-arrow">
          <ControlsChevronRightSmall />
        </CarouselComponent.RightArrow>
      </CarouselComponent>
    );
  },
};

export default meta;

type Story = StoryObj<CarouselComponentProps>;

export const Carousel: Story = {
  args: {
    ...defaultValues,
  },
};
