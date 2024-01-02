import React from "react";
import { getExamples } from "@/utils/getExamples";

import { LoaderProps } from "./props";
import image from "./loader.webp";
import DocsPage from "@/components/DocsPage";

export default async function AuthCodePage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      loader: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();
  const ordered: (keyof typeof exampleDescriptions)[] = [
    "Default",
    "Sizes",
    "Colors",
  ];
  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);
  return (
    <DocsPage
      isMockup={isMockup}
      searchParam={searchParam}
      title="Loader"
      description={description}
      descriptions={exampleDescriptions}
      ordered={ordered}
      componentName="loader"
      image={image}
      examples={examples}
      tags={["ARIA", "RTL"]}
      propsTable={{
        Loader: LoaderProps,
      }}
    />
  );
}
