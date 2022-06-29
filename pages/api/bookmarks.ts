import {type NextRequest} from 'next/server'
import prisma from 'lib/prisma'
import {getDescription, getFavicon, getTitle} from 'lib/crawler'
import toJson from 'lib/to-json'

export default async function handler(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      const allBookmarks = await prisma.bookmark.findMany()

      return new Response(toJson(allBookmarks), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
        },
      })
    } catch (e) {
      return new Response(
        JSON.stringify({
          error: e.message,
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

  if (req.method === 'POST') {
    try {
      const {searchParams} = new URL(req.url)
      const websiteUrl = searchParams.get('link')

      if (!websiteUrl) {
        throw Error('No link provided')
      }

      const title = await getTitle(websiteUrl)
      const description = await getDescription(websiteUrl)
      const favicon = getFavicon(websiteUrl)

      const newEntry = await prisma.bookmark.upsert({
        where: {
          link: websiteUrl,
        },
        update: {
          title: title,
          description: description,
          favicon: favicon,
          link: websiteUrl,
        },
        create: {
          title: title,
          description: description,
          favicon: favicon,
          link: websiteUrl,
        },
      })

      return new Response(
        JSON.stringify({
          id: newEntry.id.toString(),
          created_at: newEntry.created_at.toString(),
          title: newEntry.title,
          description: newEntry.description,
          favicon: newEntry.favicon,
          link: newEntry.link,
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json',
            'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
          },
        },
      )
    } catch (e) {
      return new Response(
        JSON.stringify({
          error: e.message,
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
