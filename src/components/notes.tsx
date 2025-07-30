import Link from 'next/link'

import { Note } from '@/types/Note'

type NotesProps = {
	notes: Note[]
}

export function Notes({ notes }: NotesProps) {
	return (
		<section className="mb-6 sm:mb-8">
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/notes
			</h2>
			<div className="space-y-1 text-sm">
				{notes.map((post) => (
					<Link
						key={post.id}
						href={`/notes/${post.slug}`}
						className="flex flex-col sm:flex-row sm:justify-between hover:opacity-50 p-2 -m-2 rounded transition-opacity duration-300 gap-1 sm:gap-0 text-gray-600 dark:text-gray-300"
					>
						<span className="truncate sm:text-clip">{post.title}</span>
					</Link>
				))}
			</div>

			{notes.length === 0 && (
				<p className="text-sm text-gray-600 dark:text-gray-300 italic">
					No notes yet.
				</p>
			)}
		</section>
	)
}
