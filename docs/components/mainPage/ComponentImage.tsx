import Image from "next/image";
import React from "react";

type ComponentImageType = {
  title?: string;
};

export const ComponentImage = ({ title }: ComponentImageType) => {
  const url = `/components/${title?.toLocaleLowerCase()}.png`;
  const alt = `The ${title} component`;

  return (
    title 
    ? <div className={"relative w-full h-52 rounded-xl"}>
        <Image
          loading="lazy"
          src={url}
          objectFit="cover"
          objectPosition="left top"
          fill
          alt={alt}
          className="rounded-xl"
        />
      </div>
    : undefined
  );
};
