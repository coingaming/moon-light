import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { Loader } from "@heathmont/moon-base-tw";

import formatTitle from "@/utils/formatTitle";
import CodePreview from "./codePreview/CodePreview";
import ComponentPreview from "./ComponentPreview";
import HeaderSection from "../HeaderSection";
import { MDX } from "../MDX";
import { Anatomy } from "../Anatomy";

type Props = {
  title: string;
  description?: JSX.Element;
  component: JSX.Element;
  code: string;
  href?: string;
};

export const ExampleSection = async ({
  title,
  description,
  component,
  code,
  href,
}: Props) => (
  <div className="flex flex-col gap-4 relative">
    <HeaderSection title={title} description={description} href={href} />
    <div className="bg-gohan rounded-lg mt-2">
      <ComponentPreview component={component} />
      <CodePreview code={code} />
    </div>
  </div>
);

export async function withExamples(
  WrappedComponent: React.ComponentType<Props>,
  client: {
    description?: string;
    descriptions: Record<string, string>;
    examples: Record<string, string>;
    examplesAnatomy?: Record<string, string>;
  },
  data: string[],
  componentName: string,
) {
  const { descriptions, examples } = client;

  if (!examples) return <div />;
  return data?.map?.(async (ex: string) => {
    const exampleKey = ex as keyof typeof examples;
    const exampleDescriptionKey = ex as keyof typeof descriptions;
    const Component = dynamic(
      () => import(`@/app/client/${componentName}/examples/${ex}`),
      {
        loading: () => <Loader />,
      },
    );
    let title;
    if (descriptions?.[exampleDescriptionKey]) {
      title = (
        await serialize(descriptions?.[exampleDescriptionKey], {
          parseFrontmatter: true,
        })
      )?.frontmatter?.title;
    }
    return (
      <WrappedComponent
        key={ex}
        href={ex}
        title={(title as string | undefined) || formatTitle(ex)}
        component={<Component />}
        description={
          <>
            <MDX
              markdown={descriptions?.[exampleDescriptionKey]}
              options={{
                parseFrontmatter: true,
              }}
            />
            {client?.examplesAnatomy?.[exampleKey] && (
              <Anatomy
                className="pt-4"
                anatomy={client?.examplesAnatomy?.[exampleDescriptionKey]}
              />
            )}
          </>
        }
        code={examples?.[exampleKey]}
      />
    );
  });
}

interface ExampleSectionDataProps {
  client: {
    description?: string;
    descriptions: Record<string, string>;
    examples: Record<string, string>;
    examplesAnatomy?: Record<string, string>;
  };
  data: string[];
  componentName: string;
}
export const ExampleSectionData = ({
  client,
  data,
  componentName,
}: ExampleSectionDataProps) =>
  withExamples(ExampleSection, client, data, componentName);
