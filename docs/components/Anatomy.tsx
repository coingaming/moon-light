import { MDX } from "./MDX";
import { compileMDX } from "next-mdx-remote/rsc";

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
      code: (props: React.HTMLProps<HTMLSpanElement>) => props.children,
    },
  });
  const title = frontmatter?.title as string | undefined;
  const description = frontmatter?.description as string | undefined;

  return (
    <div className="flex flex-col gap-space-16">
      {title && <h2 className="text-heading-200">{title}</h2>}
      {description && <MDX markdown={description} />}
      {content && (
        <pre className="flex w-full p-space-16 rounded-8 overflow-x-auto text-body-300 text-primary border border-primary">
          {content}
        </pre>
      )}
    </div>
  );
};
