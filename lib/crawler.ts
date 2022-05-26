const {parser} = require('html-metadata-parser')

export async function getHtml(websiteUrl) {
  const response = await fetch(websiteUrl)
  const html = await response.text()
  return html
}

export async function getTitle(websiteUrl) {
  const metadata = await parser(websiteUrl)
  return metadata?.meta?.title || metadata?.og?.title || ''
}

export async function getDescription(websiteUrl) {
  const metadata = await parser(websiteUrl)
  return metadata?.meta?.description || metadata?.og?.description || ''
}

export function getFavicon(websiteUrl) {
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${websiteUrl}&size=180`
}
