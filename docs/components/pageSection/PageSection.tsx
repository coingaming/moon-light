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
  <div className="flex flex-col gap-space-16 relative">
    <div className="flex flex-col gap-space-8 relative">
      <HeaderSection title={title} description={description} href={href} />
      {date && <span className="text-secondary">{date}</span>}
    </div>
    {children}
  </div>
);
