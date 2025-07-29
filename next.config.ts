import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
	experimental: {
		mdxRs: true,
	},
} satisfies NextConfig

const withMDX = createMDX({})

export default withMDX(nextConfig)

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
