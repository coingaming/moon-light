import { MDX } from "./MDX";
import TitleTags from "./TitleTags";
import type { TagTypes } from "@/types";

interface PageHeadComponentProps {
  title: string;
  description?: string;
  tags?: TagTypes[];
  name?: string;
}

export const PageHeadComponent = ({
  title,
  description,
  tags,
  name,
}: PageHeadComponentProps) => (
  <div className="flex max-w-3xl flex-col gap-4 lg:gap-6 text-moon-16">
    <div className="flex flex-col gap-2">
      <h1 className="font-medium text-moon-40">{title}</h1>
      {tags && <TitleTags className="mb-4" tags={tags} />}
    </div>
    {description && <MDX markdown={description} />}
  </div>
);
