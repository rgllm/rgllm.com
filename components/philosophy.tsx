'use client'

const philosophyItems = [
	'AI should augment human intelligence, not replace it.',
	'Open source accelerates innovation faster than any proprietary solution.',
	'Simple solutions are often the most elegant and maintainable.',
	'Ship fast, iterate faster, but never compromise on safety.',
	'Code quality matters more than quantity—every line should have purpose.',
	'Documentation is a love letter to your future self and your team.',
	'Diverse teams build better products, period.',
	'Continuous learning is the only constant in technology.',
	'Performance is a feature, not an afterthought.',
	"Good design is invisible—users shouldn't think about it.",
	"The best code is code you don't have to write.",
	"Empathy is a developer's most important skill.",
]

export function Philosophy() {
	return (
		<section className="mb-6 sm:mb-8">
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/philosophy.txt
			</h2>
			<div className="space-y-1 text-sm text-gray-600 leading-snug">
				{philosophyItems.map((philosophy, index) => (
					<p
						key={index}
						className="hover:opacity-60 transition-opacity duration-500 cursor-default group mb-2"
					>
						{philosophy}
					</p>
				))}
			</div>
		</section>
	)
}
