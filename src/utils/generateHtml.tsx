import React from 'react'
import { renderToString } from 'react-dom/server'

// Render the component and return an HTML document string
// Tailwind is loaded dynamically via CDN in the Layout component
export async function generateHtml(Component: React.ComponentType) {
        const html = renderToString(<Component />)
        return `<!DOCTYPE html>${html}`
}
