"use client";

import { mergeClassnames, Tag } from "@heathmont/moon-core-tw";
import type { TagTypes } from "@/types";

export interface TitleTagsProps {
  tags: TagTypes[];
  className?: string;
}

const backgroundColors: Record<TagTypes, string> = {
  ARIA: "bg-discovery",
  RTL: "bg-info",
  "IN PROGRESS": "bg-caution",
};

const textColors: Record<TagTypes, string> = {
  ARIA: "text-force-light",
  RTL: "text-force-light",
  "IN PROGRESS": "text-force-dark",
};

export function TitleTags({ tags = [], className = "" }: TitleTagsProps) {
  return (
    <div className={`flex gap-space-8 ${className}`}>
      {tags?.map?.((tag: TagTypes) => (
        <Tag
          key={tag}
          size="2xs"
          className={mergeClassnames(backgroundColors[tag], textColors[tag])}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}

export default TitleTags;
