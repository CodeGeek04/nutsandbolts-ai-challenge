"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StepContainer } from "@/components/ui/stepContainer"
import { FileSpreadsheet, ShoppingBag, Edit, Trash2 } from "lucide-react"

interface IntegrationsStepProps {
  onNext: () => void
  onBack: () => void
}

export function IntegrationsStep({ onNext, onBack }: IntegrationsStepProps) {
  const [googleSheetEnabled, setGoogleSheetEnabled] = useState(true)
  const [shopifyEnabled, setShopifyEnabled] = useState(false)
  const [sheetUrl, setSheetUrl] = useState("https://docs.google.com/spreadsheets/d/...")
  const [trackingRules, setTrackingRules] = useState([
    {
      id: 1,
      type: "Email",
      description: "verify the influencer's email from the reply is on the row; add if missing, if asked about payment, respond gifting only.",
      active: true
    },
    {
      id: 2,
      type: "Name",
      description: "confirm the influencer's name from the reply; update if blank or mismatched.",
      active: true
    },
    {
      id: 3,
      type: "Channel Name",
      description: "fill in the creator's channel name if provided in the reply.",
      active: true
    }
  ])

  const integrations = [
    {
      icon: FileSpreadsheet,
      title: "Google Sheet",
      description: "Automatically track campaign results in your Google Sheet",
      enabled: googleSheetEnabled,
      toggle: () => setGoogleSheetEnabled(!googleSheetEnabled),
      color: "green"
    },
    {
      icon: ShoppingBag,
      title: "Shopify",
      description: "Coming soon",
      enabled: shopifyEnabled,
      toggle: () => setShopifyEnabled(!shopifyEnabled),
      color: "green"
    }
  ]

  return (
    <StepContainer>
      {/* Content Area with Header and Scrollable Content */}
      <div className="flex flex-col min-h-0">
        {/* Header */}
        <div className="flex-shrink-0 mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            3. Add Integrations
          </h2>
          <p className="text-gray-600 text-lg">
            Connect your tools to save time and reduce manual work
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto min-h-0 space-y-6">
          <div className="space-y-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        integration.color === 'green' ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          integration.color === 'green' ? 'text-green-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-lg">{integration.title}</h3>
                        <p className="text-sm text-gray-600">{integration.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={integration.toggle}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          integration.enabled ? 'bg-black' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            integration.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {googleSheetEnabled && (
            <Card className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">Google Sheet</h3>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    value={sheetUrl}
                    onChange={(e) => setSheetUrl(e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded-lg text-sm"
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Tip: Set your sheet permissions to 'Anyone with the link can edit'
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900 text-lg">What to Track:</h4>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                    <span className="mr-2">✨</span>
                    Regenerate with AI
                  </Button>
                </div>

                <div className="space-y-4">
                  {trackingRules.map((rule, index) => (
                    <div key={rule.id} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="flex-shrink-0 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium">In "{rule.type}"</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{rule.description}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                          <Edit className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )}
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
          onClick={onNext} 
          className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg text-base font-medium"
        >
          Next
        </Button>
      </div>
    </StepContainer>
  )
}