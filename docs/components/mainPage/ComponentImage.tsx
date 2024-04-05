import Image from "next/image";
import React from "react";

type ComponentImageType = {
  title?: string;
};

export const ComponentImage = ({ title }: ComponentImageType) => {
  const url = `/components/${title?.toLocaleLowerCase()}.png`;
  const alt = `The ${title} component`;

  return title ? (
    <div className="relative w-full h-52">
      <Image
        loading="lazy"
        src={url}
        fill
        sizes="100% 100%"
        alt={alt}
        className="rounded-xl object-cover"
      />
    </div>
  ) : undefined;
};
