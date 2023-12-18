import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";
import image from "../avatar_example.jpeg";

const Variants = () => (
  <>
    <Avatar className="border-trunks border">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="border-trunks border">md</Avatar>
    <Avatar imageUrl={image.src} />
  </>
);

export default Variants;
