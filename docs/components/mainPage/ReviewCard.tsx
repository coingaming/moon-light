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
      className="flex flex-col flex-grow gap-y-space-16 justify-start min-w-72 max-w-md w-full bg-primary rounded-16 border border-primary p-space-16 grayscale hover:shadow-200 hover:grayscale-0"
    >
      <ComponentImage title={title} />
      <div className="flex flex-col gap-y-space-8 px-space-16 mb-space-16">
        <h3 className="text-heading-200">{title}</h3>
        <p className="h-space-48 text-body-300 text-ellipsis overflow-hidden">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ReviewCard;
