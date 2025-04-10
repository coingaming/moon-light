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
    <h2 {...props} className="text-heading-200">
      {props.children}
    </h2>
  ),
  h3: (props: HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className="text-heading-100">
      {props.children}
    </h3>
  ),
  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <a
      as={Link}
      {...props}
      className="transition-colors underline hover:text-brand"
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
    <ul {...props} className="list-disc ps-space-16 mb-space-24">
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
      <ol
        {...rest}
        className="list-decimal ps-space-16 gap-space-8 flex flex-col"
      >
        {props.children}
      </ol>
    );
  },
  code: (props: HTMLProps<HTMLPreElement>) => (
    <code
      {...props}
      className="p-space-4 bg-secondary rounded-6 text-primary font-mono"
    >
      {props.children}
    </code>
  ),
  pre: (props: HTMLProps<HTMLPreElement>) => (
    <pre
      {...props}
      className="dark-theme bg-secondary rounded-6 text-primary overflow-y-auto p-space-16"
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
