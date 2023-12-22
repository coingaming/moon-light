"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";

const breadcrumbs = [
  <a href="#" key="Home">Home</a>,
  <a href="#" key="Page 1">Page 1</a>,
  <a href="#" key="Page 2">Page 2</a>,
  <a href="#" key="Page 3">Page 3</a>,
  <a href="#" key="Page 4">Page 4</a>,
  <span key="Current">Current page</span>,
];

export const Collapsed = () => {
  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

export default Collapsed;
