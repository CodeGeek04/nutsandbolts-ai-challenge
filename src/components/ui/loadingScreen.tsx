"use client"

import { useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  title: string
  subtitle?: string
  duration?: number
  onComplete?: () => void
}

export function LoadingScreen({ title, subtitle, duration = 3000, onComplete }: LoadingScreenProps) {
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(onComplete, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onComplete])

  return (
    <div className="flex flex-col items-center justify-center h-[450px] px-8">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Image
              src="/Cheerful_bot_icon3 1.png"
              alt="Cheerful Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
      </div>
      
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}
      
      <div className="flex space-x-2 mb-4">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  )
}