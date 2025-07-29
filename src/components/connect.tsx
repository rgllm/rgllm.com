'use client'

import Link from 'next/link'
import { ArrowUpRight, Copy, CopyCheck } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Connect() {
	const [copiedEmail, setCopiedEmail] = useState<boolean>(false)

	const handleCopyEmail = async () => {
		await navigator.clipboard.writeText('r@rgllm.com')
		setCopiedEmail(true)
	}

	useEffect(() => {
		setTimeout(() => {
			setCopiedEmail(false)
		}, 2000)
	}, [copiedEmail])

	return (
		<section>
			<h2 className="text-base font-medium mb-3 text-black dark:text-white">
				/connect
			</h2>
			<div className="space-y-1">
				<div className="flex items-center justify-between p-2 -m-2 rounded">
					<span className="text-sm dark:text-gray-300">email</span>
					<button
						onClick={handleCopyEmail}
						className="font-mono cursor-pointer text-sm flex items-center gap-2 truncate"
					>
						<span className="truncate dark:text-gray-300">r@rgllm.com</span>
						{copiedEmail ? (
							<CopyCheck className="w-3 h-3 text-green-500 flex-shrink-0" />
						) : (
							<Copy className="w-3 h-3 flex-shrink-0" />
						)}
					</button>
				</div>
				<div className="flex items-center justify-between p-2 -m-2 rounded transition-opacity">
					<span className="text-sm dark:text-gray-300">github</span>
					<Link
						href="https://github.com/rgllm"
						className="font-mono text-sm hover:opacity-40 transition-opacity flex items-center gap-1 cursor-pointer dark:text-gray-300"
					>
						@rgllm <ArrowUpRight className="w-3 h-3" />
					</Link>
				</div>
				<div className="flex items-center justify-between p-2 -m-2 rounded transition-opacity">
					<span className="text-sm dark:text-gray-300">linkedIn</span>
					<Link
						href="https://linkedin.com/in/rgllm"
						className="font-mono text-sm hover:opacity-40 transition-opacity flex items-center gap-1 cursor-pointer dark:text-gray-300"
					>
						/in/rgllm <ArrowUpRight className="w-3 h-3" />
					</Link>
				</div>
				<div className="flex items-center justify-between p-2 -m-2 rounded transition-opacity">
					<span className="text-sm dark:text-gray-300">x</span>
					<Link
						href="https://x.com/rgllm"
						className="font-mono text-sm hover:opacity-40 transition-opacity flex items-center gap-1 cursor-pointer dark:text-gray-300"
					>
						@rgllm <ArrowUpRight className="w-3 h-3" />
					</Link>
				</div>
			</div>
		</section>
	)
}
