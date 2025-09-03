"use client"

import { useState } from "react"
import { Gift, DollarSign, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CampaignStepCard } from "@/components/ui/campaignStepCard"
import { StepContainer } from "@/components/ui/stepContainer"

interface CampaignTypeStepProps {
  onNext: () => void
}

export function CampaignTypeStep({ onNext }: CampaignTypeStepProps) {
  const [selectedType, setSelectedType] = useState(0)

  const campaignTypes = [
    {
      icon: Gift,
      title: "Seeding/Gifting",
      description: "Send free products to creators in exchange for organic content.",
    },
    {
      icon: DollarSign,
      title: "Paid Promotion",
      description: "Pay creators for guaranteed content and deliverables.",
    },
    {
      icon: Megaphone,
      title: "Other",
      description: "For all other types of creator collaboration campaigns.",
    },
  ]

  return (
    <StepContainer>
      {/* Header */}
      <div className="flex-shrink-0 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          1. Choose Campaign Type
        </h2>
        <p className="text-gray-600 text-lg">Select the best one that fits your goal.</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaignTypes.map((type, index) => (
            <CampaignStepCard
              key={index}
              icon={type.icon}
              title={type.title}
              description={type.description}
              selected={selectedType === index}
              onClick={() => setSelectedType(index)}
            />
          ))}
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="flex-shrink-0 flex justify-end py-2 border-t border-gray-100 mt-auto">
        <Button 
          onClick={onNext} 
          className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg text-base font-medium"
        >
          Next
        </Button>
      </div>
    </StepContainer>
  )
}