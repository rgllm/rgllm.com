export async function getHtml(websiteUrl) {
	const response = await fetch(websiteUrl)
	const html = await response.text()
	return html
}

export async function getTitle(websiteUrl) {
	const html = await getHtml(websiteUrl)
	const title = html?.match(/<title>(.*?)<\/title>/)?.[1]

	return title ? title : 'No title'
}

export async function getDescription(websiteUrl) {
	const html = await getHtml(websiteUrl)
	const description = html?.match(/<meta[^>]*property="description"[^>]*content="([^"]+)"/)?.[1]

	return description ? description : ''
}

export function getFavicon(websiteUrl) {
	return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${websiteUrl}&size=180`
}
