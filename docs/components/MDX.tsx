import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ComponentProps, HTMLProps } from "react";
import HeaderSection from "./HeaderSection";

const defaultComponents: ComponentProps<any> = {
  h1: (props: HTMLProps<HTMLHeadingElement>) => (
    <HeaderSection
      title={props.children?.toString()}
      href={props.children?.toString()}
    />
  ),
  h2: (props: HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="text-moon-24 font-semibold">
      {props.children}
    </h2>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="text-base font-semibold">
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
    <ul {...props} className="list-disc ps-4 mb-6">
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
    <code {...props} className="p-1 bg-gohan rounded-md text-bulma font-mono">
      {props.children}
    </code>
  ),
  pre: (props: HTMLProps<HTMLPreElement>) => (
    <pre
      {...props}
      className="theme-moon-dark bg-gohan rounded-md text-bulma overflow-y-auto p-4"
    >
      {props.children}
    </pre>
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
