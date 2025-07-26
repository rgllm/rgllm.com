'use client'

export default function useTime() {
	// TODO: use Temporal browser API in the future
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#browser_compatibility

	const now = new Date()
	const currentTime = now.toLocaleTimeString('en-US', {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	})

	const localOffsetMinutes = now.getTimezoneOffset()
	const GMT1_MINUTES_OFFSET = -60
	const currentHourDiffToVisitor = localOffsetMinutes - GMT1_MINUTES_OFFSET

	return { currentTime, currentHourDiffToVisitor }
}
