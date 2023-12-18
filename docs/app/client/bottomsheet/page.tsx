import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import props from "./props/props";
import panelProps from "./props/panelProps";
import draghandleProps from "./props/draghandleProps";
import titleProps from "./props/titleProps";
import backdropProps from "./props/backdropProps";
import image from "./bottomsheet.webp";

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
    <MainLayout
      isMockup={isMockup}
      componentName="bottomsheet"
      contentSidebar={ordered}
    >
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
        <PropsTable
          title="BottomSheet props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">BottomSheet</span> component:
            </p>
          }
          data={props}
        />
        <PropsTable
          title="BottomSheet.Panel props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">BottomSheet.Panel</span> component:
            </p>
          }
          data={panelProps}
        />
        <PropsTable
          title="BottomSheet.Draghandle props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">BottomSheet.Draghandle</span>{" "}
              component:
            </p>
          }
          data={draghandleProps}
        />
        <PropsTable
          title="BottomSheet.Title props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">BottomSheet.Title</span> component:
            </p>
          }
          data={titleProps}
        />
        <PropsTable
          title="BottomSheet.Backdrop props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">BottomSheet.Backdrop</span>{" "}
              component:
            </p>
          }
          data={backdropProps}
        />
      </div>
    </MainLayout>
  );
}
