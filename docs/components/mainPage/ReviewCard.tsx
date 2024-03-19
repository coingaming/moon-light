import React from "react";
import { ComponentImage } from "./ComponentImage";
import Link from "next/link";

type ReviewCardType = {
  title: string;
  component: string;
  description: string;
};

const ReviewCard = ({ title, component, description }: ReviewCardType) => {
  const uri = `/client/${component}/`;
  return (
    <Link
      href={uri}
      className="flex flex-col flex-grow gap-y-4 justify-start min-w-72 max-w-md w-full bg-goku rounded-2xl border border-beerus p-2 grayscale hover:shadow-md hover:grayscale-0"
    >
      <ComponentImage title={title} />
      <div className="flex flex-col gap-y-2 px-4 mb-4">
        <h3 className="text-moon-20 font-medium">{title}</h3>
        <p className="h-12 text-moon-14 text-ellipsis overflow-hidden">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ReviewCard;
