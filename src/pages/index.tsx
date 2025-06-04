import IndexPage from '../components/IndexPage'
import { generateHtml } from '../utils/generateHtml'
import { htmlResponse } from '../utils/response'

export default async function index() {
        const html = await generateHtml(IndexPage)
        return htmlResponse(html)
}

