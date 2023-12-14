import React from "react";
import Image from "next/image";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";

import dynamic from "next/dynamic";
import TitleTags from "@/components/TitleTags";

import image from "./authcode.webp";
import { Loader } from "@heathmont/moon-base-tw";

const TITLE = "AuthCode";

export default async function AuthCodePage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      authcode: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();
  const ordered = ["Default", "WithManualSubmit", "WithAutoSubmit"];
  const isMockup =
    !!request?.searchParams?.raw &&
    Object.keys(examples).includes(request?.searchParams?.raw);

  if (isMockup) {
    const Component = dynamic(
      () =>
        import(`@/app/client/authcode/examples/${request?.searchParams?.raw}`),
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="font-medium text-moon-32">{TITLE}</h1>
            <div className="mt-2" />
            <TitleTags tags={["ARIA", "RTL"]} />
            <div className="mt-4" />
            <MDX markdown={description} />
          </div>
          <Image src={image} width={500} alt="AuthCode Image" />
        </div>
        <ExampleSectionData
          componentName="authcode"
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
