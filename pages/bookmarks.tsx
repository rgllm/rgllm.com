import { FiArrowRight } from 'react-icons/fi'

import prisma from 'lib/prisma'
import Container from 'components/Container'

export default function About({ bookmarks }) {
	return (
		<Container>
			<div className="flex flex-row items-center justify-center w-full max-w-2xl pb-16 mx-auto my-0 border-gray-200">
				<ul role="list" className="w-full -my-5 divide-y divide-gray-200">
					{bookmarks?.map((bookmark) => (
						<li key={bookmark.id} className="py-4">
							<div className="flex items-center space-x-4">
								<div className="flex-shrink-0">
									<img className="w-8 h-8 rounded" src={bookmark.favicon} alt="" />
								</div>
								<div className="flex-1 min-w-0">
									<p className="text-sm font-medium text-gray-900 truncate">{bookmark.title}</p>
									<p className="text-sm text-gray-500 max-w-[500px]">{bookmark.description}</p>
								</div>
								<div>
									<a
										href={bookmark.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-2.5 py-0.5  text-sm leading-5 font-medium text-gray-700">
										View <FiArrowRight className="text-gray-700 mt-[2px] ml-[4px] max-w-[18px]" />
									</a>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Container>
	)
}

export async function getStaticProps() {
	const allBookmarks = await prisma.bookmark.findMany({
		orderBy: {
			id: 'desc',
		},
	})

	const bookmarks = allBookmarks.map((entry) => ({
		id: entry.id.toString(),
		created_at: entry.created_at.toString(),
		title: entry.title,
		description: entry.description,
		favicon: entry.favicon,
		link: entry.link,
	}))

	return {
		props: {
			bookmarks,
		},
		revalidate: 60,
	}
}
