/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {ImageResponse} from '@vercel/og'
import {NextRequest} from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const fontRegular = fetch(
  new URL('../../public/fonts/IBMPlexSans-Regular.ttf', import.meta.url),
).then(res => res.arrayBuffer())

const fontBold = fetch(new URL('../../public/fonts/IBMPlexSans-Bold.ttf', import.meta.url)).then(
  res => res.arrayBuffer(),
)

export default async function handler(req: NextRequest) {
  const fontRegularData = await fontRegular
  const fontBoldData = await fontBold

  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 100,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 180px',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{fontSize: 60, fontFamily: '"IBM Plex Sans Bold"'}}>Rogério Moreira</span>
            <span
              style={{
                fontSize: 17,
                maxWidth: '500px',
                fontFamily: '"IBM Plex Sans Regular"',
                textAlign: 'left',
              }}
            >
              Software Engineer, focused on front-end development, living and working from Braga,
              Portugal.
            </span>
          </div>
          <img
            width="180"
            height="180"
            src={`https://github.com/rgllm.png`}
            style={{
              borderRadius: 128,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        emoji: 'fluent',
        fonts: [
          {
            name: 'IBM Plex Sans Regular',
            data: fontRegularData,
            style: 'normal',
          },
          {
            name: 'IBM Plex Sans Bold',
            data: fontBoldData,
            style: 'normal',
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
