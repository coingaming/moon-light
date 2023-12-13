import { Tag } from "@heathmont/moon-base-tw";

type TagTypes = "ARIA" | "RTL";

export interface TitleTagsProps {
  tags: TagTypes[];
}

const colors: Record<TagTypes, string> = {
  ARIA: "bg-nappa",
  RTL: "bg-whis",
};

export function TitleTags({ tags = [] }: TitleTagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag: TagTypes) => (
        <Tag key={tag} size="xs" bgColor={colors[tag]} color="text-goten">
          {tag}
        </Tag>
      ))}
    </div>
  );
}

export default TitleTags;
