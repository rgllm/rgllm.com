import { FaFileMedicalAlt } from 'react-icons/fa'
import { GiPortugal } from 'react-icons/gi'
import { SiServerless } from 'react-icons/si'

export const projects = [
	{
		icon: <GiPortugal className="text-gray-900 w-[32px] h-[32px]" />,
		name: 'Awesome Portugal Data',
		description: 'Curated list of Portuguese datasets and open APIs.',
		href: 'https://github.com/rgllm/awesome-portugal-data/',
	},
	{
		icon: <SiServerless className="text-gray-900 w-[32px] h-[32px]" />,
		name: 'Serverless Portuguese Utils',
		description: 'A set of useful utils to validate Portuguese data using Cloudflare Workers.',
		href: 'https://github.com/rgllm/serverless-portuguese-utils/',
	},
	{
		icon: <FaFileMedicalAlt className="text-gray-900 w-[32px] h-[32px]" />,
		name: 'XNATUM',
		description: 'Python client to interact with XNAT',
		href: 'https://pypi.org/project/xnatum/',
	},
]
