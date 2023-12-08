import { getExamples } from '@/utils/getExamples';
import { ExampleSection } from '@/components/exampleSection/ExampleSection';
import { MDX } from '@/components/MDX';

export default async function Home() {
  const { client: { accordion } } = await getExamples();

  const examples = Object.keys(accordion.examples).map(async (exampleName) => {
    const exampleKey = exampleName as keyof typeof accordion.examples;
    const Component = (await import(`@/app/client/accordion/examples/${exampleKey}`))[exampleKey];

    return (
      <ExampleSection
        key={exampleKey}
        title={exampleName}
        component={<Component />}
        code={accordion.examples[exampleKey]}
      />
    );
  });

  return <>
    <h1 className="font-medium text-moon-32">Accordion</h1>
    <MDX markdown={accordion.description} />
    {examples}
    {/* TODO props table */}
  </>
}
