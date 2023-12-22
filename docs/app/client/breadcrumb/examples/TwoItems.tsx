"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";

const breadcrumbs = [
  <a href="#" key="home">
    Home
  </a>,
  <span key="current">Current page</span>,
];

export const TwoItems = () => {
  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

export default TwoItems;
