import { ExampleSection } from "@/components/exampleSection/ExampleSection";
import { PropsTable } from "@/components/propsTable";
import { QuickNav } from "@/components/QuickNav";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";

export default async function Button() {
  const { server } = await getExamples();
  const { Default, Sizes, Disabled, ...rest } = server.button.examples;
  const sortedExamples = Object.keys({ Default, Sizes, Disabled, ...rest });

  const examples = sortedExamples.map(async (exampleName) => {
    const exampleKey = exampleName as keyof typeof server.button.examples;
    const Component = (
      await import(`@/app/server/button/examples/${exampleKey}`)
    )[exampleKey];

    return (
      <ExampleSection
        key={exampleKey}
        title={exampleName}
        component={<Component />}
        description={Component.description}
        code={server.button.examples[exampleKey]}
      />
    );
  });

  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14 px-6 md:px-0">
      <h1 className="font-medium text-moon-32">Button</h1>
      <MDX markdown={server.button.description} />
      <QuickNav items={sortedExamples} />
      {examples}
      {/* <PropsTable
        title="Button props"
        data={[
          {
            name: "animation",
            type: ["'progress' | 'success' | 'error' | 'pulse' | boolean"],
            defaultState: "-",
            description: "Animation of button",
          },
          {
            name: "as",
            type: ["a | button"],
            defaultState: "button",
            description: "Rendered HTML element",
          },
          {
            name: "children",
            type: "React.ReactNode",
            defaultState: "-",
            description: "Children content",
          },
          {
            name: "className",
            type: "string",
            defaultState: "-",
            description: "Tailwind classes for customization",
          },
          {
            name: "disabled",
            type: "boolean",
            defaultState: "false",
            description: "Disabled button",
          },
          {
            name: "fullWidth",
            type: "boolean",
            defaultState: "false",
            description: "Full width button",
          },
          {
            name: "iconLeft",
            type: "JSX.Element",
            defaultState: "-",
            description: "Left icon",
          },
          {
            name: "iconRight",
            type: "JSX.Element",
            defaultState: "-",
            description: "Right icon",
          },
          {
            name: "size",
            type: "xs | sm | md | lg | xl",
            defaultState: "md",
            description: "Size of button",
          },
          {
            name: "variant",
            type: "fill | outline | ghost",
            defaultState: "fill",
            description: "Visual/Logical variant of button",
          },
        ]}
      /> */}
    </div>
  );
}
