import Link from 'next/link'
import Image from 'next/image'

export const CustomLink = props => {
  const href = props.href

  if (!href) {
    return props.children
  }

  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        <>{props.children}</>
      </Link>
    )
  }

  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
      <>{props.children}</>
    </Link>
  )
}

export const RoundedImage = props => {
  return <Image width={1000} height={400} alt={props.alt} className="rounded-lg" src={props.src} />
}

export const Code = props => {
  return (
    <pre>
      <code>{props.children}</code>
    </pre>
  )
}
