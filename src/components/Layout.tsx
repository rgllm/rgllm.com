import React from 'react'

type LayoutProps = {
	title: string
	description: string
	canonicalUrl: string
	twitterSite?: string
	lang?: string
	children: React.ReactNode
}

function Layout({
	title,
	description,
	canonicalUrl,
	twitterSite = '@rgllm',
	lang = 'en',
	children,
}: LayoutProps) {
	return (
		<html lang={lang}>
			<head>
				<meta charSet="utf-8" />
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={twitterSite} />
				<link rel="canonical" href={canonicalUrl} />
				<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"/>
				<style type="text/tailwindcss">
					{`
					@layer components {
						a {
							@apply text-blue-500 underline hover:text-blue-700;
						}
					}`}
    			</style>
				<title>{title}</title>
			</head>
			<body className="font-serif leading-relaxed text-base px-2 my-12 max-w-[650px] mx-auto">
				<main id="maincontent" className="max-w-[42em] my-[70px] mx-auto">
					{children}
				</main>
			</body>
		</html>
	)
}

export default Layout