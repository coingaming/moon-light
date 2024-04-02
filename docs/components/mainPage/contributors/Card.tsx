import Image from "next/image";
import { Tooltip } from "@heathmont/moon-core-tw";
import { mergeClassnames } from "@heathmont/moon-base-tw";
import type CardProps from "./types/CardProps";

const Card = ({ contributor, size, className }: CardProps) => (
  <Tooltip>
    <Tooltip.Trigger>
      <a href={contributor.html_url} target="_blank" rel="noreferrer">
        <Image
          src={contributor.avatar_url}
          alt=""
          width={size}
          height={size}
          className={mergeClassnames(
            "rounded-full ring-1 ring-beerus",
            className,
          )}
        />
      </a>
    </Tooltip.Trigger>
    <Tooltip.Content>
      {contributor.login}
      <Tooltip.Arrow />
    </Tooltip.Content>
  </Tooltip>
);

export default Card;
