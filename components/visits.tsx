'use client'

import useSWR from 'swr'

import { fetcher } from '@/lib/utils'
import { PageView } from '@/types/PageView'

export default function Visits() {
	const { data } = useSWR<PageView>('/api/pageview', fetcher, {
		refreshInterval: 10000,
	})

	if (!data) return <span>0</span>

	return <span>{data.total}</span>
}
