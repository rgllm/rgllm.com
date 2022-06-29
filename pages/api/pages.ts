import {type NextRequest} from 'next/server'

const axios = require('axios')

export default async function handler(req: NextRequest) {
  if (req.method === 'GET') {
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
                bodyHTML
                url
                title
                body
            }
          }
        }
        }`,
        },
      })

      return new Response(
        JSON.stringify({
          body: result?.data?.data?.repository,
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
            'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
          },
        },
      )
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        {
          status: 500,
          headers: {
            'content-type': 'application/json',
          },
        },
      )
    }
  }
  return new Response(
    JSON.stringify({
      error: 'Method not allowed',
    }),
    {
      status: 400,
      headers: {
        'content-type': 'application/json',
      },
    },
  )
}

export const config = {
  runtime: 'experimental-edge',
}
