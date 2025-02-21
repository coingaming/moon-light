import { Carousel as CarouselComponent } from "@heathmont/moon-core-tw";
import {
  ControlsChevronLeftSmall,
  ControlsChevronRightSmall,
} from "@heathmont/moon-icons-tw";
import type { Meta, StoryObj } from "@storybook/react";
import getDefaultValues from "./utils/getDefaultValues";

type CarouselRootProps = {
  scrollTo?: number;
  className?: string;
  step?: number;
  selectedIndex?: number;
  autoSlideDelay?: number;
  isSwipeDragDisabled?: boolean;
  isRtl?: boolean;
  children?:
    | React.ReactNode
    | ((data: {
        scrollLeftToStep?: () => void;
        scrollRightToStep?: () => void;
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        firstVisibleIndex?: number;
        lastVisibleIndex?: number;
      }) => React.ReactElement);
};

const defaultValues = {
  step: 5,
  className: "",
  scrollTo: undefined,
  selectedIndex: undefined,
  autoSlideDelay: undefined,
  isRtl: false,
  isSwipeDragDisabled: false,
};

const Carousel = ({ children, ...restProps }: CarouselRootProps) => {
  return <CarouselComponent {...restProps}>{children}</CarouselComponent>;
};

const meta: Meta<CarouselRootProps> = {
  component: CarouselComponent,
  title: "Content Display/Carousel",
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
      <Carousel {...rootProps}>
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
      </Carousel>
    );
  },
};

export default meta;

type Story = StoryObj<CarouselRootProps>;

export const Playground: Story = {
  args: defaultValues,
};
