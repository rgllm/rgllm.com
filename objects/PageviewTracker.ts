export class PageviewTracker {
	constructor(private state: DurableObjectState) {}

	async fetch(request: Request): Promise<Response> {
		const ip = request.headers.get('cf-connecting-ip') || 'unknown'
		const key = `ip:${ip}`
		const previousValue = (await this.state.storage.get<number>(key)) ?? 0
		const newValue = previousValue + 1

		await this.state.storage.put(key, newValue)

		return new Response(JSON.stringify({ ip, visits: newValue }), {
			headers: { 'Content-Type': 'application/json' },
		})
	}
}
