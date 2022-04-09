import { PropsWithChildren } from 'react'

import Container from './Container'

export default function BlogLayout({ children, post }: PropsWithChildren<any>) {
	return (
		<Container
			title={`${post.title} – Rogério Moreira`}
			description={post.description}
			date={new Date(post.publishedAt).toISOString()}
			type="article">
			<article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl ">{post.title}</h1>
				<div className="w-full mt-4 prose max-w-none">{children}</div>
			</article>
		</Container>
	)
}
