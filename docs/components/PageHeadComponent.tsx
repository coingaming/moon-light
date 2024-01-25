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
  <section className="flex gap-4">
    <div className="w-full max-w-3xl">
      <h1 className="font-medium text-moon-32 pb-2">{title}</h1>
      {tags && <TitleTags className="mb-4" tags={tags} />}
      {description && <MDX markdown={description} />}
    </div>
    {image ? <Image src={image} alt={title} /> : <ComponentImage name={name} />}
  </section>
);
