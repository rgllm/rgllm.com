import Link from 'next/link'
import {FiTwitter, FiGithub, FiLinkedin} from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-16 mb-4 bg-gray-50">
      <div className="flex flex-row">
        <Link
          href="https://twitter.com/intent/follow?screen_name=rgllm"
          className="mr-4 umami--click--footer-twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </Link>
        <Link
          href="https://github.com/rgllm"
          className="mr-4 umami--click--footer-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </Link>
        <Link
          href="https://linkedin.com/in/rgllm"
          className="mr-4 umami--click--footer-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </Link>
      </div>
    </footer>
  )
}
