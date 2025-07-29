'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import useDarkMode from '@/hooks/useDarkMode'
import { cn } from '@/lib/utils'

interface HeaderProps {
	title?: string
}

export function Header({ title = 'Rogério Moreira' }: HeaderProps) {
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
					>
						about
					</Link>
					<Link
						href="/notes"
						className="hover:opacity-60 transition-opacity duration-300 cursor-pointer"
					>
						notes
					</Link>
				</nav>

				<div className="flex items-center">
					<Button
						variant="link"
						size="sm"
						onClick={toggleDarkMode}
						className="relative w-5 h-5"
					>
						<Sun
							className={cn(
								'absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 top-0.5',
								isDarkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
							)}
						/>
						<Moon
							className={cn(
								'absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 top-0.5',
								isDarkMode ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
							)}
						/>
					</Button>
				</div>
			</div>
		</header>
	)
}
