import Link from "next/link";
import SearchButton from "@/components/search/SearchButton";
import { getExamples } from "@/utils/getExamples";
import { MainLayout } from "@/components/MainLayout";

export default async function Home() {
  const { server, client } = await getExamples();

  return (
    <MainLayout>
      <div className="flex flex-col gap-4">
        <h1 className="text-moon-48 font-medium">Moon Design System</h1>

        <SearchButton />

        {/* TODO remove  */}
        <div>
          <h2 className="text-moon-32 font-medium">Server componentstestcspell</h2>
          <ul role="list" className="">
            {Object.entries(server).map(([key, _value]) => (
              <li key={key} className="py-4">
                <Link href={`server/${key}`}>{key}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-moon-32 font-medium">Client components</h2>
          <ul role="list" className="">
            {Object.entries(client).map(([key, _value]) => (
              <li key={key} className="py-4">
                <Link href={`client/${key}`}>{key}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
