import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import props from "./props";
import image from "./group.webp";

const ordered = ["Default", "Direction", "Size", "States", "Options"];

export default async function GroupPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      group: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/group/examples/${searchParam}`),
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
      componentName="group"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-12 text-moon-14 pb-20">
        <PageHeadComponent
          title={"Group"}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="group"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="Group props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Group</span> component:
            </p>
          }
          data={props}
        />
      </div>
    </MainLayout>
  );
}
