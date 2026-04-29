"use client"

import { useEffect } from "react"
import { AlertTriangle, RotateCcw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-background relative z-50">
      <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
        <AlertTriangle className="w-10 h-10 text-red-500" />
      </div>
      
      <h2 className="font-sora text-3xl font-bold text-white mb-4 tracking-tight text-center">
        System Anomaly Detected
      </h2>
      
      <p className="text-gray-400 max-w-md text-center mb-8 font-inter">
        A critical error occurred while attempting to render this interface. 
        The stack trace has been logged.
      </p>

      <button
        onClick={() => reset()}
        className="group relative inline-flex items-center justify-center gap-3 bg-white text-background px-8 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-500" />
        <span>Reinitialize System</span>
      </button>
    </div>
  )
}
