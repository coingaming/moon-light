"use client";

import React from "react";
import { Checkbox } from "@heathmont/moon-core-tw";

export const Customization = () => {
  return (
    <>
      <Checkbox bgColor="bg-krillin" />
      <Checkbox className="rounded-none" />
      <Checkbox className="shadow-krillin" />
      <Checkbox className="text-krillin-60" />
    </>
  );
};

export default Customization;
