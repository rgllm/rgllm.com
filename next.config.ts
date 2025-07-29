import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
	experimental: {
		mdxRs: true,
	},
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	webpack: (config: any) => {
		config.resolve.alias = {
			...config.resolve.alias,
			// eslint-disable-next-line @typescript-eslint/no-require-imports
			'@/content': require('path').resolve(process.cwd(), 'content'),
		}
		return config
	},
} satisfies NextConfig

const withMDX = createMDX({})

export default withMDX(nextConfig)

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
