import AutomovelOnlinePage from '../components/IndexPage'
import { generateHtml } from '../utils/generateHtml'
import { htmlResponse } from '../utils/response'

export default async function automovelonline() {
	const html = await generateHtml(AutomovelOnlinePage)
	return htmlResponse(html)
}