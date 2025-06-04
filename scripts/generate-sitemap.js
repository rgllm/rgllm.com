const fs = require('fs')
const path = require('path')

const indexPath = path.join(__dirname, '..', 'src', 'index.ts')
const src = fs.readFileSync(indexPath, 'utf8')

const routeRegex = /['"](\/[^'\"]*)['"]:/g
const routes = []
let match
while ((match = routeRegex.exec(src))) {
  routes.push(match[1])
}

if (!routes.includes('/')) routes.push('/')

const baseUrl = 'https://rgllm.com'
const urls = routes.map(r => `  <url><loc>${baseUrl}${r}</loc></url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

const outDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir)
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
console.log('sitemap.xml generated')
