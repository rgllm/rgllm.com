import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function BookmarksList({ bookmarks }) {
	return (
		<ul role="list" className="w-full -my-5 divide-y divide-gray-200">
			{bookmarks?.map((bookmark) => (
				<li key={bookmark.id} className="py-4">
					<div className="flex items-center space-x-4">
						<div className="flex-shrink-0">
							<Image width={25} height={25} className="w-8 h-8 rounded" src={bookmark.favicon} alt="" />
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
	)
}
