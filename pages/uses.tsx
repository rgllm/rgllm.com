import { InferGetStaticPropsType } from 'next'

import Container from 'components/Container'
import { getPage } from 'lib/get-pages'
import convertToComponents from 'lib/parse-html'

export default function Uses(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const { bodyHTML } = props.page
	const parsedBody = convertToComponents(bodyHTML)

	return (
		<Container>
			<div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl ">Uses</h1>
				<div className="prose">{parsedBody}</div>
			</div>
		</Container>
	)
}

export async function getStaticProps() {
	const page = await getPage('uses')

	return {
		props: {
			page,
		},
		revalidate: 60,
	}
}
