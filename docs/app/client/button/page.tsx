import React, { use } from "react";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { serialize } from "next-mdx-remote/serialize";
import { ExampleSection } from "@/components/exampleSection/ExampleSection";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MainLayout } from "@/components/MainLayout";
import dynamic from "next/dynamic";

const TITLE = "Button";

export default async function ButtonPage() {
  const {
    client: {
      button: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();
  // Titles
  const titles: [keyof typeof examples, string][] = [["Default", "Default"]];

  const e = Object.keys(examples).map(async (title: string) => {
    const exampleKey = title as keyof typeof examples;
    const Component = (
      await import(`@/app/client/button/examples/${exampleKey}`)
    )[exampleKey];

    let data;
    if (exampleDescriptions?.[exampleKey]) {
      data = await serialize(exampleDescriptions?.[exampleKey], {
        parseFrontmatter: true,
      });
    }
    return (
      <ExampleSection
        key={exampleKey}
        title={(data?.frontmatter?.title as string) || exampleKey}
        description={
          <MDX
            markdown={exampleDescriptions?.[exampleKey]}
            options={{
              parseFrontmatter: true,
            }}
          />
        }
        component={<Component />}
        code={examples?.[exampleKey]}
      />
    );
  });

  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1 className="font-medium text-moon-32">{TITLE}</h1>
      <MDX markdown={description} />
      {e}
      {/* TODO: Props table/s */}
    </div>
  );
}
