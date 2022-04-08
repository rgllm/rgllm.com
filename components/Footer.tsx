import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
	return (
		<div className="flex flex-col items-center mb-4 bg-gray-50 ">
			<div className="flex flex-row">
				<a href="https://twitter.com/rgllm" className="mr-4" target="_blank" rel="noopener noreferrer">
					<FiTwitter />
				</a>
				<a href="https://github.com/rgllm" className="mr-4" target="_blank" rel="noopener noreferrer">
					<FiGithub />
				</a>
				<a href="https://linkedin.com/in/rgllm" className="mr-4" target="_blank" rel="noopener noreferrer">
					<FiLinkedin />
				</a>
				<a href="mailto:r@rgllm.com">
					<HiOutlineMail />
				</a>
			</div>
		</div>
	)
}
