import { notFound } from "next/navigation";

import DocsPage from "@/components/DocsPage";
import { useGetExample } from "@/utils/useGetExample";
import useProps from "@/hooks/useProps";
import useComponentInfo from "@/hooks/useComponentInfo";
import sortExamples from "@/utils/sortExamples";
import COMPONENTS from "../../../components.constants.mjs";
import type { TagTypes } from "@/types";

// Generate segments for both [componentName]
export async function generateStaticParams() {
  return COMPONENTS.map((name: string) => {
    return {
      slug: [name],
    };
  });
}

export default async function Page({
  params,
  ...rest
}: {
  params: { slug: string[] };
}) {
  const componentName = params?.slug?.[0];
  const searchParamRaw = params?.slug?.[1];

  const data = await useGetExample(componentName);

  const props = useProps(data?.props);
  const info = await useComponentInfo(data?.description);

  const isMockup =
    !!searchParamRaw &&
    data?.examples &&
    Object.keys(data?.examples).includes(searchParamRaw);

  if (!data) {
    return notFound();
  }

  return (
    <DocsPage
      {...data}
      descriptions={data?.descriptions || {}}
      examples={data?.examples || {}}
      title={(info?.title as string) || (componentName as string)}
      tags={(info?.tags as TagTypes[]) || []}
      isMockup={isMockup}
      searchParam={searchParamRaw}
      ordered={
        (info?.examples as (keyof typeof data.examples)[]) ||
        sortExamples(Object.keys(data?.examples || {}))
      }
      componentName={componentName as string}
      propsTable={props}
    />
  );
}
