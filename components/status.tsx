'use client'

import { getRelativeTime } from '@/lib/utils'

type StatusProps = {
	lastCommitTime: string
}

export function Status({ lastCommitTime }: StatusProps) {
	const relativeLastCommitTime = getRelativeTime(lastCommitTime)

	return (
		<section className="mb-6 sm:mb-8">
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/status
			</h2>
			<div className="space-y-1 text-sm text-gray-600">
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">current focus:</span> design systems,
					product engineering, LLMs, Agents and MCPs
				</p>
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">location:</span> braga, portugal
				</p>
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">availability:</span>{' '}
					<span className="text-black dark:text-white">
						open to conversations
					</span>
				</p>
				<p className="hover:opacity-70 transition-opacity duration-300 cursor-default">
					<span className="font-mono">last commit:</span>{' '}
					{relativeLastCommitTime}
				</p>
			</div>
		</section>
	)
}
