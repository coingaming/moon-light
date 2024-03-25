import Link from "next/link";
import getData from "./getData";

type titleType = [string, string];

const ProductSidebar = async ({ name, contents }: any) => {
  const titles = await getData(name);
  return (
    <aside className="fixed top-[72px] end-0 w-64 pt-6 px-3 bg-goku overflow-y-auto border-s border-beerus hidden xl:block">
      <nav className="flex flex-col gap-5" aria-label="Page navigation">
        <p className="text-moon-10-caption font-medium uppercase text-trunks">
          On this page
        </p>
        <ul className="flex flex-col gap-2 text-bulma">
          {contents.map((key: string) => {
            const title = titles.find(
              (title: titleType) => title[1] === key,
            )?.[0];
            return (
              <li key={key}>
                <Link
                  href={`#${key}`}
                  className="text-moon-14 transition-colors hover:underline"
                >
                  {title || key}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default ProductSidebar;
