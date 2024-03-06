import { MDX } from "./MDX";
import { compileMDX } from "next-mdx-remote/rsc";
import { HTMLProps } from "react";

export const Anatomy = async ({ anatomy }: { anatomy?: string }) => {
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
    <div className="flex flex-col gap-4">
      {title && <h2 className={"text-moon-24 font-medium"}>{title}</h2>}
      {description && <MDX markdown={description} />}
      {content && (
        <pre className="flex w-full p-4 rounded-lg overflow-x-auto text-moon-14 text-bulma border border-beerus">
          {content}
        </pre>
      )}
    </div>
  );
};
