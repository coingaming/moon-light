import Image, { type StaticImageData } from "next/image";

import tagsInput from "../app/client/tagsInput/tagsinput.webp";
import loader from "../app/client/loader/loader.webp";
import chip from "../app/client/chip/chip.webp";
import breadcrumbs from "../app/client/breadcrumb/breadcrumb.webp";
import bottomsheet from "../app/client/bottomsheet/bottomsheet.webp";
import avatar from "../app/client/avatar/avatar.webp";
import authcode from "../app/client/authcode/authcode.webp";
import accordion from "../app/client/accordion/accordion.webp";
import alert from "../app/client/alert/alert.webp";
import drawer from "../app/client/drawer/drawer.webp";
import checkbox from "../app/client/checkbox/checkbox.webp";

const images: Record<string, StaticImageData> = {
  tagsInput,
  loader,
  chip,
  breadcrumbs,
  bottomsheet,
  avatar,
  authcode,
  accordion,
  alert,
  drawer,
  checkbox,
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
