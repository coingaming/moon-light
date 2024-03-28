import getData from "./getData";
import RightSidebar from "../sidebar/RightSidebar";
import RightSidebarItem from "../sidebar/RightSidebarItem";

type titleType = [string, string];

const ProductSidebar = async ({ name, contents }: any) => {
  const titles = await getData(name);
  return (
    <RightSidebar purpose="Page navigation" title="On this page">
      {contents.map((key: string, index: number) => {
        const title = titles.find((title: titleType) => title[1] === key)?.[0];
        return (
          <RightSidebarItem
            key={index}
            index={key}
            href={key}
            title={title || key}
          />
        );
      })}
    </RightSidebar>
  );
};

export default ProductSidebar;
