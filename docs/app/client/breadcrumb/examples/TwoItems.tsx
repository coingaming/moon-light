"use client";

import React from "react";
import { Breadcrumb } from "@heathmont/moon-core-tw";
import Link from "next/link";

const breadcrumbs = [<Link href="">Home</Link>, <span>Current page</span>];

export const TwoItems = () => {
  return <Breadcrumb breadcrumbs={breadcrumbs} />;
};

export default TwoItems;
