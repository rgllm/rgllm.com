const nextConfig = {
	async redirects() {
		return [
			{
				source: '/blog/como-autenticar-no-automovel-online-em-macos',
				destination: '/notes/como-autenticar-no-automvel-online-em-macos',
				permanent: true,
			},
		]
	},
}

export default nextConfig

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
