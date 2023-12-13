import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc'

export function MDX({ markdown, ...rest }: { markdown: string } & Omit<MDXRemoteProps, "source">) {
  return <MDXRemote {...rest} source={markdown} />
}