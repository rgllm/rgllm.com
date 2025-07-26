interface HeroProps {
	typedText: string
}

export function Hero({ typedText }: HeroProps) {
	return (
		<section className="mb-8 sm:mb-10">
			<p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl">
				{typedText}
				<span className="animate-pulse text-black dark:text-white">|</span>
			</p>
		</section>
	)
}
