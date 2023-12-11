import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { ExampleSection } from "@/components/exampleSection/ExampleSection";

export default async function AuthCodePage(request: Request) {
  const { client: { authcode } } = await getExamples()
  const examples = () => Object.keys(authcode.examples).map(
    async (exampleName) => {
        const exampleKey = exampleName as keyof typeof authcode.examples;
        const Component = (await import(`@/app/client/authcode/examples/${exampleKey}`))[exampleKey];

        return <ExampleSection
            key={exampleKey}
            title={exampleName}
            component={<Component />}
            code={authcode.examples?.[exampleKey]}
        />
    }
  );

  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1 className="font-medium text-moon-32">AuthCode</h1>

      <MDX markdown={authcode.description} />
      {examples()}
      {/* Props table/s */}
    </div>
  )
}
