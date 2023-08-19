import {InferGetStaticPropsType} from 'next'
import {useRef} from 'react'

import {getPage} from 'lib/get-pages'
import Container from '~/Container'
import convertToComponents from 'lib/parse-html'

export default function Resume(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const {bodyHTML} = props.page
  const parsedBody = convertToComponents(bodyHTML)
  const componentRef = useRef(null)

  return (
    <Container title="Resume - Rogério Moreira">
      <div
        ref={componentRef}
        className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto"
      >
        <div className="flex flex-row-reverse">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Rogério Moreira
          </h1>
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
      page,
    },
    revalidate: 120,
  }
}
