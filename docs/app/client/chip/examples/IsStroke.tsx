import { Chip } from "@heathmont/moon-core-tw";
import { OtherFrame } from "@heathmont/moon-icons-tw";

const StrokeOnHover = () => (
  <>
    <Chip className="border border-beerus" isStroke>
      Hover me
    </Chip>
    <Chip
      iconRight={<OtherFrame className="text-moon-24" />}
      isStroke
      className="border border-beerus"
    >
      Right Icon
    </Chip>
    <Chip
      className="border border-beerus"
      iconLeft={<OtherFrame className="text-moon-24" />}
      isStroke
    >
      Left Icon
    </Chip>
  </>
);

export default StrokeOnHover;
