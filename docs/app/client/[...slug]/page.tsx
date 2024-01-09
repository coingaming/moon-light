import React from "react";
import { getExamples } from "@/utils/getExamples";
import { notFound } from "next/navigation";
import DocsPage from "@/components/DocsPage";
import type { GenericExampleTypePartial, TagTypes } from "@/types";
import { useGetExample } from "@/utils/useGetExample";
import { serialize } from "next-mdx-remote/serialize";
import { PropsTableJSON } from "@/types/propsTable";
import useProps from "@/hooks/useProps";
import useComponentInfo from "@/hooks/useComponentInfo";

export async function generateStaticParams() {
  const { client } = await getExamples();
  const components = client as Record<any, GenericExampleTypePartial>;

  return Object.keys(components).map((name: string) => {
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
      ordered={(info?.examples as (keyof typeof data.examples)[]) || []}
      componentName={componentName as string}
      propsTable={props}
    />
  );
}
