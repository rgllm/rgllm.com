'use client'

const philosophyItems = [
	'have fun',
	'shipping fast beats the best strategy',
	'documentation is a love letter',
	'diverse teams build better products',
	'consistency beats brilliance.',
	'continuous learning is the only constant in technology',
	"good design is invisible—users shouldn't think about it",
	'the most underrated skill in engineering is saying things clearly',
]

export function Philosophy() {
	return (
		<section className="mb-6 sm:mb-8">
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/ethos
			</h2>
			<div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 leading-snug">
				{philosophyItems.map((philosophy, index) => (
					<p key={index} className="group mb-2">
						{philosophy}
					</p>
				))}
			</div>
		</section>
	)
}
