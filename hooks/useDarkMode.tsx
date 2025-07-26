'use client'

import { useState, useEffect, useCallback } from 'react'

export default function useDarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const [hydrated, setHydrated] = useState(false)

	useEffect(() => {
		setHydrated(true)

		const stored = localStorage.getItem('theme')
		const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches

		const initial = stored === 'dark' || (!stored && systemPref)
		setIsDarkMode(initial)

		const html = document.documentElement
		html.classList.toggle('dark', initial)
	}, [])

	const toggleDarkMode = useCallback(() => {
		setIsDarkMode((prev) => {
			const next = !prev
			const html = document.documentElement
			html.classList.toggle('dark', next)
			localStorage.setItem('theme', next ? 'dark' : 'light')
			return next
		})
	}, [])

	return { isDarkMode: hydrated && isDarkMode, toggleDarkMode }
}
