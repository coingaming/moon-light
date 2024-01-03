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
