import COMPONENTS from "@/components.constants.mjs";
import { serialize } from "next-mdx-remote/serialize";

export default function useComponentInfo(
  name: string,
): Record<string, unknown> | undefined {
  return COMPONENTS?.[name as keyof typeof COMPONENTS];
}
