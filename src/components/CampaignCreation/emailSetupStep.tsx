"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Search } from "lucide-react"
import { StepContainer } from "@/components/ui/stepContainer"

interface EmailSetupStepProps {
  onNext: () => void
  onBack: () => void
}

export function EmailSetupStep({ onNext, onBack }: EmailSetupStepProps) {
  const [emailProvider, setEmailProvider] = useState("cheerful")
  const [selectedAccounts, setSelectedAccounts] = useState([
    "sarah.marketing@brightwave.co",
    "john.sales@mexuatech.com"
  ])
  const [searchTerm, setSearchTerm] = useState("")

  const availableAccounts = [
    "sarah.marketing@brightwave.co",
    "john.sales@mexuatech.com",
    "marketing@company.com",
    "campaigns@business.com"
  ]

  const removeAccount = (email: string) => {
    setSelectedAccounts(accounts => accounts.filter(account => account !== email))
  }

  const addAccount = (email: string) => {
    if (!selectedAccounts.includes(email)) {
      setSelectedAccounts([...selectedAccounts, email])
    }
  }

  const filteredAccounts = availableAccounts.filter(
    account => 
      account.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedAccounts.includes(account)
  )

  return (
    <StepContainer>
      {/* Header */}
      <div className="flex-shrink-0 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          4. Email Setup
        </h2>
        <p className="text-gray-600 text-lg">
          Configure your email provider, accounts, and recipients to launch your campaign
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto min-h-0">

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Email Provider</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            className={`p-6 cursor-pointer transition-all border-2 ${
              emailProvider === "cheerful" 
                ? "border-gray-400 bg-gray-50" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setEmailProvider("cheerful")}
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                {emailProvider === "cheerful" && (
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Cheerful (Recommended)</h4>
                <p className="text-sm text-gray-600">
                  Our email system with automatic optimization
                </p>
              </div>
            </div>
          </Card>
          
          <Card 
            className={`p-6 cursor-pointer transition-all border-2 ${
              emailProvider === "external" 
                ? "border-gray-400 bg-gray-50" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setEmailProvider("external")}
          >
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                {emailProvider === "external" && (
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Other external provider</h4>
                <p className="text-sm text-gray-600">
                  providers like Instantly, Mailman, etc. Cheerful will handle replies only
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Add Connect Sending Accounts</h3>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search connected emails"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {selectedAccounts.map((email, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full text-sm"
            >
              <span>{email}</span>
              <button
                onClick={() => removeAccount(email)}
                className="hover:bg-gray-200 rounded-full p-1 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {filteredAccounts.length > 0 && (
          <div className="space-y-2">
            {filteredAccounts.map((email, index) => (
              <div 
                key={index}
                onClick={() => addAccount(email)}
                className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
              >
                {email}
              </div>
            ))}
          </div>
        )}
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
          className="px-8 py-3 bg-black text-white hover:bg-gray-800 rounded-lg text-base font-medium flex items-center gap-2"
        >
          <span>✨</span>
          Generate Email
        </Button>
      </div>
    </StepContainer>
  )
}