import { getExamples } from '@/utils/getExamples';
import { ExampleSection } from '@/components/exampleSection/ExampleSection';
import { Default } from './examples/Default';
import { MDX } from '@/components/MDX';

export default async function Home() {
  const { client: { accordion } } = await getExamples();

  return <>
    <h1 className="font-medium text-moon-32">Accordion</h1>
    <MDX markdown={accordion.description} />
    <ExampleSection
      title="Default"
      description="Test Default description"
      component={<Default />}
      code={accordion.examples.Default}
    />
  </>
}
