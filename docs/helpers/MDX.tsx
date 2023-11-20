import { MDXRemote } from 'next-mdx-remote/rsc'

export function MDX({ markdown }: { markdown: string }) {
  return <MDXRemote source={markdown} />
}

