import {ImageResponse} from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 300px',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <span style={{fontSize: 50, fontWeight: 'bold'}}>Rogério Moreira</span>
          <span style={{fontSize: 20}}>Hello world</span>
        </div>
        <span style={{fontSize: 150}}>👋</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'fluent',
    },
  )
}
