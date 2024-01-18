"use client";

import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";
import image from "../avatar_example.jpeg";

const sharedProps = {
  className: "border border-beerus",
};

const Example = () => (
  <>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar {...sharedProps} size="xs">
        <GenericUser className="text-moon-16" />
      </Avatar>
      <Avatar {...sharedProps} size="sm">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar {...sharedProps}>
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar {...sharedProps} size="lg">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar {...sharedProps} size="xl">
        <GenericUser className="text-moon-24" />
      </Avatar>
      <Avatar {...sharedProps} size="2xl">
        <GenericUser className="text-moon-32" />
      </Avatar>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar {...sharedProps} size="xs">
        xs
      </Avatar>
      <Avatar {...sharedProps} size="sm">
        sm
      </Avatar>
      <Avatar {...sharedProps}>md</Avatar>
      <Avatar {...sharedProps} size="lg">
        lg
      </Avatar>
      <Avatar {...sharedProps} size="xl">
        xl
      </Avatar>
      <Avatar {...sharedProps} size="2xl">
        2xl
      </Avatar>
    </div>
    <div className="flex flex-wrap items-center justify-around gap-2 w-full">
      <Avatar imageUrl={image.src} size="xs" />
      <Avatar imageUrl={image.src} size="sm" />
      <Avatar imageUrl={image.src} />
      <Avatar imageUrl={image.src} size="lg" />
      <Avatar imageUrl={image.src} size="xl" />
      <Avatar imageUrl={image.src} size="2xl" />
    </div>
  </>
);

export default Example;
