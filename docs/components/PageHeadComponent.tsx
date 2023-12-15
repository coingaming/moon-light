import Image, { type StaticImageData } from "next/image";
import { MDX } from "./MDX";
import TitleTags, { type TagTypes } from "./TitleTags";

interface PageHeadComponentProps {
  title: string;
  description?: string;
  tags?: TagTypes[];
  image?: StaticImageData;
}
export const PageHeadComponent = ({
  title,
  description,
  tags,
  image,
}: PageHeadComponentProps) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <h1 className="font-medium text-moon-32 pb-2">{title}</h1>
      {tags && <TitleTags className="mb-4" tags={tags} />}
      {description && <MDX markdown={description} />}
    </div>

    {image && <Image src={image} width={500} alt={`${title} image`} />}
  </div>
);
