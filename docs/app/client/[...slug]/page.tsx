import React from "react";
import { getExamples } from "@/utils/getExamples";

import { LoaderProps } from "./loader/props";
import image from "./loader.webp";
import DocsPage from "@/components/DocsPage";
import { serialize } from "next-mdx-remote/serialize";
import { TagTypes } from "@/types";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next/types";

export const getStaticPaths = (async () => {
  const { client } = await getExamples();
  const paths = Object.keys(client)
    .map((c: string) => {
      const examples = client?.[c as keyof typeof client]?.examples;
      return [
        {
          params: {
            slug: [c] as string[],
          },
        },
        Object.keys(examples || {}).map((exampleName: string) => {
          return {
            params: {
              slug: [c, exampleName] as string[],
            },
          };
        }),
      ].flat();
    })
    .flat() as { params: { slug: string[] } }[];
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  return {
    paths: paths,
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export async function generateStaticParams() {
  return { test: "true" };
}

export default async function Page({ params, ...rest }: any) {
  const { client } = await getExamples();

  console.log(client?.loader?.props);
  const searchParamRaw = params?.slug?.[1];
  const componentName = "loader" || (params?.slug?.[0] as keyof typeof client);
  const data = componentName && client[componentName];
  console.log(params, rest);
  if (!Object.keys(client).includes(componentName) || !data) {
    // TODO: Redirect 404
    return <h1>Element not found</h1>;
  }
  // const info = (
  //   await serialize(data.description, {
  //     parseFrontmatter: true,
  //   })
  // )?.frontmatter;
  const info: any = {};
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
