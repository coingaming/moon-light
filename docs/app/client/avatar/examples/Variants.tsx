"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";
import image from "../avatar_example.jpeg";

const Variants = () => (
  <>
    <Avatar className="border-primary border">
      <GenericUser className="text-heading-200" />
    </Avatar>
    <Avatar className="border-primary border">md</Avatar>
    <Avatar imageUrl={image.src} />
  </>
);

export default Variants;
