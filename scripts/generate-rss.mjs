import { writeFileSync } from 'fs'
import RSS from 'rss'
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs'

async function generate() {
	const feed = new RSS({
		title: 'Rogério Moreira',
		site_url: 'https://rgllm.com',
		feed_url: 'https://rgllm.com/feed.xml',
	})

	allBlogs.map((post) => {
		feed.item({
			title: post.title,
			url: `https://rgllm.com/blog/${post.slug}`,
			date: post.publishedAt,
			description: post.summary,
		})
	})

	writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
