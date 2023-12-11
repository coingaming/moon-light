import React from "react";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { ExampleSection } from "@/components/exampleSection/ExampleSection";


export default async function AuthCodePage() {
  const { client: { authcode: {
    description,
    examples
  } } } = await getExamples()

  // Titles
  const titles: [keyof typeof examples, string][]  = [
    ['Default', 'Default'],
    ['WithManualSubmit', 'React Hook Form integration - Manual Submit'],
    ['WithAutoSubmit', 'React Hook Form integration - Auto Submit'],
    ['AllowedCharacters', 'Allowed Characters'],
    ['CustomLength', 'Custom Length'],
    ['ErrorState', 'Error State'],
    ['HintMessage', 'Hint message'],
    ['Placeholder', 'Placeholder'],
    ['Password', 'Password'],
    ['DifferentGaps', 'Different Gaps']
  ]

  const e = titles.map(
    async (title: [keyof typeof examples, string]) => {
        const exampleKey = title[0];
        const Component = (await import(`@/app/client/authcode/examples/${exampleKey}`))[exampleKey];

        return <ExampleSection
            key={exampleKey}
            title={title[1]}
            component={<Component />}
            code={examples?.[exampleKey]}
        />
    }
  )

  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1 className="font-medium text-moon-32">AuthCode</h1>

      <MDX markdown={description} />
      {e}
      {/* Props table/s */}
    </div>
  )
}
