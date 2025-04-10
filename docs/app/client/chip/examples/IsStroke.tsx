"use client";

import { Chip } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const StrokeOnHover = () => (
  <>
    <Chip className="border border-primary" isStroke>
      Hover me
    </Chip>
    <Chip
      iconRight={<OtherFrame className="text-heading-200" />}
      isStroke
      className="border border-primary"
    >
      Right Icon
    </Chip>
    <Chip
      className="border border-primary"
      iconLeft={<OtherFrame className="text-heading-200" />}
      isStroke
    >
      Left Icon
    </Chip>
  </>
);

export default StrokeOnHover;
