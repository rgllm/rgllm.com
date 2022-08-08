export default function Card({header, metric}) {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-center text-gray-900">{header}</div>
      <p className="mt-2 text-3xl font-bold text-black spacing-sm">{metric}</p>
    </div>
  )
}
