'use client'

import {Html, Head, NextScript} from 'next/document'
import {useRouter} from 'next/router'
import 'styles/globals.css'

import {AnalyticsWrapper} from 'components/Analytics'

export default function RootLayout({children}: {children: React.ReactNode}) {
  const router = useRouter()
  const meta = {
    title: 'Rogério Moreira',
    description: `Software Engineer, focused on front-end development, living and working from Braga, Portugal.`,
    type: 'website',
  }

  return (
    <Html lang="en">
      <Head>
        <title>{meta.title}</title>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/favicons/manifest.json" rel="manifest" />
        <link rel="preconnect" href="https://ai.rgllm.com" crossOrigin="" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://rgllm.com${router?.asPath}`} />
        <link rel="canonical" href={`https://rgllm.com${router?.asPath}`} />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rogério Moreira" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content="https://rgllm.com/api/og" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rgllm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta property="twitter:image" content="https://rgllm.com/api/og" />
        <script
          async
          defer
          data-website-id={process.env.UMAMI_WEBSITE_ID}
          src="https://ai.rgllm.com/umami.js"
        ></script>
      </Head>
      <body>
        {children}
        <AnalyticsWrapper />
        <NextScript />
      </body>
    </Html>
  )
}
