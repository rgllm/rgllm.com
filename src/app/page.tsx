import { Connect } from '@/components/connect'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Philosophy } from '@/components/philosophy'
import { Writing } from '@/components/writing'
import { Status } from '@/components/status'

export default async function Home() {
	//TODO: fix this
	// const lastCommitTime = await getLastCommitTime()

	return (
		<div className="min-h-screen flex flex-col max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
			<Header />
			<main className="flex flex-col flex-1">
				<Hero typedText="I build things, write code, and solve problems." />
				<Status lastCommitTime="today" />
				<Philosophy />
				<Writing />
				<Connect />
			</main>
			<Footer />
		</div>
	)
}
