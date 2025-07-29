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
				<div className="flex items-center justify-between hover:opacity-80 p-2 -m-2 rounded transition-opacity duration-300">
					<span className="text-sm">email</span>
					<button
						onClick={handleCopyEmail}
						className="font-mono text-sm hover:opacity-50 transition-opacity duration-200 flex items-center gap-2 truncate"
					>
						<span className="truncate">r@rgllm.com</span>
						{copiedEmail ? (
							<CopyCheck className="w-3 h-3 text-green-500 flex-shrink-0" />
						) : (
							<Copy className="w-3 h-3 flex-shrink-0" />
						)}
					</button>
				</div>
				<div className="flex items-center justify-between hover:opacity-80 p-2 -m-2 rounded transition-opacity duration-300">
					<span className="text-sm">github</span>
					<Link
						href="https://github.com/rgllm"
						className="font-mono text-sm hover:opacity-40 transition-opacity duration-300 flex items-center gap-1 cursor-pointer"
					>
						@rgllm <ArrowUpRight className="w-3 h-3" />
					</Link>
				</div>
				<div className="flex items-center justify-between hover:opacity-80 p-2 -m-2 rounded transition-opacity duration-300">
					<span className="text-sm">twitter</span>
					<Link
						href="https://x.com/rgllm"
						className="font-mono text-sm hover:opacity-40 transition-opacity duration-300 flex items-center gap-1 cursor-pointer"
					>
						@rgllm <ArrowUpRight className="w-3 h-3" />
					</Link>
				</div>
			</div>
		</section>
	)
}
