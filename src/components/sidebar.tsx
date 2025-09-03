import { Plus, Mail, DollarSign, Percent, User } from "lucide-react"

export function Sidebar() {
  const sidebarItems = [
    { icon: Plus, active: false },
    { icon: Mail, active: false },
    { icon: DollarSign, active: false },
    { icon: Percent, active: false },
    { icon: User, active: true },
  ]

  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-4">
      {sidebarItems.map((item, index) => {
        const Icon = item.icon
        return (
          <button
            key={index}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
              item.active 
                ? "bg-gray-100 text-gray-900" 
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Icon className="w-5 h-5" />
          </button>
        )
      })}
    </aside>
  )
}