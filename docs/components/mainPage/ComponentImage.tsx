import React from "react";

type ComponentImageType = {
  name?: string;
};

export const ComponentImage = ({ name }: ComponentImageType) => {
  const imageStyles = {
    'backgroundImage': `url("/components/${name?.toLocaleLowerCase()}.png")`,
    'backgroundPosition': 'left top',
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
  };

  return (
    name ? <div style={imageStyles} className="w-full h-52 object-cover rounded-xl"></div> : undefined
  );
};
