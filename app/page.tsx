import { Connect } from '@/components/connect'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Philosophy } from '@/components/philosophy'
import { Reading } from '@/components/reading'
import { Status } from '@/components/status'

export default function Home() {
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
			<Header darkMode={false} visitorCount={3} />
			<main className="flex flex-col bg-blue-100">
				<Hero typedText="I build things, write code, and solve problems." />
				<Status />
				<Philosophy />
				<Reading />
				<Connect copiedEmail={false} />
			</main>
			<Footer />
		</div>
	)
}
