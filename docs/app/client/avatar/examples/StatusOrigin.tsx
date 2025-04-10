"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";

const StatusOrigin = () => (
  <>
    <Avatar className="border border-primary">
      <GenericUser className="text-heading-200" />
      <Avatar.Status position={{ vertical: "top", horizontal: "right" }} />
    </Avatar>
    <Avatar className="border border-primary">
      <GenericUser className="text-heading-200" />
      <Avatar.Status position={{ vertical: "top", horizontal: "left" }} />
    </Avatar>
    <Avatar className="border border-primary">
      <GenericUser className="text-heading-200" />
      <Avatar.Status />
    </Avatar>
    <Avatar className="border border-primary">
      <GenericUser className="text-heading-200" />
      <Avatar.Status position={{ vertical: "bottom", horizontal: "left" }} />
    </Avatar>
  </>
);

export default StatusOrigin;
