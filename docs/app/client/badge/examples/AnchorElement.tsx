"use client";

import { Badge } from "@heathmont/moon-core-tw";

const BadgeAnchorElement = () => (
  <>
    <div className="relative">
      <span>Absolute position</span>
      <Badge className="absolute top-0 -right-space-8" />
    </div>
    <div>
      <Badge />
      <span className="ml-space-8">Inline position</span>
    </div>
  </>
);

export default BadgeAnchorElement;
