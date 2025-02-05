import type { Meta, StoryObj } from "@storybook/react";
import { Pagination as PaginationComponent } from "@heathmont/moon-core-tw";
import { useState } from "react";

const meta: Meta<typeof PaginationComponent> = {
  title: "Moon DS/Accordion",
  tags: ["autodocs"],
  argTypes: {},
  render: () => {
    const [page, setPage] = useState<number>(0);
    const handlePageChange = (page: number) => {
      setPage(page);
    };
    return (
      <>
        <PaginationComponent
          totalPages={11}
          currentPage={page}
          setCurrentPage={handlePageChange}
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

/* export const Accordion: Story = {
  args: {
    singleOpen: false,
    className: "",
    defaultValue: "",
    value: undefined,
    onValueChange: undefined,
    itemSize: "md",
  },
}; */
