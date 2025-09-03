"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { StepContainer } from "@/components/ui/stepContainer"
import { CheckCircle } from "lucide-react"

interface CampaignSuccessScreenProps {
  onCreateNew: () => void
}

export function CampaignSuccessScreen({ onCreateNew }: CampaignSuccessScreenProps) {
  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      onCreateNew()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onCreateNew])

  return (
    <StepContainer>
      <div className="flex flex-col items-center justify-center flex-1 px-8 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Campaign Launched Successfully!
      </h2>
      
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Your campaign is now live and emails are being sent to your selected recipients.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-sm w-full">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600">Campaign Status:</span>
          <span className="text-sm font-semibold text-green-600">Active</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600">Recipients:</span>
          <span className="text-sm font-semibold text-gray-900">150</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Sent:</span>
          <span className="text-sm font-semibold text-gray-900">0 / 150</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button 
          onClick={onCreateNew}
          className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg text-base font-medium"
        >
          Create New Campaign
        </Button>
        <Button 
          variant="outline"
          className="px-8 py-3 rounded-lg text-base font-medium"
        >
          View Dashboard
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Redirecting to new campaign in 5 seconds...
      </p>
      </div>
    </StepContainer>
  )
}