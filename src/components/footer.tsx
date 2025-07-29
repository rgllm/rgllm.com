'use client'

export function Footer() {
	return (
		<footer className="text-xs text-gray-500 font-mono border-t border-gray-200 dark:border-gray-800 pt-4 mt-6 sm:mt-8">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
				<div className="hover:opacity-70 transition-opacity duration-500 cursor-default">
					© 2024 rgllm.com • built with curiosity
				</div>
				<div className="flex items-center gap-3">
					<span className="hidden sm:inline">press ⌘K for commands</span>
					<span className="sm:hidden">⌘K for commands</span>
					<span className="animate-pulse text-black dark:text-white">●</span>
					<span>online</span>
				</div>
			</div>
		</footer>
	)
}
