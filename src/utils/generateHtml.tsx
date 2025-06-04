import React from 'react'
import { renderToString } from 'react-dom/server'

// We'll use an external CSS file processed at build time
export function generateHtml(Component: React.ComponentType) {
	// Render the component with Tailwind classes
	const html = renderToString(<Component />)
	
	// We now link to an external CSS file in the Layout component
	return `<!DOCTYPE html>${html}`
}
