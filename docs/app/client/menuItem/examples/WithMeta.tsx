"use client";

import { MenuItem } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const WithMeta = () => (
  <>
    <MenuItem className="w-56">
      <MenuItem.Title>Your value</MenuItem.Title>
      <span className="text-body-200 text-secondary">Meta</span>
    </MenuItem>
    <MenuItem className="w-56">
      <OtherFrame className="text-moon-24" />
      <MenuItem.Title>Your value</MenuItem.Title>
      <span className="text-body-200 text-secondary">Meta</span>
    </MenuItem>
  </>
);

export default WithMeta;
