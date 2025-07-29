import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Prose from '@/components/prose'

import content from '../../../../content/content.json'

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const title = content.filter((post) => post.slug === slug)?.[0]?.title
	const { default: Post } = await import(`@/content/${slug}.mdx`)

	return (
		<div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
			<Header title="/notes" />
			<main className="flex flex-col flex-1">
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
					<h1 className="text-3xl font-bold text-foreground">{title}</h1>
				</div>

				<Prose>
					<Post />
				</Prose>
			</main>
			<Footer />
		</div>
	)
}

export function generateStaticParams() {
	return content
}

export const dynamicParams = false
