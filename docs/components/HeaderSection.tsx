import mergeClassnames from "@heathmont/moon-base-tw/lib/mergeClassnames/mergeClassnames";
import { GenericLink } from "@heathmont/moon-icons-tw";
import Link from "next/link";

type Props = {
  title?: string;
  description?: string | JSX.Element;
  className?: string;
  href?: string;
};
const HeaderSection = ({ title, description, className, href }: Props) => (
  <>
    <h2
      id={href || title}
      className={mergeClassnames("text-heading-200", className)}
    >
      {href ? (
        <Link
          href={`#${href}`}
          className="flex items-center gap-space-12 [&:hover_svg]:opacity-100 cursor-pointer"
        >
          {title}
          <GenericLink className="text-secondary text-body-400 opacity-0 transition-opacity" />
        </Link>
      ) : (
        title
      )}
    </h2>
    {description && (
      <div className="max-w-3xl flex flex-col gap-space-16 text-body-400 text-primary">
        {description}
      </div>
    )}
  </>
);

export default HeaderSection;
