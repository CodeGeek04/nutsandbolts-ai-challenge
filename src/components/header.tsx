export function Header() {
  return (
    <header className="flex items-center px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3 w-5">
        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
        </div>
        <h1 className="text-lg font-medium text-gray-900">Untitled Campaign</h1>
      </div>
    </header>
  )
}