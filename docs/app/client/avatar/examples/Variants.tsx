"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";
import image from "../avatar_example.jpeg";

const Variants = () => (
  <>
    <Avatar className="border-beerus border">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="border-beerus border">md</Avatar>
    <Avatar imageUrl={image.src} />
  </>
);

export default Variants;
