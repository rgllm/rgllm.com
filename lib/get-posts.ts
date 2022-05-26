import axios from 'axios'
import slugify from 'slugify'

import toJson from './to-json'

const addExtraDataToPost = post => {
  const {id, bodyHTML, title, publishedAt, body, bodyText} = post

  return {
    id,
    date: publishedAt,
    title,
    body,
    bodyHTML,
    slug: slugify(title, {lower: true}),
    description: bodyText.split('.')[0] + '.',
  }
}

export const getAllPosts = async () => {
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

    return allPosts.map(post => addExtraDataToPost(post))
  } catch (error) {
    return null
  }
}

export const getPost = async (slug: string) => {
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
    const postToReturn = allPosts.filter(post => slugify(post.title, {lower: true}) === slug)[0]

    return addExtraDataToPost(postToReturn)
  } catch (error) {
    return null
  }
}
