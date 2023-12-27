import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { ReactNode, ComponentProps, HTMLProps } from "react";

const defaultComponents: ComponentProps<any> = {
  a: (props: HTMLProps<HTMLAnchorElement>) => (
    <a {...props} className="transition-colors underline hover:text-piccolo">
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
  code: (props: HTMLProps<HTMLSpanElement>) => (
    <code {...props} className="text-chichi bg-gohan">
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
    />
  );
}
