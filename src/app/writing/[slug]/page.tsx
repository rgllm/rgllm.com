import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Prose from '@/components/prose'

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const { default: Post } = await import(`@/content/${slug}.mdx`)

	return (
		<div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
			<Header />
			<main className="flex flex-col flex-1">
				<Prose>
					<Post />
				</Prose>
			</main>
			<Footer />
		</div>
	)
}

export function generateStaticParams() {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const { readdirSync } = require('fs')
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const { join } = require('path')

	const contentDir = join(process.cwd(), 'content')
	const files = readdirSync(contentDir)

	return files
		.filter((file: string) => file.endsWith('.mdx'))
		.map((file: string) => ({ slug: file.slice(0, -4) }))
}

export const dynamicParams = false
