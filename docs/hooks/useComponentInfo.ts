import { serialize } from "next-mdx-remote/serialize";

export default async function useComponentInfo(
  description?: string,
): Promise<Record<string, unknown>> {
  try {
    const ret = description
      ? (
          await serialize(description, {
            parseFrontmatter: true,
          })
        )?.frontmatter
      : {};
    return ret;
  } catch (err) {
    console.log(err);
    return {};
  }
}
