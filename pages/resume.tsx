import { useRef, useCallback, useState } from 'react'
import ReactToPrint from 'react-to-print'
import { InferGetStaticPropsType } from 'next'

import Container from 'components/Container'
import { getPage } from 'lib/get-pages'
import convertToComponents from 'lib/parse-html'

export default function Resume(props: InferGetStaticPropsType<typeof getStaticProps>) {
	const { bodyHTML } = props.page
	const parsedBody = convertToComponents(bodyHTML)
	const componentRef = useRef(null)

	const reactToPrintContent = useCallback(() => {
		return componentRef.current
	}, [componentRef.current])

	const reactToPrintTrigger = useCallback(() => {
		return (
			<button type="button" name="Print my CV" className="hideonprint ml-4 text-[25px]">
				🖨️
			</button>
		)
	}, [])

	return (
		<Container>
			<div ref={componentRef} className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
				<div className="flex flex-row-reverse">
					<ReactToPrint
						content={reactToPrintContent}
						documentTitle="rogerio-cv"
						removeAfterPrint
						trigger={reactToPrintTrigger}
					/>
					<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">Rogério Moreira</h1>
				</div>
				<div className="prose">{parsedBody}</div>
			</div>
		</Container>
	)
}

export async function getStaticProps() {
	const page = await getPage('resume')

	return {
		props: {
			page: page,
		},
		revalidate: 60,
	}
}