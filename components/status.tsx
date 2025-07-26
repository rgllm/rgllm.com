'use client'

export function Status() {
	return (
		<section>
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/status
			</h2>
			<div className="space-y-1 text-sm text-gray-600">
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">currently:</span> building distributed
					training systems for LLMs
				</p>
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">location:</span> new york city
				</p>
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">availability:</span>{' '}
					<span className="text-black dark:text-white">
						open for consulting
					</span>
				</p>
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">last commit:</span> 23 minutes ago
				</p>
			</div>
		</section>
	)
}
