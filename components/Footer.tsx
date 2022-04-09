import Link from 'next/link'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
	return (
		<footer className="flex flex-col items-center mb-4 bg-gray-50">
			<div className="flex flex-row">
				<Link href="https://twitter.com/rgllm">
					<a className="mr-4" target="_blank" rel="noopener noreferrer">
						<FiTwitter />
					</a>
				</Link>
				<Link href="https://github.com/rgllm">
					<a className="mr-4" target="_blank" rel="noopener noreferrer">
						<FiGithub />
					</a>
				</Link>
				<Link href="https://linkedin.com/in/rgllm">
					<a className="mr-4" target="_blank" rel="noopener noreferrer">
						<FiLinkedin />
					</a>
				</Link>
				<Link href="mailto:r@rgllm.com">
					<a>
						<HiOutlineMail />
					</a>
				</Link>
			</div>
		</footer>
	)
}
