"use client";

import { Chip } from "@heathmont/moon-core-tw";

const Disabled = () => (
  <>
    <Chip variant="ghost" disabled>
      Ghost variant
    </Chip>
    <Chip className="border border-beerus" disabled>
      Default variant
    </Chip>
  </>
);

export default Disabled;
