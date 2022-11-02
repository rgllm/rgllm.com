import Link from 'next/link'
import slugify from 'slugify'

export default function BlogPost({title, description}) {
  const slug = slugify(title, {lower: true})

  return (
    <Link href={`/blog/${slug}`} className={`w-full umami--click--blog-${slug}`}>
      <div className="w-full mb-8">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-lg">{title}</h2>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}
