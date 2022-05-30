import Link from 'next/link'
import {FiTwitter, FiGithub, FiLinkedin} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mb-4 bg-gray-50">
      <div className="flex flex-row">
        <Link href="https://twitter.com/rgllm">
          <a className="mr-4 umami--click--footertwitter" target="_blank" rel="noopener noreferrer">
            <FiTwitter />
          </a>
        </Link>
        <Link href="https://github.com/rgllm">
          <a className="mr-4 umami--click--footergithub" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </Link>
        <Link href="https://linkedin.com/in/rgllm">
          <a
            className="mr-4 umami--click--footerlinkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>
        </Link>
        <Link href="mailto:r@rgllm.com">
          <a>
            <HiOutlineMail />
          </a>
        </Link>
      </div>
      <script
        async
        defer
        data-website-id="4d1665d2-5554-4c2d-8fa1-87f11512a9cd"
        src="https://analytics.rgllm.com/umami.js"
      ></script>
    </footer>
  )
}
