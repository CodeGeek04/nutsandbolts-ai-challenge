import { ReactNode } from "react"

interface StepContainerProps {
  children: ReactNode
}

export function StepContainer({ children }: StepContainerProps) {
  return (
    <div className="h-full flex flex-col justify-between">
      {children}
    </div>
  )
}