import { Default } from "@/app/server/input/examples/Default";
import { ExampleSection } from "@/components/exampleSection/ExampleSection";
import { QuickNav } from "@/components/QuickNav";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";

export default async function Input() {
  const { server } = await getExamples();
  const examplesList = Object.keys(server.input.examples);
  return (
    <div className="w-full max-w-3xl flex flex-col gap-12 text-moon-14">
      <h1 className="font-medium text-moon-32">Input</h1>
      <MDX markdown={server.input.description} />
      <QuickNav items={examplesList} />
      <ExampleSection
        title="Default"
        component={<Default />}
        code={server.input.examples.Default}
      />
    </div>
  );
}
