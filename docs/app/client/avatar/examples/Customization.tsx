"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";

const Customization = () => (
  <>
    <Avatar className="text-negative border border-primary">
      <GenericUser className="text-heading-200" />
    </Avatar>
    <Avatar className="bg-brand text-force-light">
      <GenericUser className="text-heading-200" />
    </Avatar>
    <Avatar className="rounded-full border border-primary">
      <GenericUser className="text-heading-200" />
    </Avatar>
    <Avatar className="border border-primary">
      <GenericUser className="text-heading-200" />
      <Avatar.Status className="bg-negative" />
    </Avatar>
    <Avatar className="border border-primary">
      <GenericUser className="text-heading-200" />
      <Avatar.Status className="border-negative" />
    </Avatar>
  </>
);

export default Customization;
