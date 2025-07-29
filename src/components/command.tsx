'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCommandState } from 'cmdk'

import {
	CommandDialog,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
} from '@/components/ui/command'
import useDarkMode from '@/hooks/useDarkMode'

export default function Command() {
	const router = useRouter()
	const { toggleDarkMode } = useDarkMode()
	const [open, setOpen] = useState(false)

	const SubItem = (props: React.ComponentProps<typeof CommandItem>) => {
		const search = useCommandState((state) => state.search)
		if (!search) return null
		return <CommandItem {...props} />
	}

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder="type a command..." />
			<CommandList>
				<CommandEmpty>no commands available.</CommandEmpty>
				<CommandGroup heading="commands">
					<CommandItem
						onSelect={() => {
							router.push('/')
							setOpen(false)
						}}
					>
						about
					</CommandItem>
					<CommandItem
						onSelect={() => {
							router.push('/notes')
							setOpen(false)
						}}
					>
						notes
					</CommandItem>
					<SubItem
						onSelect={() => {
							router.push('/')
							setOpen(false)
						}}
					>
						home
					</SubItem>
					<CommandItem
						onSelect={() => {
							toggleDarkMode()
							setOpen(false)
						}}
					>
						toggle mode
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	)
}
