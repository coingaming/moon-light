import { getExamples } from "@/utils/getExamples";
import SearchButton from "../search/SearchButton";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

export default async function Sidebar() {
  const { server, client } = await getExamples();
  return (
    <aside className="fixed z-10 h-screen flex flex-shrink-0 flex-col top-0 w-80 flex-grow gap-6 pt-12 pb-28 lg:pb-20 px-5 lg:px-8 bg-gohan overflow-y-scroll">
      <div className="flex items-center flex-shrink-0 ps-3 text-bulma">
        <Link href="/">Moon Design System</Link>
      </div>
      <div>
        <SearchButton />
      </div>
      <nav className="flex flex-col gap-6" aria-label="Sidebar">
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-10-caption font-medium uppercase text-trunks">
            Server components
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {Object.entries(server).map(([key, _value]) => (
              <li key={key}>
                <SidebarItem href={`/server/${key}`}>{key}</SidebarItem>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="ps-2 text-moon-10-caption font-medium uppercase text-trunks">
            Client components
          </p>
          <ul role="list" className="flex flex-col gap-1">
            {Object.entries(client).map(([key, _value]) => (
              <li key={key}>
                <SidebarItem href={`/client/${key}`}>{key}</SidebarItem>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
