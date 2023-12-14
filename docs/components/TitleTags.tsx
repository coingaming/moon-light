import { Tag } from "@heathmont/moon-base-tw";

export type TagTypes = "ARIA" | "RTL";

export interface TitleTagsProps {
  tags: TagTypes[];
  className?: string;
}

const colors: Record<TagTypes, string> = {
  ARIA: "bg-nappa",
  RTL: "bg-whis",
};

export function TitleTags({ tags = [], className = "" }: TitleTagsProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {tags.map((tag: TagTypes) => (
        <Tag key={tag} size="xs" bgColor={colors[tag]} color="text-goten">
          {tag}
        </Tag>
      ))}
    </div>
  );
}

export default TitleTags;
