import React from 'react'
import Layout from './Layout'

function NotFoundPage() {
        return (
                <Layout
                        title="Page Not Found"
                        description="The page you are looking for does not exist."
                        canonicalUrl="https://rgllm.com/404"
                >
                        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
                        <p>Sorry, the page you were looking for doesn’t exist.</p>
                </Layout>
        )
}

export default NotFoundPage
