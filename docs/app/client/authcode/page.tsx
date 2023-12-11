import React, { use } from "react";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { ExampleSection } from "@/components/exampleSection/ExampleSection";
import { MainLayout } from "@/components/MainLayout";

import dynamic from "next/dynamic";

const TITLE = 'AuthCode'

export default async function AuthCodePage(request: any) {
  const { client: { authcode: {
    description,
    examples
  } } } = await getExamples()
  // Titles
  const titles: [keyof typeof examples, string][] = [
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
  const isMockup = request?.searchParams?.raw && titles?.map((i) => i[0])?.includes(request?.searchParams?.raw);

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

  if (isMockup) {
    const Component = dynamic(() => import(`@/app/client/authcode/examples/${request?.searchParams?.raw}`), {
      loading: () => <p>Loading...</p>,
    });
    return <div className="p-4" id="playwright-test">
      <Component />
    </div>
  }

  return (
    <MainLayout isMockup={isMockup}>
      <div className="flex flex-col gap-4 text-moon-14">
        <h1 className="font-medium text-moon-32">{TITLE}</h1>
        <MDX markdown={description} />
        {e}
        {/* TODO: Props table/s */}
      </div>
    </MainLayout>
  )
}
