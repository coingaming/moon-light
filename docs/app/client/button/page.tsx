import { Default } from "@/app/client/button/examples/Default";
import { getExamples } from "@/utils/getExamples";
import { MDX } from "@/components/MDX";
import { PropsTable } from "@/components/propsTable";
import props from './props'

export default async function Home() {
  const { client } = await getExamples()
  return (
    <div className="flex flex-col gap-4 text-moon-14">
      <h1>Button</h1>

      <MDX markdown={client.button.description} />

      <div className="space-y-2 pb-20">
        <h2>Default</h2>
        <div className={'flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku rounded-moon-s-sm'}>
          <Default />
        </div>
        <PropsTable
          title="Props"
          data={props}
        />
      </div>
    </div>
  )
}
