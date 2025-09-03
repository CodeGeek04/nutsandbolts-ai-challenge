"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StepContainer } from "@/components/ui/stepContainer"

interface EmailDraftStepProps {
  onLaunch: () => void
  onBack: () => void
}

export function EmailDraftStep({ onLaunch, onBack }: EmailDraftStepProps) {
  const [emailContent] = useState(`Hi {{firstName}},

I hope this email finds you well! I'm reaching out from [Company Name] because we absolutely love your content and the authentic way you connect with your audience.

We'd love to collaborate with you on our latest campaign featuring the YETI Tundra 45 Cooler. This premium cooler is perfect for outdoor adventures and we think it would be a great fit for your content style.

What we're offering:
• One complimentary YETI Tundra 45 Cooler (valued at $299)
• Creative freedom to showcase the product in your unique style
• No strict posting requirements - just authentic content when it feels right

If this sounds interesting to you, I'd love to send you more details about the cooler and discuss how we can make this collaboration work for both of us.

Looking forward to potentially working together!

Best regards,
Sarah
Marketing Team
[Company Name]`)

  return (
    <StepContainer>
      {/* Content Area with Header and Scrollable Content */}
      <div className="flex flex-col min-h-0">
        {/* Header */}
        <div className="flex-shrink-0 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            4. Email Draft
          </h2>
          <p className="text-gray-600 text-lg">
            Cheerful has drafted an email for you. Feel free to edit as you please.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <Card className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-500">From:</div>
                  <div className="text-sm text-gray-900">sarah.marketing@brightwave.co</div>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-sm text-gray-500">Subject:</div>
                <input 
                  type="text" 
                  defaultValue="Collaboration Opportunity with [Company Name] 🎯"
                  className="flex-1 text-sm text-gray-900 border-none outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <textarea
                value={emailContent}
                readOnly
                className="w-full h-96 p-6 text-sm leading-relaxed text-gray-700 border-none outline-none resize-none bg-gray-50 rounded-lg"
              />
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900 mb-1">
                    Dynamic personalization enabled
                  </p>
                  <p className="text-xs text-blue-700">
                    This email will be personalized for each recipient using their name and other available data.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Navigation Buttons at Bottom */}
      <div className="flex-shrink-0 flex justify-between py-2 border-t border-gray-100">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="px-8 py-3 rounded-lg text-base font-medium"
        >
          Back
        </Button>
        <Button 
          onClick={onLaunch}
          className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg text-base font-medium"
        >
          Launch Campaign
        </Button>
      </div>
    </StepContainer>
  )
}