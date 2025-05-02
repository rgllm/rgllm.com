import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export async function processCss(css: string): Promise<string> {
	try {
		const result = await postcss([
			tailwindcss(),
			autoprefixer(),
		]).process(css, {
			from: undefined,
		})

		return result.css
	} catch (error) {
		console.error('Error processing CSS:', error)
		return '/* Error processing Tailwind CSS */'
	}
}
