import Link from 'next/link'
import cn from 'classnames'

export default function PostCard({title, slug, bgColor}) {
  return (
    (<Link
      href={`/blog/${slug}`}
      className={`transform hover:scale-[1.01] transition-all w-full rounded-lg md:w-1/3 p-1 umami--click--homepage-${slug}`}>

      <div className="relative z-10 flex flex-col justify-between h-full p-4 bg-white border-4 border-gray-600 border-solid rounded-lg">
        <div className="flex flex-col justify-between md:flex-row">
          <h4 className="w-full mb-6 text-lg font-medium tracking-tight text-gray-900 md:text-lg sm:mb-10 ">
            {title}
          </h4>
        </div>
      </div>
      <div
        className={cn('absolute w-full h-full rounded-xl -left-[5px] -top-[5px]', bgColor)}
      ></div>

    </Link>)
  );
}
