import { Tag } from "@heathmont/moon-base-tw";

export type TagTypes = "ARIA" | "RTL" | "IN PROGRESS";

export interface TitleTagsProps {
  tags: TagTypes[];
  className?: string;
}

const backgroundColors: Record<TagTypes, string> = {
  ARIA: "bg-nappa",
  RTL: "bg-whis",
  "IN PROGRESS": "bg-krillin",
};

const textColors: Record<TagTypes, string> = {
  ARIA: "text-goten",
  RTL: "text-goten",
  "IN PROGRESS": "text-popo",
};

export function TitleTags({ tags = [], className = "" }: TitleTagsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {tags.map((tag: TagTypes) => (
        <Tag
          key={tag}
          size="2xs"
          bgColor={backgroundColors[tag]}
          color={textColors[tag]}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}

export default TitleTags;
