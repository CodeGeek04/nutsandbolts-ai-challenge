import { ReactNode } from "react"

interface StepContainerProps {
  children: ReactNode
}

export function StepContainer({ children }: StepContainerProps) {
  return (
    <div className="h-[450px] flex flex-col">
      {children}
    </div>
  )
}