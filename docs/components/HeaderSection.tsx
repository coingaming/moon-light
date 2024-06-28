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
      className={mergeClassnames("text-moon-24 font-medium", className)}
    >
      {href ? (
        <Link
          href={`#${href}`}
          className="flex items-center gap-3 [&:hover_svg]:opacity-100 cursor-pointer"
        >
          {title}
          <GenericLink className="text-trunks text-moon-16 opacity-0 transition-opacity" />
        </Link>
      ) : (
        title
      )}
    </h2>
    {description && (
      <div className="max-w-3xl flex flex-col gap-4 text-moon-16 text-bulma">
        {description}
      </div>
    )}
  </>
);

export default HeaderSection;
