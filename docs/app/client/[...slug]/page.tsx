import React from "react";
import { getExamples } from "@/utils/getExamples";

import DocsPage from "@/components/DocsPage";
import type { GenericExampleTypePartial, TagTypes } from "@/types";
import { useGetExample } from "@/utils/useGetExample";
import { serialize } from "next-mdx-remote/serialize";
import { PropsTableJSON } from "@/types/propsTable";
import type { Examples } from "@/app/types";

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
  const componentName = params?.slug?.[0] as string;
  const searchParamRaw = params?.slug?.[1];
  const data = (await useGetExample(
    componentName as string,
  )) as GenericExampleTypePartial;
  if (!data) {
    // TODO: Redirect 404
    return <h1>Element not found</h1>;
  }
  const info = data.description
    ? (
        await serialize(data.description, {
          parseFrontmatter: true,
        })
      )?.frontmatter
    : {};
  const isMockup =
    !!searchParamRaw &&
    data?.examples &&
    Object.keys(data?.examples).includes(searchParamRaw);

  const props = data?.props
    ? JSON.parse(data.props)
        .map((item: PropsTableJSON) => {
          return item;
        })
        ?.reduce?.(
          (obj: any, item: PropsTableJSON) =>
            Object.assign(obj, { [item.name]: item.props }),
          {},
        )
    : undefined;
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
