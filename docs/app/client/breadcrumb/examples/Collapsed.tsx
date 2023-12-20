"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";

const breadcrumbs = [
  <a href="#">Home</a>,
  <a href="#">Page 1</a>,
  <a href="#">Page 2</a>,
  <a href="#">Page 3</a>,
  <a href="#">Page 4</a>,
  <span>Current page</span>,
];

export const Collapsed = () => {
  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

export default Collapsed;
