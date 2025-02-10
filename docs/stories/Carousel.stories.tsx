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
  scrollTo: undefined,
  selectedIndex: undefined,
  autoSlideDelay: undefined,
  isRtl: false,
  isSwipeDragDisabled: false,
};

const meta: Meta<CarouselComponentProps> = {
  component: CarouselComponent,
  title: "Moon DS/Carousel",
  tags: ["autodocs"],
  argTypes: {
    scrollTo: {
      description: "Index of item to scroll to",
      control: { type: "number" },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    step: {
      description: "Step of scroll.",
      control: { type: "number" },
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
    selectedIndex: {
      description: "Index of selected item",
      control: { type: "number" },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    autoSlideDelay: {
      description:
        "Interval of auto sliding in milliseconds. No auto sliding if undefined",
      control: { type: "number" },
      table: {
        type: {
          summary: "number",
        },
      },
    },
    isRtl: {
      description: "Set right to left (rtl) view",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    isSwipeDragDisabled: {
      description:
        "Disable swipe gesture over carousel content for desktop and dragging on mobile devices.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
  },
  render: ({
    className,
    step,
    scrollTo,
    autoSlideDelay,
    selectedIndex,
    isRtl,
    isSwipeDragDisabled,
    ...args
  }) => {
    const items = Array.from({ length: 25 }, (index) => index);
    const rootProps = getDefaultValues(
      {
        step,
        className,
        scrollTo,
        selectedIndex,
        autoSlideDelay,
        isRtl,
        isSwipeDragDisabled,
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
  args: defaultValues,
};
