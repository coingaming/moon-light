import { Loader } from "@heathmont/moon-core-tw";
import dynamic from "next/dynamic";
import type { StaticImageData } from "next/image";
import { MainLayout } from "./MainLayout";
import { PageHeadComponent } from "./PageHeadComponent";
import { ExampleSectionData } from "./exampleSection/ExampleSection";
import { PropsTable } from "./propsTable";
import type { PropsTableProp, TagTypes } from "@/types";

interface DocsPageProps {
  componentName: string;
  isMockup?: boolean;
  searchParam?: string;
  image?: StaticImageData;
  description: string;
  title: string;
  ordered: string[];
  tags: TagTypes[];
  examples: Record<string, string>;
  descriptions: Record<string, string>;
  propsTable?: Record<string, PropsTableProp[]>;
}

const DocsPage = (props: DocsPageProps) => {
  const {
    title,
    description,
    descriptions,
    ordered,
    searchParam,
    componentName,
    isMockup,
    image,
    examples,
    propsTable,
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
        className="p-4"
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
      <div className="flex flex-col gap-12 text-moon-14 pb-20">
        <PageHeadComponent
          title={title}
          description={description}
          tags={["ARIA", "RTL"]}
          image={image}
        />

        <ExampleSectionData
          componentName={componentName}
          client={{
            description,
            descriptions,
            examples,
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
                  <span className="text-frieza">{name}</span> component:
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
