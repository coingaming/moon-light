"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";

const breadcrumbs = [<span key="current">Current page</span>];

export const OneItem = () => {
  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

export default OneItem;
