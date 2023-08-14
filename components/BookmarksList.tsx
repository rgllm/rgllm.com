import Image from 'next/image'
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'
import {truncateText} from 'lib/truncate'

export default function BookmarksList({bookmarks}) {
  return (
    <ul role="list" className="w-full -my-5 divide-y divide-gray-200">
      {bookmarks?.map(bookmark => (
        <li key={bookmark.id} className="py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              <Image
                width={25}
                height={25}
                className="w-8 h-8 rounded grayscale hover:grayscale-0"
                src={bookmark.favicon || ''}
                alt={bookmark.title}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate">{bookmark.title}</p>
              <p className="text-gray-500 max-w-[500px] text-sm">
                {truncateText(bookmark.description, 140)}
              </p>
            </div>
            <div>
              <Link
                href={bookmark.link}
                target="_blank"
                rel="noopener noreferrer"
                className="animatedArrow inline-flex items-center px-2.5 py-0.5 leading-5 font-medium text-gray-700 cursor-pointer"
              >
                View <FiArrowRight className="arrow text-gray-700 mt-[2px] ml-[4px] max-w-[18px]" />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
