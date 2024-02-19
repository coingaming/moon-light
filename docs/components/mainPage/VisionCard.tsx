import VisionCardBack from "./VisionCardBack";
import VisionCardFront from "./VisionCardFront";
import type CardBackProps from "./types/CardBackProps";
import type CardFrontProps from "./types/CardFrontProps";

const VisionCard = (props: CardFrontProps & CardBackProps) => (
  <div className="flex flex-col 2xl:flex-row items-center gap-8 2xl:gap-18 3xl:gap-36">
    <VisionCardFront {...props} />
    <VisionCardBack {...props} />
  </div>
);

export default VisionCard;
