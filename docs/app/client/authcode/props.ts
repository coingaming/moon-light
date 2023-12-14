import { PropsTableProp } from "@/types";

const Props: PropsTableProp[] = [
  {
    name: "onChange",
    type: ["(value: string) => {}"],
    description: "Callback function triggered upon a value change.",
    required: true,
  },
  {
    name: "length",
    type: ["number"],
    description: "Number of digits for entering single values.",
    defaultState: 6,
  },
  {
    name: "allowedCharacters",
    type: ["alphanumeric", "numeric", "alpha"],
    defaultState: "alphanumeric",
    description: "Specifies the type of input characters allowed.",
  },
  {
    name: "autoFocus",
    type: ["boolean"],
    defaultState: "false",
    description:
      "When set to true, inputs automatically receive the keyboard focus.",
  },
  {
    name: "isPassword",
    type: ["boolean"],
    defaultState: "false",
    description:
      "When set to true, inputs will show entered values as obfuscated symbols.",
  },
  {
    name: "disabled",
    type: ["boolean"],
    defaultState: "false",
    description: "When set to true, the AuthCode component is disabled.",
  },
  {
    name: "placeholder",
    type: ["string"],
    description: "Default placeholder for input elements.",
  },
  {
    name: "isValid",
    type: ["boolean"],
    defaultState: "true",
    description: "When set to false, the AuthCode will show a error state.",
  },
  {
    name: "className",
    type: ["string"],
    description:
      "Specifies the extra styles for the container that wraps the set of input elements.",
  },
  {
    name: "ariaLabel",
    type: ["string"],
    defaultState: '"Character `${i + 1}`"',
    description: "Specifies the common of the aria phrase for input elements.",
  },
];

export default Props;
