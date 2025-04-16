"use client";

import { Button, Textarea } from "@heathmont/moon-core-tw";

const WithButton = () => (
  <div className="w-full relative">
    <Textarea
      placeholder="Text area with button"
      className="pb-0 border-b-[4.5rem] border-b-transparent border-solid"
      rows={3}
    />
    <Button className="absolute start-space-16 bottom-space-16">Default</Button>
  </div>
);

export default WithButton;
