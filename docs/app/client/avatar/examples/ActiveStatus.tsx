import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";

import image from "../avatar_example.jpeg";

const sharedProps = {
  className: "border-trunks border",
};

const ActiveStatus = () => (
  <>
    <Avatar {...sharedProps}>
      <GenericUser className="text-moon-24" />
      <Avatar.Status />
    </Avatar>
    <Avatar {...sharedProps}>
      md
      <Avatar.Status />
    </Avatar>
    <Avatar imageUrl={image.src}>
      <Avatar.Status />
    </Avatar>
  </>
);

export default ActiveStatus;
