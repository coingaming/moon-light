import type { PropsTableJSON, PropsTableProp } from "@/types/propsTable";

export default function useProps(
  data?: string,
): Record<string, PropsTableProp[]> | undefined {
  if (!data) return undefined;
  try {
    const propsData = JSON.parse(data);

    if (!Array.isArray(propsData)) {
      return undefined;
    }
    return propsData
      .map((item: PropsTableJSON) => {
        return item;
      })
      .reduce(
        (obj: any, item: PropsTableJSON) =>
          Object.assign(obj, { [item.name]: item.props }),
        {},
      );
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
