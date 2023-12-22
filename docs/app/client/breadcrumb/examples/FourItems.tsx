"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";

const breadcrumbs = [
  <a href="#" key="home">
    Home
  </a>,
  <a href="#" key="page 1">
    Page 1
  </a>,
  <a href="#" key="page 2">
    Page 2
  </a>,
  <span key="current">Current page</span>,
];

export const FourItems = () => {
  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

export default FourItems;
