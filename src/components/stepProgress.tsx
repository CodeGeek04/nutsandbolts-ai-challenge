interface StepProgressProps {
  currentStep: number
  totalSteps: number
}

export function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
  return (
    <div className="flex flex-col items-center py-8 px-6">
      <div className="text-sm text-gray-500 mb-8 font-medium">
        {currentStep}/{totalSteps}
      </div>
      
      <div className="flex flex-col items-center gap-6">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep
          
          return (
            <div key={stepNumber} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : isCompleted
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
              {stepNumber < totalSteps && (
                <div className={`w-px h-16 mt-4 ${
                  isCompleted ? "bg-black" : "bg-gray-200"
                }`}></div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}