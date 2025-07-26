import { PageView } from '@/types/PageView'

export async function getVisitorCount(): Promise<PageView> {
	const response = await fetch('/api/pageview', {
		next: { revalidate: 3600 },
	})

	if (!response.ok) {
		throw new Error('Failed to fetch data')
	}

	return response.json()
}

export async function getLastCommitTime(): Promise<string> {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3+json',
	}

	if (process.env.GITHUB_TOKEN) {
		headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
	}

	const response = await fetch(
		`https://api.github.com/users/${process.env.GITHUB_USERNAME}/events`,
		{
			headers,
		}
	)

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status}`)
	}

	const commits = (await response.json()) as Array<{ created_at: string }>
	return commits?.[0]?.created_at
}
