import mergeClassnames from "@heathmont/moon-base-tw/lib/mergeClassnames/mergeClassnames";
import { GenericLink } from "@heathmont/moon-icons-tw";

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
      className={mergeClassnames("text-moon-20 font-medium", className)}
    >
      <a
        href={`#${href || title}`}
        className="flex items-center gap-3 [&:hover_svg]:opacity-100 cursor-pointer"
      >
        {title}
        <GenericLink className="text-piccolo text-moon-16 opacity-0 transition-opacity" />
      </a>
    </h2>
    <div className="flex flex-row flex-wrap gap-4 p-4 text-moon-14 rounded-moon-s-sm bg-goku border border-beerus">
      {children}
    </div>
  </>
);

export default IconsBlock;
