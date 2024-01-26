import { mergeClassnames } from "@heathmont/moon-core-tw";
import { serialize } from "next-mdx-remote/serialize";
import { MDX } from "./MDX";
import CodePreviewWrapper from "./exampleSection/codePreview/wrapper/CodePreviewWrapper";
import { compileMDX } from "next-mdx-remote/rsc";
import { HTMLProps } from "react";

interface Props {
  anatomy?: string;
  className?: string;
}

export const Anatomy = async ({ anatomy, className }: Props) => {
  if (!anatomy || typeof anatomy !== "string") {
    return null;
  }

  const { content, frontmatter } = await compileMDX({
    source: anatomy,
    options: {
      parseFrontmatter: true,
    },
    components: {
      code: (props: HTMLProps<HTMLSpanElement>) => props.children,
    },
  });
  const title = frontmatter?.title as string | undefined;
  const description = frontmatter?.description as string | undefined;

  return (
    <div className={className}>
      {title && <h2 className={"text-moon-20 font-medium"}>{title}</h2>}
      {description && <MDX markdown={description} />}
      {content && (
        <pre className="flex w-full p-4 rounded-moon-s-sm overflow-x-auto text-moon-14 text-bulma border border-beerus">
          {content}
        </pre>
      )}
    </div>
  );
};
