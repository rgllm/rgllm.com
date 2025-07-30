import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSanitize from 'rehype-sanitize'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Prose from '@/components/prose'
import { getNotes } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const notes = await getNotes()
	const note = notes.find((n) => n.slug === slug)

	if (!note) {
		notFound()
	}

	return (
		<div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
			<Header title="/notes" />
			<main className="flex flex-col flex-1">
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
					<h1 className="text-3xl font-bold text-foreground">{note.title}</h1>
				</div>

				<Prose>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeSanitize]}
					>
						{note.body}
					</ReactMarkdown>
				</Prose>
			</main>
			<Footer />
		</div>
	)
}

export async function generateStaticParams() {
	const notes = await getNotes()
	return notes
}

// dynamicParams = true because slugs come from the GitHub API at runtime
export const dynamicParams = true
export const dynamic = 'force-dynamic'
