"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-neutral-100">
          Something went wrong
        </h1>
        <p className="text-neutral-400 max-w-md mx-auto">
          We encountered an unexpected error. Please try again, or contact support if the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => reset()}
            variant="default"
          >
            Try again
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            variant="outline"
          >
            Go home
          </Button>
        </div>
      </div>
    </main>
  )
}

