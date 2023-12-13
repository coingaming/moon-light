import { Tag } from "@heathmont/moon-base-tw";

type TagTypes = "ARIA" | "RTL";

export interface TitleTagsProps {
  tags: TagTypes[];
}

export function TitleTags({ tags = [] }: TitleTagsProps) {
  const _assignColor = (tag: TagTypes) => {
    let cls: {
      bg?: string;
      color?: string;
    } = { bg: undefined, color: undefined };
    switch (tag) {
      case "ARIA":
        cls = {
          bg: "bg-nappa",
          color: "text-goten",
        };
        break;
      case "RTL":
        cls = {
          bg: "bg-whis",
          color: "text-goten",
        };
        break;
    }
    return cls;
  };
  return (
    <div className="flex gap-2">
      {tags.map((tag: TagTypes) => {
        const cls = _assignColor(tag);
        return (
          <Tag key={tag} size="xs" bgColor={cls.bg} color={cls.color}>
            {tag}
          </Tag>
        );
      })}
    </div>
  );
}

export default TitleTags;
