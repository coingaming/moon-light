import { MDX } from "./MDX";
import TitleTags from "./TitleTags";
import type { TagTypes } from "@/types";
import Version from "./header/Version";

interface PageHeadComponentProps {
  title: string;
  packageName?: string;
  description?: string;
  tags?: TagTypes[];
}

export const PageHeadComponent = ({
  title,
  packageName = "",
  description,
  tags,
}: PageHeadComponentProps) => (
  <div className="flex max-w-3xl flex-col gap-4 lg:gap-6 text-moon-16">
    <div className="flex flex-col gap-2">
      <h1 className="flex items-baseline gap-3 font-medium text-moon-32 lg:text-moon-40">
        {title} <Version packageName={packageName} />
      </h1>
      {tags && <TitleTags className="mb-4" tags={tags} />}
    </div>
    {description && <MDX markdown={description} />}
  </div>
);
