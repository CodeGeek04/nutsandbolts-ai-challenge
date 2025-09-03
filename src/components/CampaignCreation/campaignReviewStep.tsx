"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Edit, Trash2 } from "lucide-react"
import { StepContainer } from "@/components/ui/stepContainer"

interface CampaignReviewStepProps {
  onNext: () => void
  onBack: () => void
}

export function CampaignReviewStep({ onNext, onBack }: CampaignReviewStepProps) {
  const [productName, setProductName] = useState("YETI Glacierx 55")
  const [productDescription, setProductDescription] = useState(`Experience unmatched cooling performance with the YETI Tundra 45 Cooler. Built with military-grade construction and up to 3 inches of PermaTrophy™ insulation, this premium cooler keeps ice frozen for days, not hours. The rotomolded construction creates an incredibly durable exterior that can withstand drops, falls, and whatever adventure throws at it.

Key Features:
• Keeps ice up to 4-6 days in normal conditions
• Bear-proof certified and virtually indestructible
• Holds up to 54 cans with recommended 2:1 ice-to-content ratio`)
  
  const [campaignRules, setCampaignRules] = useState([
    {
      id: 1,
      description: "This campaign is strictly for gifting; no monetary compensation will be provided. If asked about payment, inform the influencer that this opportunity is for gifting only and paid promotions are not being considered at this time."
    },
    {
      id: 2,
      description: "Only one New Yeti Cooler will be sent per influencer."
    },
    {
      id: 3,
      description: "If the influencer provides their full postal address, do not repeat the address back in your response."
    },
    {
      id: 4,
      description: "Confirm the influencer's interest before requesting their shipping details."
    }
  ])

  return (
    <StepContainer>
      {/* Header */}
      <div className="flex-shrink-0 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          2. Review Campaign Information
        </h2>
        <p className="text-gray-600 text-lg">
          We've pulled product info and campaign rules from your files. Review and edit if needed
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Product Description
              </label>
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                rows={12}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm leading-relaxed resize-none"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <label className="block text-lg font-semibold text-gray-900">
                Campaign Rules
              </label>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                <span className="mr-2">✨</span>
                Regenerate with AI
              </Button>
            </div>

            <div className="space-y-4">
              {campaignRules.map((rule, index) => (
                <Card key={rule.id} className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Edit className="w-4 h-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Trash2 className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full text-gray-600 border-gray-300"
            >
              Add Rule
            </Button>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="flex-shrink-0 flex justify-between py-2 border-t border-gray-100 mt-auto">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="px-8 py-3 rounded-lg text-base font-medium"
        >
          Back
        </Button>
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