"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";
import { GenericHome, ControlsChevronRight } from "@heathmont/moon-icons-tw";

const breadcrumbs = [
  <a href="#" aria-label="Home">
    <GenericHome className="text-moon-24" />
  </a>,
  <a href="#">Page 1</a>,
  <a href="#">Page 2</a>,
  <a href="#">Page 3</a>,
  <a href="#">Page 4</a>,
  <span>Current page</span>,
];

export const CustomDivider = () => {
  return (
    <Breadcrumb
      breadcrumbs={breadcrumbs}
      divider={<ControlsChevronRight className="text-moon-16 rtl:rotate-180" />}
    />
  );
};

export default CustomDivider;
