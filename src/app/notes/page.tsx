import Link from 'next/link'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { getNotes } from '@/lib/data'

export default async function NotesPage() {
	const notes = await getNotes()

	return (
		<div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
			<Header title="/notes" />
			<main className="flex flex-col flex-1">
				<section className="mb-6 sm:mb-8">
					<div className="space-y-4">
						{notes.map((post) => (
							<Link
								key={post.slug}
								href={`/notes/${post.slug}`}
								className="block group"
							>
								<article className="p-3 -m-3 rounded transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-900/50">
									<h3 className="text-base font-medium mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
										{post.title}
									</h3>
									<p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
										{post.bodyText?.length > 200
											? `${post.bodyText.slice(0, 200).trim()}...`
											: post.bodyText || ''}
									</p>
								</article>
							</Link>
						))}
					</div>

					{notes.length === 0 && (
						<p className="text-sm text-gray-500 dark:text-gray-500 italic">
							No notes yet.
						</p>
					)}
				</section>
			</main>
			<Footer />
		</div>
	)
}
