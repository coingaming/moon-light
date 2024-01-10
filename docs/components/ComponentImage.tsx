import Image, { type StaticImageData } from "next/image";

import avatar from "../app/client/avatar/avatar.webp";
import authcode from "../app/client/authcode/authcode.webp";
import alert from "../app/client/alert/alert.webp";
import button from "../app/client/button/button.webp";
import checkbox from "../app/client/checkbox/checkbox.webp";
import chip from "../app/client/chip/chip.webp";
import drawer from "../app/client/drawer/drawer.webp";
import breadcrumb from "../app/client/breadcrumb/breadcrumb.webp";
import loader from "../app/client/loader/loader.webp";
import bottomsheet from "../app/client/bottomsheet/bottomsheet.webp";
import tagsInput from "../app/client/tagsInput/tagsinput.webp";
import accordion from "../app/client/accordion/accordion.webp";
import tag from "../app/client/tag/tag.webp";

const images: Record<string, StaticImageData> = {
  avatar,
  authcode,
  button,
  checkbox,
  chip,
  drawer,
  accordion,
  alert,
  breadcrumb,
  loader,
  bottomsheet,
  tag,
  tagsInput,
} as const;

interface Props {
  name?: string;
}

// Default image for components
export default function ComponentImage({ name }: Props) {
  if (!name) return null;
  if (images?.[name]) {
    return (
      <Image src={images?.[name]} width={500} alt={`${name} main image`} />
    );
  }
  return null;
}
