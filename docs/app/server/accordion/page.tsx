import { PropsTable } from '@/components/propsTable';
import { QuickNav } from '@/components/QuickNav';
import { getExamples } from '@/utils/getExamples';
import { MDX } from '@/components/MDX';
import { ExampleSection } from '@/components/exampleSection/ExampleSection';

export default async function Accordion() {
  const { server } = await getExamples();
  const { Default, Sizes, Disabled, ...rest } = server.accordion.examples;
  const sorted = Object.keys({ Default, Sizes, Disabled, ...rest });
  const examples = sorted.map(async (exampleName) => {
    const exampleKey = exampleName as keyof typeof server.accordion.examples;
    const Component = (await import(`@/app/server/accordion/examples/${exampleKey}`))[exampleKey];

    return (
      <ExampleSection
        key={exampleKey}
        title={exampleName}
        component={<Component />}
        description={Component.description}
        code={server.accordion.examples[exampleKey]}
      />
    );
  });

  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14 px-6 md:px-0">
      <h1 className="font-medium text-moon-32">Accordion</h1>
      <MDX markdown={server.accordion.description} />
      {examples}
      <PropsTable
        title="Accordion props"
        data={[
          {
            name: 'itemSize',
            type: 'sm | md | lg | xl',
            defaultState: 'md',
            description: 'Size of accordion item',
          },
          {
            name: 'singleOpen',
            type: 'boolean',
            defaultState: 'false',
            description: 'Whether only one item can be opened at a time',
          },
          {
            name: 'defaultValue',
            type: 'string',
            defaultState: '-',
            description: 'The value of the item to expand',
          },
          {
            name: 'value',
            type: 'string[]',
            defaultState: '-',
            description: 'The accordion items value',
          },
          {
            name: 'onValueChange',
            type: '(value: string[]) => void',
            defaultState: '-',
            description:
              'Event handler called when the expanded state of an item changes and prop singleOpen in false state',
          },
        ]}
      />
      <PropsTable
        title="Accordion.Item props"
        data={[
          {
            name: 'value',
            type: 'string',
            defaultState: '-',
            description: 'The accordion item value',
          },
          {
            name: 'disabled',
            type: 'boolean',
            defaultState: 'false',
            description: 'Set disabled/non-disabled',
          },
        ]}
      />
    </div>
  );
}
