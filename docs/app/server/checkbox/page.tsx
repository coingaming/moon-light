import { ExampleSection } from '@/components/exampleSection/ExampleSection';
import { QuickNav } from '@/components/QuickNav';
import { getExamples } from '@/utils/getExamples';
import { MDX } from '@/components/MDX';

export default async function Checkbox() {
  const { server } = await getExamples();
  const sortedExamples = Object.keys(server.checkbox.examples);

  const examples = sortedExamples.map(async (exampleName) => {
    const exampleKey = exampleName as keyof typeof server.checkbox.examples;
    const Component = (await import(`@/app/server/checkbox/examples/${exampleKey}`))[exampleKey];

    return (
      <ExampleSection
        key={exampleKey}
        title={exampleName}
        component={<Component />}
        description={Component.description}
        code={server.checkbox.examples[exampleKey]}
      />
    );
  });

  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14">
      <h1 className="font-medium text-moon-32">Checkbox</h1>
      <MDX markdown={server.checkbox.description} />
      <QuickNav items={sortedExamples} />
      {examples}
    </div>
  );
}
