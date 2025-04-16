"use client";

import React from "react";
import { OtherFrame } from "@heathmont/moon-icons-tw";

export const Customization = () => {
  return (
    <>
      <OtherFrame className="text-heading-200 icon-negative" />
      <OtherFrame className="text-heading-200 icon-secondary" />
      <OtherFrame className="text-heading-300 icon-positive" />
      <OtherFrame className="text-heading-300 icon-brand" />
      <OtherFrame className="text-heading-400 icon-caution" />
      <OtherFrame className="text-heading-400 icon-info" />
    </>
  );
};

export default Customization;
