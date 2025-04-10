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
  <div className="flex max-w-3xl flex-col gap-space-16 lg:gap-space-24 text-body-400">
    <div className="flex flex-col gap-space-8">
      <h1 className="flex items-baseline gap-space-12 text-heading-300 lg:text-heading-400">
        {title} <Version packageName={packageName} />
      </h1>
      {tags && <TitleTags className="mb-space-16" tags={tags} />}
    </div>
    {description && <MDX markdown={description} />}
  </div>
);
