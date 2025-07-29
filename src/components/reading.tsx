'use client'

interface Book {
	title: string
	author: string
}

const books: Book[] = [
	{ title: 'Attention Is All You Need', author: 'Vaswani et al.' },
	{ title: 'The Bitter Lesson', author: 'Rich Sutton' },
	{ title: 'Building LLMs for Production', author: 'Chip Huyen' },
	{ title: 'Scaling Laws for Neural Language Models', author: 'Kaplan et al.' },
]

export function Reading() {
	return (
		<section className="mb-6 sm:mb-8">
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/currently-reading
			</h2>
			<div className="space-y-1 text-sm">
				{books.map((book, index) => (
					<div
						key={index}
						className="flex flex-col sm:flex-row sm:justify-between hover:opacity-75 p-2 -m-2 rounded transition-opacity duration-400 gap-1 sm:gap-0"
					>
						<span className="truncate sm:text-clip">{book.title}</span>
						<span className="text-gray-500 font-mono text-xs sm:text-sm flex-shrink-0">
							{book.author}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}
