import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ComponentProps, HTMLProps } from "react";

const defaultComponents: ComponentProps<any> = {
  h1: (props: HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="text-xl font-semibold">
      {props.children}
    </h1>
  ),
  h2: (props: HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="text-lg font-semibold ps-4">
      {props.children}
    </h2>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="text-base font-semibold ps-8">
      {props.children}
    </h3>
  ),
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
    <ul {...props} className="list-disc ps-12 mb-6">
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
      <ol {...rest} className="list-decimal ps-12 gap-2 flex flex-col">
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
