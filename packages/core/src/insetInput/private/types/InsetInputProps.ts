type InsetInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: boolean;
  type?: Exclude<React.HTMLInputTypeAttribute, "file">;
  isRtl?: boolean; // not in use
  isLabel?: boolean; // not in use
};

export default InsetInputProps;
