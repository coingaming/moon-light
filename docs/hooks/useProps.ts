import type { PropsTableJSON, PropsTableProp } from "@/types/propsTable";

export default function useProps(
  data?: string,
): Record<string, PropsTableProp[]> | undefined {
  if (!data) return undefined;
  try {
    return JSON.parse(data)
      .map((item: PropsTableJSON) => {
        return item;
      })
      ?.reduce?.(
        (obj: any, item: PropsTableJSON) =>
          Object.assign(obj, { [item.name]: item.props }),
        {},
      );
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
