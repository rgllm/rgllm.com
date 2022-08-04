import {InferGetStaticPropsType} from 'next'

import {getPage} from 'lib/get-pages'
import Container from 'components/Container'
import convertToComponents from 'lib/parse-html'

export default function Uses(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const {bodyHTML} = props.page
  const parsedBody = convertToComponents(bodyHTML)

  return (
    <Container title="Uses - Rogério Moreira">
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
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
    revalidate: 120,
  }
}
