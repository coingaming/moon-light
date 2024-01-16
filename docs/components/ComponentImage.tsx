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
import tooltip from "../app/client/tooltip/tooltip.webp";
import chip from "../app/client/chip/chip.webp";
import circularProgress from "../app/client/circularProgress/circularProgress.webp";
import drawer from "../app/client/drawer/drawer.webp";
import dropdown from "../app/client/dropdown/dropdown.webp";
import group from "../app/client/group/group.webp";
import input from "../app/client/input/input.webp";
import insetInput from "../app/client/insetInput/insetinput.webp";
import loader from "../app/client/loader/loader.webp";
import progress from "../app/client/progress/progress.webp";
import radio from "../app/client/radio/radio.webp";
import snackbar from "../app/client/snackbar/snackbar.webp";
import switchImage from "../app/client/switch/switch.webp";
import tabs from "../app/client/tabs/tabs.webp";
import tag from "../app/client/tag/tag.webp";
import tagsInput from "../app/client/tagsInput/tagsinput.webp";
import iconbutton from "../app/client/iconbutton/iconbutton.webp";
import textarea from "../app/client/textarea/textarea.webp";
import menuitem from "../app/client/menuitem/menuitem.webp";

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
  tooltip,
  chip,
  circularProgress,
  drawer,
  dropdown,
  group,
  input,
  insetInput,
  loader,
  progress,
  radio,
  snackbar,
  switch: switchImage,
  tabs,
  tag,
  tagsInput,
  iconbutton,
  textarea,
  menuitem,
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
