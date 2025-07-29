'use client'
import { useState, useEffect } from 'react'

type HeroProps = {
	typedText: string
}

export function Hero({ typedText }: HeroProps) {
	const [displayedText, setDisplayedText] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		if (currentIndex < typedText.length) {
			const timeout = setTimeout(() => {
				setDisplayedText(typedText.slice(0, currentIndex + 1))
				setCurrentIndex(currentIndex + 1)
			}, 50)

			return () => clearTimeout(timeout)
		}
	}, [currentIndex, typedText])

	useEffect(() => {
		setDisplayedText('')
		setCurrentIndex(0)
	}, [typedText])

	return (
		<section className="mb-6 sm:mb-8">
			<p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl">
				{displayedText}
				<span className="animate-pulse text-black dark:text-white">|</span>
			</p>
		</section>
	)
}
