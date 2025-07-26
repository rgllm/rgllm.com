'use client'

import Link from 'next/link'
import { Command, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useDarkMode from '@/hooks/useDarkMode'
import useTime from '@/hooks/useTime'

interface HeaderProps {
	darkMode: boolean
	setDarkMode?: (value: boolean) => void
	setShowCommandPalette?: (value: boolean) => void
	visitorCount: number
}

export function Header({ setShowCommandPalette, visitorCount }: HeaderProps) {
	const { toggleDarkMode, isDarkMode } = useDarkMode()
	const { currentTime, currentHourDiffToVisitor } = useTime()

	return (
		<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0 bg-amber-100">
			<div className="w-full sm:w-auto">
				<div className="relative group">
					<Link href="/">
						<h1 className="text-2xl sm:text-3xl font-bold mb-1 cursor-default text-black dark:text-white">
							Rogério Moreira
						</h1>
					</Link>
				</div>

				<div className="text-xs text-gray-500 font-mono">
					visitor #{visitorCount.toLocaleString()} • {currentTime}
					{currentHourDiffToVisitor !== 0
						? ' • ' + currentHourDiffToVisitor
						: ''}
				</div>
			</div>

			<div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
				<nav className="flex items-center space-x-4 sm:space-x-6 text-sm">
					<Link
						href="/writing"
						className="hover:opacity-60 transition-opacity duration-300 cursor-pointer"
					>
						writing
					</Link>
					<Link
						href="/contact"
						className="hover:opacity-60 transition-opacity duration-300 cursor-pointer"
					>
						contact
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
