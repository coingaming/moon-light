const getSizeStyles = (size?: string) => {
  switch (size) {
    case "xl":
      return "h-space-56 leading-space-56 rounded-8 rtl:[&:not([disabled])]:hover:rounded-8 rtl:[&:not([disabled])]:focus:rounded-8 rtl:invalid:rounded-8 ltr:[&:not([disabled])]:hover:rounded-8 ltr:[&:not([disabled])]:focus:rounded-8 ltr:invalid:rounded-8";
    case "lg":
      return "h-space-48 leading-space-48 rounded-8 rtl:[&:not([disabled])]:hover:rounded-8 rtl:[&:not([disabled])]:focus:rounded-8 rtl:invalid:rounded-8 ltr:[&:not([disabled])]:hover:rounded-8 ltr:[&:not([disabled])]:focus:rounded-8 ltr:invalid:rounded-8";
    case "sm":
      return "h-space-32 leading-space-32 rounded-4 rtl:[&:not([disabled])]:hover:rounded-4 rtl:[&:not([disabled])]:focus:rounded-4 rtl:invalid:rounded-4 ltr:[&:not([disabled])]:hover:rounded-4 ltr:[&:not([disabled])]:focus:rounded-4 ltr:invalid:rounded-4";
    default:
      return "h-space-40 leading-space-40 rounded-8 rtl:[&:not([disabled])]:hover:rounded-8 rtl:[&:not([disabled])]:focus:rounded-8 rtl:invalid:rounded-8 ltr:[&:not([disabled])]:hover:rounded-8 ltr:[&:not([disabled])]:focus:rounded-8 ltr:invalid:rounded-8";
  }
};

export default getSizeStyles;
