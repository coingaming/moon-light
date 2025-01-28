"use client";

import { Badge } from "@heathmont/moon-core-tw";

const BadgeAnchorElement = () => (
  <>
    <div className="relative">
      <span>Absolute position</span>
      <Badge className="absolute top-0 -right-2" />
    </div>
    <div>
      <Badge />
      <span className="ml-2">Inline position</span>
    </div>
  </>
);

export default BadgeAnchorElement;
