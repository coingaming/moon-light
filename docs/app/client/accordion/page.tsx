import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import props from "./props";
import itemProps from "./itemProps";
import image from "./accordion.webp";

const TITLE = "Accordion";

export default async function AccordionPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      accordion: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();
  const ordered = [
    "Default",
    "OpenByDefault",
    "SingleOpen",
    "Disabled",
    "HeaderContent",
    "Sizes",
    "Customization",
    "ControlOutside",
  ];
  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/accordion/examples/${searchParam}`),
      {
        loading: () => <Loader />,
        ssr: false,
      }
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
      componentName="accordion"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-12 text-moon-14 pb-20">
        <PageHeadComponent
          title={TITLE}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="accordion"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="Accordion props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Accordion</span> component:
            </p>
          }
          data={props}
        />
        <PropsTable
          title="Accordion.Item props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Accordion.Item</span> component:
            </p>
          }
          data={itemProps}
        />
      </div>
    </MainLayout>
  );
}
