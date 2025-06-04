import indexPage from './pages/index';
import automovelonlinePage from './pages/automovelonline';
import { RogerioMCP } from './mcp'
import { htmlResponse } from './utils/response';
import NotFoundPage from './components/NotFoundPage';
import { generateHtml } from './utils/generateHtml';
export { RogerioMCP } 

type RouteHandler = () => Response | Promise<Response>

const pageRoutes: Record<string, RouteHandler> = {
	'/blog/como-autenticar-no-automovel-online-em-macos': automovelonlinePage,
	'/': indexPage,
}

export default <ExportedHandler>{
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	  const { pathname } = new URL(request.url)
  
	  if (pathname.startsWith('/sse')) {
		// @ts-ignore – library already typed
		return RogerioMCP.serveSSE('/sse').fetch(request, env, ctx)
	  }
  
	  if (pathname.startsWith('/mcp')) {
		// @ts-ignore
		return RogerioMCP.serve('/mcp').fetch(request, env, ctx)
	  }
  
          // Serve static assets (sitemap)
          if (env.ASSETS && pathname === '/sitemap.xml') {
                return env.ASSETS.fetch(request)
          }
  
          if (pathname in pageRoutes) {
                return pageRoutes[pathname]()
          }

          const html = await generateHtml(NotFoundPage)
          return htmlResponse(html, {status: 404})
        },
  }

