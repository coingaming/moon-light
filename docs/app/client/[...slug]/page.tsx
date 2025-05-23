/* eslint-disable react-hooks/rules-of-hooks */

import { notFound } from "next/navigation";
import DocsPage from "@/components/docsPage/DocsPage";
import { useGetExample } from "@/utils/useGetExample";
import useProps from "@/hooks/useProps";
import useComponentInfo from "@/hooks/useComponentInfo";
import sortExamples from "@/utils/sortExamples";
import type { TagTypes } from "@/types";
import COMPONENTS from "@/components.constants.mjs";

export async function generateStaticParams() {
  return Object.keys(COMPONENTS).map((name: string) => {
    return {
      slug: [name],
    };
  });
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const componentName = params?.slug?.[0];
  const searchParamRaw = params?.slug?.[1];

  const data = await useGetExample(componentName);
  const info = await useComponentInfo(componentName);

  const props = useProps(data?.props);

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
      packageName={(info?.packageName as string) || ""}
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
