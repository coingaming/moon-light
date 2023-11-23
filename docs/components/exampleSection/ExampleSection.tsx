import mergeClassnames from '@heathmont/moon-base-tw/lib/mergeClassnames/mergeClassnames';
import CodePreview from './codePreview/CodePreview';
import ComponentPreview from './ComponentPreview';
import HeaderSection from '../HeaderSection';

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