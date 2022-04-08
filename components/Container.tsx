import Head from 'next/head'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import cn from 'classnames'

import Footer from 'components/Footer'

function NavItem({ href, text }) {
	const router = useRouter()
	const isActive = router.asPath === href

	return (
		<NextLink href={href}>
			<a
				className={cn(
					isActive ? 'font-semibold text-gray-800' : 'font-normal text-gray-600',
					'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:text-black transition-all'
				)}>
				<span className="capsize">{text}</span>
			</a>
		</NextLink>
	)
}

export default function Container(props) {
	const { children, ...customMeta } = props
	const router = useRouter()
	const meta = {
		title: 'Rogério Moreira',
		description: `Software Engineer, focused on frontend development, living and working from Braga, Portugal.`,
		image: 'https://rgllm.com/images/og.png',
		type: 'website',
		...customMeta,
	}

	return (
		<div className="bg-gray-50 ">
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:url" content={`https://rgllm.com${router.asPath}`} />
				<link rel="canonical" href={`https://rgllm.com${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="Rogério Moreira" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@rgllm" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				{meta.date && <meta property="article:published_time" content={meta.date} />}
			</Head>
			<div className="flex flex-col justify-center px-8">
				<nav className="relative flex items-center justify-between w-full max-w-2xl pt-8 pb-8 mx-auto text-gray-900 border-gray-200 sm:pb-16 bg-gray-50 bg-opacity-60">
					<a href="#skip" className="skip-nav">
						Skip to content
					</a>
					<div className="ml-[-0.60rem]">
						<NavItem href="/" text="Home" />
						<NavItem href="/about" text="About" />
						<NavItem href="/blog" text="Writing" />
						<NavItem href="/bookmarks" text="Bookmarks" />
					</div>
				</nav>
			</div>
			<main id="skip" className="flex flex-col justify-center px-8 bg-gray-50">
				{children}
				<Footer />
			</main>
		</div>
	)
}
