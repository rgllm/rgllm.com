import Link from 'next/link'
import slugify from 'slugify'

export default function BlogPost({ title, description }) {
	const slug = slugify(title, { lower: true })

	return (
		<Link href={`/blog/${slug}`}>
			<a className="w-full">
				<div className="w-full mb-8">
					<div className="flex flex-col justify-between md:flex-row">
						<h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl">{title}</h4>
					</div>
					<p className="text-gray-600">{description}</p>
				</div>
			</a>
		</Link>
	)
}
