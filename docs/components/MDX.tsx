import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ComponentProps, HTMLProps } from "react";

const defaultComponents: ComponentProps<any> = {
  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <a
      as={Link}
      {...props}
      className="transition-colors underline hover:text-piccolo"
      target="_blank"
    >
      {props.children}
    </a>
  ),
  strong: (props: HTMLProps<HTMLSpanElement>) => (
    <span {...props} className="font-medium">
      {props.children}
    </span>
  ),
  ul: (props: HTMLProps<HTMLUListElement>) => (
    <ul {...props} className="list-disc ps-8 pt-2">
      {props.children}
    </ul>
  ),
  ol: (
    props: React.DetailedHTMLProps<
      React.OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >,
  ) => {
    const { type, ...rest } = props;

    return (
      <ol {...rest} className="list-decimal ps-4 gap-2 flex flex-col">
        {props.children}
      </ol>
    );
  },
  code: (props: HTMLProps<HTMLPreElement>) => (
    <code
      {...props}
      className="p-1 bg-gohan rounded-md text-moon-14 text-bulma font-mono"
    >
      {props.children}
    </code>
  ),
};

export function MDX({
  markdown,
  ...rest
}: { markdown: string } & Omit<MDXRemoteProps, "source">) {
  return (
    <MDXRemote
      {...rest}
      source={markdown}
      components={rest.components || defaultComponents}
      options={{
        parseFrontmatter: true,
      }}
    />
  );
}
