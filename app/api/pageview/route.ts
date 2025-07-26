interface Env {
	PAGEVIEW_TRACKER: DurableObjectNamespace
}
export async function GET(request: Request, context: { env: Env }) {
	const id = context.env.PAGEVIEW_TRACKER.idFromName('global')
	const stub = context.env.PAGEVIEW_TRACKER.get(id)
	return stub.fetch(request)
}
