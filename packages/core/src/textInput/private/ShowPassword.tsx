import React from "react";

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const ShowPassword = ({ children, onClick }: Props) => (
  <div
    onClick={onClick}
    role="alert"
    className="text-body-300 text-primary absolute top-2/4 -mt-space-12 z-[3] underline cursor-pointer end-space-16"
  >
    {children}
  </div>
);

export default ShowPassword;
