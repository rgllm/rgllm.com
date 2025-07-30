'use client'

import { getRelativeTime } from '@/lib/utils'

type StatusProps = {
	lastCommitTime: string
}

export function Status({ lastCommitTime }: StatusProps) {
	const relativeCommitTime = getRelativeTime(lastCommitTime)

	return (
		<section className="mb-6 sm:mb-8">
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/context
			</h2>
			<div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
				<p>
					<span className="font-mono">current focus: </span>
					product engineering, frontend, agents and mcp
				</p>
				<p>
					<span className="font-mono">location:</span> portugal 🇵🇹
				</p>
				<p>
					<span className="font-mono">last commit:</span> {relativeCommitTime}
				</p>
			</div>
		</section>
	)
}
