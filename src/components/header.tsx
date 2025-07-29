'use client'

import Link from 'next/link'
import { Command, Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import useDarkMode from '@/hooks/useDarkMode'

interface HeaderProps {
	setShowCommandPalette?: (value: boolean) => void
	title?: string
}

export function Header({
	title = 'Rogério Moreira',
	setShowCommandPalette,
}: HeaderProps) {
	const { toggleDarkMode, isDarkMode } = useDarkMode()

	return (
		<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
			<div className="w-full sm:w-auto">
				<h1 className="text-2xl sm:text-3xl font-bold mb-1 text-black dark:text-white">
					{title}
				</h1>
			</div>

			<div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
				<nav className="flex items-center space-x-4 sm:space-x-6 text-sm">
					<Link
						href="/"
						className="hover:opacity-60 transition-opacity duration-300 cursor-pointer"
						replace
					>
						about
					</Link>
					<Link
						href="/notes"
						className="hover:opacity-60 transition-opacity duration-300 cursor-pointer"
						replace
					>
						notes
					</Link>
				</nav>

				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setShowCommandPalette?.(true)}
						className="flex items-center gap-1 text-xs hover:opacity-70 transition-opacity duration-200"
					>
						<Command className="w-3 h-3" />
						<span className="hidden sm:inline">K</span>
					</Button>

					<Button
						variant="ghost"
						size="sm"
						onClick={toggleDarkMode}
						className="hover:opacity-70 transition-opacity duration-200"
					>
						{isDarkMode ? (
							<Sun className="w-4 h-4" />
						) : (
							<Moon className="w-4 h-4" />
						)}
					</Button>
				</div>
			</div>
		</header>
	)
}
