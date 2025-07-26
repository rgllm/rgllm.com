import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function fetcher<T = unknown>(
	...args: Parameters<typeof fetch>
): Promise<T> {
	const res = await fetch(...args)
	return res.json() as Promise<T>
}

export function getRelativeTime(timestamp: string): string {
	const now = new Date()
	const past = new Date(timestamp)
	const diffMs = now.getTime() - past.getTime()

	const seconds = Math.floor(diffMs / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)

	if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`
	if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`
	if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
	return 'just now'
}
