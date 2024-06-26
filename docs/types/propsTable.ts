import { type ReactNode } from "react";
import { type NonEmptyArray } from "./utils";

export type PropsTablePropTypes = "number" | "boolean" | "string" | string;

export interface PropsTableProp {
  /* This field is mandatory, name of the prop */
  name: string;
  /* Type field is mandatory, array contains the types of the prop, should contains at least 1 value */
  type: NonEmptyArray<PropsTablePropTypes>;
  /* Description is mandatory for every props */
  description: string;
  /* Default is not mandatory */
  defaultState?: ReactNode;
  /* The field required can be used only for required prop */
  required?: boolean;
}

export interface PropsTableJSON {
  name: string;
  props: PropsTableProp[];
}
