import Image from 'next/image'

import Container from 'components/Container'

export default function Home(props) {
	return (
		<Container>
			<div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200">
				<div className="flex flex-col-reverse items-start sm:flex-row">
					<div className="flex flex-col pr-8">
						<h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl">Rogério Moreira</h1>
						<h2 className="mb-4 text-gray-700">
							Software Engineer. Writing code at <span className="font-semibold">Mindera</span>.
						</h2>
						<p className="mb-16 text-gray-600 sm:max-w-[460px]">
							Currently based in Braga, Portugal. You can follow me on{' '}
							<a href="https://twitter.com/rgllm" target="_blank" rel="noopener noreferrer">
								Twitter
							</a>
							, see my code on{' '}
							<a href="https://github.com/rgllm" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
							, or check my{' '}
							<a href="https://linkedin.com/in/rgllm" target="_blank" rel="noopener noreferrer">
								LinkedIn
							</a>
							. I occasionally blog too.
						</p>
					</div>
					<div className="w-[80px] sm:w-[130px] relative mb-8 sm:mb-0 mr-auto">
						<Image
							alt="Rogério Moreira"
							height={130}
							width={130}
							src="/images/avatar.jpg"
							className="transition-all rounded-full grayscale-0 hover:filter hover:grayscale"
						/>
					</div>
				</div>
			</div>
		</Container>
	)
}
