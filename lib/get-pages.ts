import axios from 'axios'
import slugify from 'slugify'
import toJson from './to-json'

export const getPage = async (slug: string) => {
	try {
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
            discussions(first:100, categoryId: "DIC_kwDOAtQYB84COZvz") {
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

		const allPages = JSON.parse(toJson(result.data.data.repository.discussions.nodes))

		return allPages.filter((post) => slugify(post.title, { lower: true }) === slug)[0]
	} catch (error) {
		return null
	}
}
