"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";

const AvatarDefault = () => (
  <Avatar className="border border-primary">
    <GenericUser className="text-heading-200" />
  </Avatar>
);

export default AvatarDefault;
