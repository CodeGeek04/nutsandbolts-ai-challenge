import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface CampaignStepCardProps {
  icon: LucideIcon
  title: string
  description: string
  selected?: boolean
  onClick?: () => void
  className?: string
}

export function CampaignStepCard({ 
  icon: Icon, 
  title, 
  description, 
  selected = false, 
  onClick,
  className
}: CampaignStepCardProps) {
  return (
    <Card
      className={cn(
        "p-8 cursor-pointer transition-all hover:shadow-md border-2",
        selected
          ? "border-gray-400 bg-gray-50"
          : "border-gray-200 hover:border-gray-300",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-gray-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-3 text-lg">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  )
}