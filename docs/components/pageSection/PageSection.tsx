import HeaderSection from "../HeaderSection";

type Props = {
  title: string;
  description?: JSX.Element;
  href?: string;
  children?: React.ReactNode;
  date?: string;
};

export const PageSection = async ({
  title,
  description,
  href,
  children,
  date,
}: Props) => (
  <div className="flex flex-col gap-4 relative">
    <div className="flex flex-col gap-2 relative">
      <HeaderSection title={title} description={description} href={href} />
      {date && <span className="text-trunks">{date}</span>}
    </div>
    {children}
  </div>
);
