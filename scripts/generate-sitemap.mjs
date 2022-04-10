import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'
import axios from 'axios'
import slugify from 'slugify'

function toJson(data) {
	if (data !== undefined) {
		let intCount = 0,
			repCount = 0
		const json = JSON.stringify(data, (_, v) => {
			if (typeof v === 'bigint') {
				intCount++
				return `${v}#bigint`
			}
			return v
		})
		const res = json.replace(/"(-?\d+)#bigint"/g, (_, a) => {
			repCount++
			return a
		})
		if (repCount > intCount) {
			// You have a string somewhere that looks like "123#bigint";
			throw new Error(`BigInt serialization conflict with a string value.`)
		}
		return res
	}
}

function addExtraDataToPost(post) {
	const { id, bodyHTML, title, publishedAt, body, bodyText } = post

	return {
		id,
		date: publishedAt,
		title,
		body,
		bodyHTML,
		slug: slugify(title, { lower: true }),
		description: bodyText.split('.')[0] + '.',
	}
}

async function getPosts() {
	const result = await axios({
		url: 'https://api.github.com/graphql',
		method: 'POST',
		headers: {
			Authorization: `bearer ${process.env.GH_TOKEN}`,
		},
		data: {
			query: `
        query {
          repository(owner: "rgllm", name: "rgllm.com") {
            discussions(first:100, categoryId: "DIC_kwDOAtQYB84COZvx") {
              nodes {
                id
                body
                bodyText
                bodyHTML
                url
                updatedAt
                title
                publishedAt
                category {
                  name
                }
            }
          }
        }
        }`,
		},
	})

	const allPosts = JSON.parse(toJson(result.data.data.repository.discussions.nodes))
	return allPosts.map((post) => addExtraDataToPost(post))
}

async function generate() {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
	const pages = await globby(['pages/*.tsx', '!pages/_*.tsx', '!pages/api', '!pages/404.tsx'])
	const posts = await getPosts()

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
					.map((page) => {
						const path = page.replace('pages', '').replace('data', '').replace('.tsx', '').replace('.mdx', '')
						const route = path === '/index' ? '' : path

						return `
              <url>
                  <loc>${`https://rgllm.com${route}`}</loc>
              </url>
            `
					})
					.join('')}
					${posts
						.map((post) => {
							return `
              <url>
                  <loc>${`https://rgllm.com/blog/${post.slug}`}</loc>
              </url>
            `
						})
						.join('')}
    </urlset>
    `

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	})

	// eslint-disable-next-line no-sync
	writeFileSync('public/sitemap.xml', formatted)
}

generate()
