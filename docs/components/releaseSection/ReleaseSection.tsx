import { PageSection } from "../pageSection/PageSection";

type Props = {
  title: string;
  href?: string;
  date?: string;
  change?: string;
  description?: string;
};

export const ReleaseSection = async ({
  title,
  href,
  date,
  change,
  description,
}: Props) => (
  <PageSection title={title} href={href} date={date}>
    {change && (
      <ul className="ps-6">
        <li className="list-disc">
          {change}
          {description && (
            <ul className="ps-6">
              <li className="list-disc">{description}</li>
            </ul>
          )}
        </li>
      </ul>
    )}
  </PageSection>
);
