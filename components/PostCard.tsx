import Link from 'next/link'

export default function PostCard({title, slug}) {
  return (
    <Link href={`/blog/${slug}`}>
      <h4 className="w-full mb-4 font-medium text-gray-600 text-md">{title}</h4>
    </Link>
  )
}
