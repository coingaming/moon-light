import SidebarItem from "../sidebar/SidebarItem";
import PageNavigation from "../overviewSidebar/PageNavigation";
import getData from "./getData";

type titleType = [string, string];

const ProductSidebar = async ({ name, contents }: any) => {
  const titles = await getData(name);
  return (
    <PageNavigation>
      {contents.map((key: string) => {
        const title = titles.find((title: titleType) => title[1] === key)?.[0];
        return (
          <li key={key}>
            <SidebarItem href={`#${key}`}>{title || key}</SidebarItem>
          </li>
        );
      })}
    </PageNavigation>
  );
};

export default ProductSidebar;
