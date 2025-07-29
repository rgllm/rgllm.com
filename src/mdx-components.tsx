import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }: { children: React.ReactNode }) => (
			<h1 style={{ fontSize: '100px' }}>{children}</h1>
		),
		...components,
	}
}
