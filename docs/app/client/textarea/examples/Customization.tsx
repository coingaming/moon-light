"use client";

import { Textarea } from "@heathmont/moon-core-tw";

const Customization = () => (
  <>
    <Textarea
      placeholder="Custom colors"
      className="outline-chichi hover:outline-piccolo focus:outline-krillin bg-roshi-10 text-krillin placeholder:text-whis"
    />
    <Textarea placeholder="Vertical and horizontal resize" className="resize" />
  </>
);

export default Customization;
