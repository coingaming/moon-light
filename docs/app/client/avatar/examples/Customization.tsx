import { Avatar } from "@heathmont/moon-core-tw";
import { GenericUser } from "@heathmont/moon-icons-tw";

const Customization = () => (
  <>
    <Avatar className="text-chichi border border-beerus">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="bg-piccolo text-goten">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="rounded-full border border-beerus">
      <GenericUser className="text-moon-24" />
    </Avatar>
    <Avatar className="border border-beerus">
      <GenericUser className="text-moon-24" />
      <Avatar.Status className="bg-chichi" />
    </Avatar>
    <Avatar className="border border-beerus">
      <GenericUser className="text-moon-24" />
      <Avatar.Status className="border-chichi" />
    </Avatar>
  </>
);

export default Customization;
