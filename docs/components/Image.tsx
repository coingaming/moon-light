import Image, { type StaticImageData } from "next/image";

import tagsInput from "../app/client/tagsInput/tagsinput.webp";
import loader from "../app/client/loader/loader.webp";
import chip from "../app/client/chip/chip.webp";
import breadcrumbs from "../app/client/breadcrumb/breadcrumb.webp";
import bottomsheet from "../app/client/bottomsheet/bottomsheet.webp";
import avatar from "../app/client/avatar/avatar.webp";
import authcode from "../app/client/authcode/authcode.webp";
import accordion from "../app/client/accordion/accordion.webp";
import circularprogress from "../app/client/circularprogress/circularprogress.webp";
import combobox from "../app/client/combobox/combobox.webp";
import carousel from "../app/client/carousel/carousel.webp";
import form from "../app/client/form/form.webp";
import dropdown from "../app/client/dropdown/dropdown.webp";
import insetnativeselect from "../app/client/insetnativeselect/insetnativeselect.webp";
import iconbutton from "../app/client/iconbutton/iconbutton.webp";
import input from "../app/client/input/input.webp";
import icons from "../app/client/icons/icons.webp";
import menuitem from "../app/client/menuitem/menuitem.webp";
import snackbar from "../app/client/snackbar/snackbar.webp";
import nativeselect from "../app/client/nativeselect/nativeselect.webp";
import switchImage from "../app/client/switch/switch.webp";
import pagination from "../app/client/pagination/pagination.webp";
import radio from "../app/client/radio/radio.webp";
import progress from "../app/client/progress/progress.webp";
import search from "../app/client/search/search.webp";
import popover from "../app/client/popover/popover.webp";
import table from "../app/client/table/table.webp";

const images: Record<string, StaticImageData> = {
  tagsInput,
  loader,
  chip,
  breadcrumbs,
  bottomsheet,
  avatar,
  authcode,
  accordion,
  circularprogress,
  combobox,
  carousel,
  form,
  dropdown,
  insetnativeselect,
  iconbutton,
  input,
  icons,
  menuitem,
  snackbar,
  nativeselect,
  switch: switchImage,
  pagination,
  radio,
  progress,
  search,
  popover,
  table,
};

// Default image for components
export default function ComponentImage({ name }: { name: string }) {
  if (images?.[name]) {
    return (
      <Image src={images?.[name]} width={500} alt={`${name} main image`} />
    );
  }
  return null;
}
