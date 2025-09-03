import Image from "next/image"
import { Plus, Mail, BarChart3, User } from "lucide-react"

export function CampaignSidebar() {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center p-4 py-6 border-b border-gray-200">
        <Image
          src="/Cheerful_bot_icon3 1.png"
          alt="Cheerful"
          width={26}
          height={26}
          className="rounded"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center py-6 space-y-6 flex-1">
        <button className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
          <Mail className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
          <BarChart3 className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-8 h-8 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
          <User className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* User Avatar */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-center">
          <Image
            src="/Ellipse 4.png"
            alt="User Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}