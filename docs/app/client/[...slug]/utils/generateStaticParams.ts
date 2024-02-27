import COMPONENTS from "@/components.constants.mjs";

export async function generateStaticParams() {
  return Object.keys(COMPONENTS).map((name: string) => {
    return {
      slug: [name],
    };
  });
}
