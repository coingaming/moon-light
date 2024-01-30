import ComponentImage from "./ComponentImage";
import { MDX } from "./MDX";
import TitleTags from "./TitleTags";
import type { TagTypes } from "@/types";
import Image, { type StaticImageData } from "next/image";

interface PageHeadComponentProps {
  title: string;
  description?: string;
  tags?: TagTypes[];
  name?: string;
  image?: StaticImageData;
}

export const PageHeadComponent = ({
  title,
  description,
  tags,
  name,
  image,
}: PageHeadComponentProps) => (
  <div className="flex flex-col gap-4 lg:gap-6">
    <div className="flex flex-col gap-2">
      <h1 className="font-medium text-moon-32">{title}</h1>
      {tags && <TitleTags className="mb-4" tags={tags} />}
    </div>
    {description && <MDX markdown={description} />}
  </div>
);
