import COMPONENTS from "@/components.constants.mjs";

export default function useComponentInfo(
  name: string,
): Record<string, unknown> | undefined {
  return COMPONENTS?.[name as keyof typeof COMPONENTS];
}
