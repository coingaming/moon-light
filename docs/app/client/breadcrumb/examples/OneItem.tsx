"use client";

import { Breadcrumb } from "@heathmont/moon-core-tw";

const breadcrumbs = [<span key="current">Current page</span>];

export const OneItem = () => <Breadcrumb breadcrumbs={breadcrumbs} />;

export default OneItem;
