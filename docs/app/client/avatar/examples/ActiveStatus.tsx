"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";
import image from "../avatar_example.jpeg";

const sharedProps = {
  className: "border-primary border",
};

const ActiveStatus = () => (
  <>
    <Avatar {...sharedProps}>
      <GenericUser className="text-heading-200" />
      <Avatar.Status />
    </Avatar>
    <Avatar {...sharedProps}>
      md
      <Avatar.Status className="bg-tertiary" />
    </Avatar>
    <Avatar imageUrl={image.src}>
      <Avatar.Status />
    </Avatar>
  </>
);

export default ActiveStatus;
