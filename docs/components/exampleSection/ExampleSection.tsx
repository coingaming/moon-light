import mergeClassnames from '@heathmont/moon-base-tw/lib/mergeClassnames/mergeClassnames';
import CodePreview from './codePreview/CodePreview';
import ComponentPreview from './ComponentPreview';
import HeaderSection from '../HeaderSection';
import { getExamples } from '@/utils/getExamples';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import { Loader } from '@heathmont/moon-base-tw';
import formatTitle from '@/utils/formatTitle';
import { MDX } from '../MDX';
import { Examples } from '@/app/types';

type Props = {
  title: string;
  description?: string | JSX.Element;
  component: JSX.Element;
  code: string;
};

export const ExampleSection = async ({
  title,
  description,
  component,
  code,
}: Props) => (
  <div className="flex flex-col gap-4 relative">
    <HeaderSection title={title} description={description} />
    <div className="bg-gohan rounded-moon-i-sm overflow-hidden mt-2">
      <ComponentPreview component={component} />
      <CodePreview code={code} />
    </div>
  </div>
);

export async function withExamples(
  WrappedComponent: React.ComponentType<Props>,
  data: string[],
  componentName: string
) {
  // TODO: Proper type?
  const { client } = await getExamples() as any;
  const {
    descriptions,
    examples
  } = client?.[componentName as keyof typeof client]

  const ReturnComponent = (props: Props) => {
    return (
      <WrappedComponent
        {...props}
      />
    )
  }

  if (!examples) return null
  return data?.map?.(async (ex: string) => {
    const exampleKey = ex as keyof typeof examples
    const exampleDescriptionKey = ex as keyof typeof descriptions
    const Component = dynamic(() => import(`@/app/client/authcode/examples/${ex}`), {
      loading: () => <Loader />,
    });
    let title
    if (descriptions?.[exampleDescriptionKey]) {
      title = (await serialize(descriptions?.[exampleDescriptionKey], { parseFrontmatter: true }))?.frontmatter?.title
    }
    return <ReturnComponent
      key={ex}
      title={title as string | undefined || formatTitle(ex)}
      component={<Component />}
      description={<MDX
        markdown={descriptions?.[exampleDescriptionKey]}
        options={{
          parseFrontmatter: true
        }} />
      }
      code={examples?.[exampleKey]}
    />
  })
}