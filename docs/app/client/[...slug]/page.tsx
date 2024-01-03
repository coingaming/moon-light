import React from "react";
import { getExamples } from "@/utils/getExamples";

import DocsPage from "@/components/DocsPage";
import type { TagTypes } from "@/types";
import { useGetExample } from "@/utils/useGetExample";
import { serialize } from "next-mdx-remote/serialize";
import { PropsTableJSON } from "@/types/propsTable";

export async function generateStaticParams() {
  const { client: components } = await getExamples();

  return Object.keys(components).map((name: string) => ({
    slug: [name],
  }));
}

export default async function Page({
  params,
  ...rest
}: {
  params: { slug: string[] };
}) {
  const componentName = params?.slug?.[0] as string;
  const searchParamRaw = params?.slug?.[1];
  const data = (await useGetExample(componentName as string)) as any;
  if (!data) {
    // TODO: Redirect 404
    return <h1>Element not found</h1>;
  }
  const info = (
    await serialize(data.description, {
      parseFrontmatter: true,
    })
  )?.frontmatter;

  const isMockup =
    !!searchParamRaw && Object.keys(data?.examples).includes(searchParamRaw);
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
  console.log("data", props);
  return (
    <DocsPage
      {...data}
      title={(info?.title as string) || (componentName as string)}
      description={data?.description}
      tags={(info?.tags as TagTypes[]) || []}
      isMockup={isMockup}
      searchParam={searchParamRaw}
      ordered={(info?.examples as (keyof typeof data.examples)[]) || []}
      componentName={componentName as string}
      propsTable={props}
    />
  );
}
