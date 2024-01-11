import Image, { type StaticImageData } from "next/image";

import accordion from "../app/client/accordion/accordion.webp";
import alert from "../app/client/alert/alert.webp";
import authcode from "../app/client/authcode/authcode.webp";
import avatar from "../app/client/avatar/avatar.webp";
import bottomsheet from "../app/client/bottomsheet/bottomsheet.webp";
import breadcrumb from "../app/client/breadcrumb/breadcrumb.webp";
import breadcrumbs from "../app/client/breadcrumb/breadcrumb.webp";
import button from "../app/client/button/button.webp";
import checkbox from "../app/client/checkbox/checkbox.webp";
import chip from "../app/client/chip/chip.webp";
import circularProgress from "../app/client/circularProgress/circularProgress.webp";
import drawer from "../app/client/drawer/drawer.webp";
import dropdown from "../app/client/dropdown/dropdown.webp";
import group from "../app/client/group/group.webp";
import loader from "../app/client/loader/loader.webp";
import progress from "../app/client/progress/progress.webp";
import tabs from "../app/client/tabs/tabs.webp";
import tagsInput from "../app/client/tagsInput/tagsinput.webp";

const images: Record<string, StaticImageData> = {
  accordion,
  alert,
  authcode,
  avatar,
  bottomsheet,
  breadcrumb,
  breadcrumbs,
  button,
  checkbox,
  chip,
  circularProgress,
  drawer,
  dropdown,
  group,
  loader,
  progress,
  tabs,
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
