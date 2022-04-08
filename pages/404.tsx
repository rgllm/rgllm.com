import Link from 'next/link'

import Container from 'components/Container'

export default function NotFound(props) {
	return (
		<Container title="Page Not Found - Rogério Moreira">
			<div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
				<div className="bg-center bg-cover notfound">
					<h1 className="font-bold text-black bg-gray-50 mix-blend-lighten text-9xl">This page does not exist.</h1>
				</div>
			</div>
		</Container>
	)
}
