import React from "react";
import { getExamples } from "@/utils/getExamples";

import { LoaderProps } from "./loader/props";
import image from "./loader.webp";
import DocsPage from "@/components/DocsPage";
import { serialize } from "next-mdx-remote/serialize";
import { TagTypes } from "@/types";

export default async function AuthCodePage(request: {
  searchParams: { raw: string; component: string };
}) {
  const { client } = await getExamples();
  const searchParamRaw = request?.searchParams?.raw;
  const componentName = request?.searchParams?.component as keyof typeof client;
  const data = client?.[componentName];

  if (!Object.keys(client).includes(componentName) || !data) {
    // TODO: Redirect 404
    return <h1>Element not found</h1>;
  }
  const info = (
    await serialize(data.description, {
      parseFrontmatter: true,
    })
  )?.frontmatter;
  console.log(info);
  const isMockup =
    !!searchParamRaw &&
    Object.keys(client?.[componentName]?.examples).includes(searchParamRaw);

  return (
    <DocsPage
      {...data}
      title={(info?.title as string) || componentName}
      description={data?.description}
      tags={(info?.tags as TagTypes[]) || []}
      isMockup={isMockup}
      searchParam={searchParamRaw}
      ordered={(info?.examples as (keyof typeof data.examples)[]) || []}
      componentName={componentName}
    />
  );
}
