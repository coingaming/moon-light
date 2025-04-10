import Loader from "@heathmont/moon-core-tw/lib/loader/Loader";
import dynamic from "next/dynamic";
import MainLayout from "../mainLayout/MainLayout";
import { PageHeadComponent } from "../PageHeadComponent";
import { ExampleSectionData } from "../exampleSection/ExampleSection";
import { PropsTable } from "../propsTable";
import { Anatomy } from "../Anatomy";
import type DocsPageProps from "./types/DocsPageProps";

const DocsPage = (props: DocsPageProps) => {
  const {
    title,
    packageName,
    description,
    descriptions,
    ordered,
    searchParam,
    componentName,
    isMockup,
    examples,
    propsTable,
    anatomy,
    tags,
    examplesAnatomy,
  } = props;
  if (isMockup) {
    const Component = dynamic(
      () => import(`@/app/client/${componentName}/examples/${searchParam}`),
      {
        loading: () => <Loader />,
        ssr: false,
      },
    );
    return (
      <div
        className="p-4 text-bulma"
        id="playwright-test"
        data-testid={`playwright-test-${componentName}`}
      >
        <Component />
      </div>
    );
  }
  return (
    <MainLayout
      isMockup={isMockup}
      componentName={componentName}
      contentSidebar={ordered}
    >
      <div className="flex w-full max-w-7xl mx-auto flex-col gap-space-48 text-body-300 pb-space-40">
        <PageHeadComponent
          title={title}
          packageName={packageName}
          description={description}
          tags={tags}
        />
        {anatomy && <Anatomy anatomy={anatomy} />}
        <ExampleSectionData
          componentName={componentName}
          client={{
            description,
            descriptions,
            examples,
            examplesAnatomy,
          }}
          data={ordered}
        />
        {Object.keys(propsTable || {}).map((name: string) => {
          if (!propsTable?.[name]) return null;
          return (
            <PropsTable
              key={name}
              title={name}
              description={
                <p>
                  These are props specific to the{" "}
                  <span className="text-info">{name}</span> component:
                </p>
              }
              data={propsTable[name]}
            />
          );
        })}
      </div>
    </MainLayout>
  );
};

export default DocsPage;
