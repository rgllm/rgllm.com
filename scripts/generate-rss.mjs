import { writeFileSync } from 'fs'
import RSS from 'rss'

import { getAllPosts } from '/lib/get-posts.ts'

async function generate() {
	const posts = await getAllPosts()

	const blogFeed = new RSS({
		title: 'Rogério Moreira',
		site_url: 'https://rgllm.com',
		feed_url: 'https://rgllm.com/feed.xml',
	})

	allBlogs.map((post) => {
		feed.item({
			title: post.title,
			url: `https://rgllm.com/blog/${post.slug}`,
			date: post.date,
			description: post.description,
		})
	})

	writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
