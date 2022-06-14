export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text
  }
  const slicedText = text.slice(0, maxLength)
  return slicedText.endsWith(' ') ? slicedText + '...' : slicedText.slice(0, -1) + '...'
}
