interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  type?: Exclude<React.HTMLInputTypeAttribute, "file">;
  size?: "sm" | "md" | "lg";
  error?: boolean;
  isRtl?: boolean;
  disabled?: boolean;
  id?: string;
}

export default InputProps;
