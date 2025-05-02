import indexPage from './pages/index';
import automovelonlinePage from './pages/automovelonline';
import { RogerioMCP } from './mcp'
import { htmlResponse } from './utils/response';
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
  
	  // Serve static assets (including our CSS file)
	  if (env.ASSETS && pathname.startsWith('/styles.css')) {
		return env.ASSETS.fetch(request)
	  }
  
	  if (pathname in pageRoutes) {
		return pageRoutes[pathname]()
	  }
  
	  return htmlResponse('404', {status: 404})
	},
  }
  