"use client"

import { useState } from "react"
import { CampaignTypeStep } from "./campaignTypeStep"
import { CampaignInformationStep } from "./campaignInformationStep"
import { CampaignReviewStep } from "./campaignReviewStep"
import { IntegrationsStep } from "./integrationsStep"
import { EmailSetupStep } from "./emailSetupStep"
import { EmailDraftStep } from "./emailDraftStep"
import { CampaignSuccessScreen } from "./campaignSuccessScreen"
import { LoadingScreen } from "../ui/loadingScreen"
import { StepProgress } from "../stepProgress"

export function CampaignCreation() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingTitle, setLoadingTitle] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const totalSteps = 4

  const handleNext = () => {
    if (currentStep <= totalSteps) {
      // Show loading for certain steps
      if (currentStep === 2) {
        setIsLoading(true)
        setLoadingTitle("Gathering your campaign information")
        setTimeout(() => {
          setIsLoading(false)
          setCurrentStep(currentStep + 1)
        }, 2000)
      } else if (currentStep === 4) {
        setIsLoading(true)
        setLoadingTitle("Generating your Email")
        setTimeout(() => {
          setIsLoading(false)
          setCurrentStep(5) // Go to email draft step
        }, 3000)
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleLaunch = () => {
    setIsLoading(true)
    setLoadingTitle("Launching your campaign...")
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 2000)
  }

  const handleCreateNew = () => {
    setShowSuccess(false)
    setCurrentStep(1)
  }

  const renderStep = () => {
    if (isLoading) {
      return <LoadingScreen title={loadingTitle} />
    }

    if (showSuccess) {
      return <CampaignSuccessScreen onCreateNew={handleCreateNew} />
    }

    switch (currentStep) {
      case 1:
        return <CampaignTypeStep onNext={handleNext} />
      case 2:
        return <CampaignInformationStep onNext={handleNext} onBack={handleBack} />
      case 3:
        return <CampaignReviewStep onNext={handleNext} onBack={handleBack} />
      case 4:
        return <IntegrationsStep onNext={handleNext} onBack={handleBack} />
      case 5:
        return <EmailDraftStep onLaunch={handleLaunch} onBack={handleBack} />
      default:
        return null
    }
  }

  // Don't show step progress on success screen
  const showStepProgress = !showSuccess

  return (
    <div className="flex h-full">
      {/* Step Progress Column */}
      {showStepProgress && (
        <div className="w-32 border-r border-gray-200 bg-white">
          <StepProgress currentStep={Math.min(currentStep, totalSteps)} totalSteps={totalSteps} />
        </div>
      )}
      
      {/* Main Step Content */}
      <div className="flex-1 p-8">
        <div className="h-full max-w-6xl mx-auto">
          <div className="h-[550px] bg-white rounded-2xl border border-purple-200 shadow-lg overflow-hidden">
            <div className="h-full p-8 overflow-y-auto">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}