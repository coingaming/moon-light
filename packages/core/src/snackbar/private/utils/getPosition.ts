import type Position from "../types/Position";

const getPosition = (position?: Position): string => {
  switch (position) {
    case "top-left":
      return "top-space-16 start-space-16 ltr:radix-state-open:animate-toast-slide-in-left rtl:radix-state-open:animate-toast-slide-in-right";
    case "top-center":
      return "justify-center top-space-16 inset-x-space-16 md:m-auto radix-state-open:animate-toast-slide-in-up";
    case "top-right":
      return "justify-end top-space-16 end-space-16 ltr:radix-state-open:animate-toast-slide-in-right rtl:radix-state-open:animate-toast-slide-in-left";
    case "bottom-left":
      return "bottom-space-16 start-space-16 ltr:radix-state-open:animate-toast-slide-in-left rtl:radix-state-open:animate-toast-slide-in-right";
    case "bottom-center":
      return "justify-center bottom-space-16 inset-x-space-16 m-auto radix-state-open:animate-toast-slide-in-down";
    case "bottom-right":
      return "justify-end bottom-space-16 end-space-16 ltr:radix-state-open:animate-toast-slide-in-right rtl:radix-state-open:animate-toast-slide-in-left";
    default:
      return "";
  }
};

export default getPosition;
