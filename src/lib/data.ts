import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

import { Post } from '@/types/Post'

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

export function getNotes(nrOfPosts?: number): Post[] {
	const contentDir = join(process.cwd(), 'content')
	const files = readdirSync(contentDir)

	const posts = files.map((file: string) => {
		const slug = file.slice(0, -4)
		const filePath = join(contentDir, file)
		const content = readFileSync(filePath, 'utf8')
		const titleMatch = content.match(/^#\s+(.+)$/m)
		const title = titleMatch ? titleMatch[1] : slug
		const lines = content.split('\n')
		const firstParagraph = lines.find(
			(line) =>
				line.trim().length > 0 &&
				!line.startsWith('#') &&
				!line.startsWith('```') &&
				!line.startsWith('>')
		)
		const excerpt = firstParagraph
			? firstParagraph.substring(0, 120) + '...'
			: ''

		return { slug, title, excerpt }
	})

	return nrOfPosts ? posts.slice(0, nrOfPosts) : posts
}
