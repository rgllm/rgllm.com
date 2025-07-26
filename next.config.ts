import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		// Forward browser logs to the terminal for easier debugging
		browserDebugInfoInTerminal: true,

		// Explore route composition and segment overrides via DevTools
		devtoolSegmentExplorer: true,

		// Enable support for `global-not-found`, which allows you to more easily define a global 404 page.
		globalNotFound: true,
	},
}

export default nextConfig

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
