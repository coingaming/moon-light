"use client";

import { Textarea } from "@heathmont/moon-core-tw";

const Customization = () => (
  <>
    <Textarea
      placeholder="Custom colors"
      className="outline-positive hover:outline-brand focus:outline-caution bg-positive-subtle text-caution placeholder:text-info"
    />
    <Textarea placeholder="Vertical and horizontal resize" className="resize" />
  </>
);

export default Customization;
