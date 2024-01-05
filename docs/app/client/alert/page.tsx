import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";
import { getExamples } from "@/utils/getExamples";
import { ExampleSectionData } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";
import { PageHeadComponent } from "@/components/PageHeadComponent";
import { PropsTable } from "@/components/propsTable";

import { props, titleProps, messageProps } from "./props";
import image from "./alert.webp";

const ordered = [
  "Default",
  "WithTitle",
  "WithIcon",
  "WithClose",
  "Customization",
];

export default async function AlertPage(request: {
  searchParams: { raw: string };
}) {
  const {
    client: {
      alert: { description, descriptions: exampleDescriptions, examples },
    },
  } = await getExamples();

  const searchParam = request?.searchParams?.raw;
  const isMockup = !!searchParam && Object.keys(examples).includes(searchParam);

  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/alert/examples/${searchParam}`),
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
      componentName="alert"
      contentSidebar={ordered}
    >
      <div className="flex flex-col gap-12 text-moon-14 pb-20">
        <PageHeadComponent
          title={"Alert"}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName="alert"
          client={{
            description,
            descriptions: exampleDescriptions,
            examples,
          }}
          data={ordered}
        />
        <PropsTable
          title="Alert props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Alert</span> component:
            </p>
          }
          data={props}
        />
        <PropsTable
          title="Alert.Title props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Alert.Title</span> component:
            </p>
          }
          data={titleProps}
        />
        <PropsTable
          title="Alert.Message props"
          description={
            <p>
              These are props specific to the{" "}
              <span className="text-frieza">Alert.Message</span> component:
            </p>
          }
          data={messageProps}
        />
      </div>
    </MainLayout>
  );
}
