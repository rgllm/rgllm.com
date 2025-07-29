import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Prose from '@/components/prose'
import { readFileSync } from 'fs'
import { join } from 'path'

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const { default: Post } = await import(`@/content/${slug}.mdx`)

	const contentDir = join(process.cwd(), 'content')
	const filePath = join(contentDir, `${slug}.mdx`)
	const content = readFileSync(filePath, 'utf8')

	const titleMatch = content.match(/^#\s+(.+)$/m)
	const title = titleMatch ? titleMatch[1] : slug

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
