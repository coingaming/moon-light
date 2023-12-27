import React from "react";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";

import dynamic from "next/dynamic";

import { Loader } from "@heathmont/moon-base-tw";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import image from "./tabs.webp";
import { PropsTable } from "@/components/propsTable";
import TabsProps, {
  TabsListProps,
  TabsPanelProps,
  TabsPanelsProps,
  TabsPillProps,
  TabsSegmentProps,
  TabsTabProps,
} from "./props";
import { Anatomy } from "@/components/Anatomy";

const TITLE = "Tabs";
const ordered: string[] = [
  "Default",
  "Pill",
  "SelectedIndex",
  "SelectedIndexSegment",
  "SegmentControlView",
  "TabsOnlyView",
  "Sizes",
  "WithHandler",
  "WithCustomStyle",
];

export default async function TabsPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      tabs: {
        description,
        descriptions: exampleDescriptions,
        examples,
        anatomy,
      },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/tabs/examples/${searchParam}`),
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
      componentName="avatar"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-4 text-moon-14 pb-20">
        <PageHeadComponent
          title={TITLE}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="tabs"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <Anatomy anatomy={anatomy} />
        <PropsTable title="Tabs Props" data={TabsProps} />
        <PropsTable title="Tabs.List Props" data={TabsListProps} />
        <PropsTable title="Tabs.Segment Props" data={TabsSegmentProps} />
        <PropsTable title="Tabs.Tab Props" data={TabsTabProps} />
        <PropsTable title="Tabs.Pill Props" data={TabsPillProps} />
        <PropsTable title="Tabs.Panels Props" data={TabsPanelsProps} />
        <PropsTable title="Tabs.Panel Props" data={TabsPanelProps} />
      </div>
    </MainLayout>
  );
}
