import React from "react";
import ComponentDescription from "./ComponentDescription";
import { ComponentImage } from "./ComponentImage";
import Link from "next/link";

export type ReviewCardType = {
  name?: string;
  filename: string;
};

const ReviewCard = ({ name, filename }: ReviewCardType) => {
  const uri = `/client/${filename}/`;

  return (
    <Link
      href={uri}
      className="flex flex-col flex-grow gap-y-4 justify-start min-w-72 max-w-md w-full bg-goku rounded-2xl border border-beerus p-2 grayscale hover:shadow-md hover:grayscale-0"
    >
      <ComponentImage name={name} />
      <div className="flex flex-col gap-y-2 px-4 mb-4">
        <h3 className="text-moon-20 font-medium">{name}</h3>
        <p className="h-12 text-moon-14 text-ellipsis overflow-hidden">
          <ComponentDescription filename={filename} />
        </p>
      </div>
    </Link>
  );
};

export default ReviewCard;
