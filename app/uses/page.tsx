import {getPage} from 'lib/get-pages'
import convertToComponents from 'lib/parse-html'

async function fetchPage() {
  const page = await getPage('uses')
  return page
}

export default async function Uses() {
  const {bodyHTML} = await fetchPage()
  const parsedBody = convertToComponents(bodyHTML)

  return (
    <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl ">Uses</h1>
      <div className="prose">{parsedBody}</div>
    </div>
  )
}
