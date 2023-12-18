import React from "react";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";

import dynamic from "next/dynamic";

import { Loader } from "@heathmont/moon-base-tw";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { avatarProps, avatarStatusProps } from "./props";
import image from "./avatar.webp";
import { PropsTable } from "@/components/propsTable";

const TITLE = "Avatar";
const ordered: string[] = [
  "Default",
  "Variants",
  "Sizes",
  "ActiveStatus",
  "StatusOrigin",
  "Customization",
];

export default async function AuthCodePage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      avatar: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/avatar/examples/${searchParam}`),
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
          componentName="avatar"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="Avatar props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Avatar</span> component:
            </p>
          }
          data={avatarProps}
        />
        <PropsTable
          title="Avatar.Status props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Avatar.Status</span> component:
            </p>
          }
          data={avatarStatusProps}
        />
      </div>
    </MainLayout>
  );
}
