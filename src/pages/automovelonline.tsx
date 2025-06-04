import AutomovelOnlinePage from '../components/AutomovelOnlinePage'
import { generateHtml } from '../utils/generateHtml'
import { htmlResponse } from '../utils/response'

export default async function automovelonline() {
        const html = generateHtml(AutomovelOnlinePage)
        return htmlResponse(html)
}

