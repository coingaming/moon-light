import type { Meta, StoryObj } from "@storybook/react";
import { Pagination as PaginationComponent } from "@heathmont/moon-core-tw";
import { useArgs } from "@storybook/preview-api";
import getDefaultValues from "./utils/getDefaultValues";

const defaultValues = {
  edgePageCount: 1,
  currentPage: 0,
  middlePagesSiblingCount: 1,
};

const meta: Meta<typeof PaginationComponent> = {
  title: "Moon DS/Pagination",
  tags: ["autodocs"],
  argTypes: {
    totalPages: {
      type: "number",
      control: "number",
      description: "Define the total amount of pages",
    },
    currentPage: {
      type: "number",
      control: "number",
      description: "Define the page index number",
      defaultValue: {
        summary: 0,
      },
    },
    setCurrentPage: {
      type: "function",
      control: "object",
      description: "Set a new page number",
    },
    edgePageCount: {
      type: "number",
      control: "number",
      description: "Defines what pages links to show at the end",
      defaultValue: {
        summary: 1,
      },
    },
    middlePagesSiblingCount: {
      type: "number",
      control: "number",
      description: "Defines what pages links to show at the beginning",
      defaultValue: {
        summary: 1,
      },
    },
  },
  render: ({
    totalPages,
    currentPage,
    edgePageCount,
    middlePagesSiblingCount,
  }) => {
    const [args, updateArgs] = useArgs();
    const handlePageChange = (page: number) => {
      updateArgs({ currentPage: page });
    };

    const rootProps = getDefaultValues(
      {
        middlePagesSiblingCount,
        edgePageCount,
        currentPage: args.currentPage,
      },
      defaultValues,
    );
    return (
      <>
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          {...rootProps}
        >
          <PaginationComponent.PrevButton>
            Previous
          </PaginationComponent.PrevButton>
          <PaginationComponent.Pages />
          <PaginationComponent.NextButton>Next</PaginationComponent.NextButton>
        </PaginationComponent>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PaginationComponent>;

export const Pagination: Story = {
  args: {
    totalPages: 11,
    edgePageCount: 1,
    currentPage: 0,
    middlePagesSiblingCount: 1,
  },
};
