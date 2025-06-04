const htmlHeaders = { 'content-type': 'text/html;charset=UTF-8' } as const

export const htmlResponse = (body: string, init: ResponseInit = {}) =>
  new Response(body, { ...init, headers: htmlHeaders })

