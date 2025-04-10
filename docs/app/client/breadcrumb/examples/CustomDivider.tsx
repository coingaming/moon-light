"use client";

import { Breadcrumb } from "@heathmont/moon-core-tw";
import { GenericHome, ControlsChevronRight } from "@heathmont/moon-icons-tw";

const breadcrumbs = [
  <a href="#" aria-label="Home" key="Home">
    <GenericHome className="text-heading-200" />
  </a>,
  <a href="#" key="Page 1">
    Page 1
  </a>,
  <a href="#" key="Page 2">
    Page 2
  </a>,
  <a href="#" key="Page 3">
    Page 3
  </a>,
  <a href="#" key="Page 5">
    Page 4
  </a>,
  <span key="Current">Current page</span>,
];

export const CustomDivider = () => (
  <Breadcrumb
    breadcrumbs={breadcrumbs}
    divider={<ControlsChevronRight className="text-body-400 rtl:rotate-180" />}
  />
);

export default CustomDivider;
