import React from "react";
import Image from "next/image";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import dynamic from "next/dynamic";
import TitleTags from "@/components/TitleTags";

import image from "./bottomsheet.webp";
import { Loader } from "@heathmont/moon-base-tw";
import { PageHeadComponent } from "@/components/PageHeadComponent";

const TITLE = "BottomSheet";

export default async function BottomSheetPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      bottomsheet: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();
  const ordered = [
    "Default",
    "Sizes",
    "WithDraghandle",
    "WithTitle",
    "Customization",
    "RootPortal",
  ];
  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/bottomsheet/examples/${searchParam}`),
      {
        loading: () => <Loader />,
        ssr: false,
      },
    );
    return (
      <div className="p-4" id="playwright-test">
        <Component />
      </div>
    );
  }

  return (
    <MainLayout isMockup={isMockup}>
      <div className="flex flex-col gap-4 text-moon-14 pb-20">
        <PageHeadComponent
          title={TITLE}
          description={description}
          tags={["IN PROGRESS", "ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="bottomsheet"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        {/* TODO: Props table/s */}
      </div>
    </MainLayout>
  );
}
