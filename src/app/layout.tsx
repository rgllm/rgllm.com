import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Command from '@/components/command'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Rogério Moreira',
	description: 'I build things, write code, and solve problems',
	icons: {
		icon: '/favicon.png',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Command />
				{children}
			</body>
		</html>
	)
}
