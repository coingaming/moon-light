import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import { drawerProps, panelProps } from "./props";
import image from "./drawer.webp";

const ordered = ["Default", "Positions", "WithBackdrop", "WithClose"];

export default async function DrawerPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      drawer: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/drawer/examples/${searchParam}`),
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
      componentName="drawer"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-12 text-moon-14 pb-20">
        <PageHeadComponent
          title={"Drawer"}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="drawer"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="Drawer props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Drawer</span> component:
            </p>
          }
          data={drawerProps}
        />
        <PropsTable
          title="Drawer.Panel props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Drawer</span> component:
            </p>
          }
          data={panelProps}
        />
      </div>
    </MainLayout>
  );
}
