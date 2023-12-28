"use client";

import { Button } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const Icons = () => (
  <>
    <Button iconLeft={<OtherFrame />}>IconLeft</Button>
    <Button iconRight={<OtherFrame />}>IconRight</Button>
  </>
);

export default Icons;
