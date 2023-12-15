import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import props from "./props";
import image from "./authcode.webp";

const ordered = [
  "Default",
  "WithManualSubmit",
  "WithAutoSubmit",
  "AllowedCharacters",
  "CustomLength",
  "ErrorState",
  "HintMessage",
  "Placeholder",
  "Password",
  "DifferentGaps",
];

export default async function AuthCodePage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      authcode: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/authcode/examples/${searchParam}`),
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
    <MainLayout isMockup={isMockup} componentName="authcode">
      <div className="flex flex-col gap-4 text-moon-14 pb-20">
        <PageHeadComponent
          title={"AuthCode"}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="authcode"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="AuthCode props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">AuthCode</span> component:
            </p>
          }
          data={props}
        />
      </div>
    </MainLayout>
  );
}
