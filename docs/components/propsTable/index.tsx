import PropsTableItem from "./PropsTableItem";
import HeaderSection from "../HeaderSection";
import { type PropsTableProp } from "@/types";

type TableProps = {
  data: PropsTableProp[];
  title?: string;
  description?: string | JSX.Element;
};

export const PropsTable = ({ data, title, description }: TableProps) => {
  return (
    <section className="flex flex-col gap-6">
      <HeaderSection title={title} description={description} className="pb-6" />
      <hr className="h-px bg-beerus w-full" />
      {data.map((prop: PropsTableProp) => (
        <PropsTableItem prop={prop} key={prop.name} />
      ))}
    </section>
  );
};
