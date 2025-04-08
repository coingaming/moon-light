import mergeClassnames from "@heathmont/moon-base-tw/lib/mergeClassnames/mergeClassnames";
import { GenericLink } from "@heathmont/moon-icons-tw";
import Link from "next/link";

type Props = {
  title?: string;
  description?: string | JSX.Element;
  className?: string;
  href?: string;
  children?: React.ReactNode;
};

const IconsBlock = ({ title, children, className, href }: Props) => (
  <>
    <h2
      id={href || title}
      className={mergeClassnames("text-heading-200", className)}
    >
      <Link
        href={`#${href || title}`}
        className="flex items-center gap-space-12 [&:hover_svg]:opacity-100 cursor-pointer"
      >
        {title}
        <GenericLink className="text-brand text-body-400 opacity-0 transition-opacity" />
      </Link>
    </h2>
    <div className="flex flex-wrap gap-space-8 p-space-16 text-bosy-400 rounded-8 bg-primary border border-primary">
      {children}
    </div>
  </>
);

export default IconsBlock;
