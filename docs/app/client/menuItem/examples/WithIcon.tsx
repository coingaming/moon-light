"use client";

import { MenuItem } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const WithIcon = () => (
  <>
    <MenuItem className="w-56">
      <OtherFrame className="text-heading-200" />
      <MenuItem.Title>Your value</MenuItem.Title>
    </MenuItem>
    <MenuItem className="w-56">
      <MenuItem.Title>Your value</MenuItem.Title>
      <OtherFrame className="text-heading-200" />
    </MenuItem>
  </>
);

export default WithIcon;
