import { Discussion } from '@/types/Discussion'
import { Note } from '@/types/Note'
import { slugify } from './utils'

export async function getLastCommitTime(): Promise<string> {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3+json',
	}

	if (process.env.GITHUB_TOKEN) {
		headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
	}

	const response = await fetch(
		`https://api.github.com/users/${process.env.GITHUB_USERNAME}/events?per_page=1`,
		{ headers }
	)

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status}`)
	}

	const events = (await response.json()) as Array<{ created_at: string }>
	return events[0]?.created_at
}

export async function getNotes(nrOfPosts?: number) {
	const query = `
		query {
			repository(owner: "${process.env.GITHUB_USERNAME}", name: "${process.env.GITHUB_NOTES_REPO}") {
				discussions(first: ${nrOfPosts ? nrOfPosts : 100}, orderBy: {field: UPDATED_AT, direction: DESC}) {
					nodes {
						id
						title
						body
						bodyText
						url
						createdAt
					}
				}
			}
		}
	`

	const response = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query }),
	})

	if (!response.ok) {
		throw new Error(`GitHub API error: ${response.status}`)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const data = (await response.json()) as any

	if (data.errors) {
		throw new Error(`Github GraphQL errors: ${JSON.stringify(data.errors)}`)
	}

	return data.data.repository.discussions.nodes.map((node: Discussion) => {
		return { ...node, slug: slugify(node.title) }
	}) as Note[]
}
