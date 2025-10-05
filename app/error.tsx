"use client"
import { useEffect } from "react"
import { AppHeader } from "@/components/app-header"
import { SpaceBackground } from "@/components/space-background"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1a1a3e] to-[#2d1b4e] relative overflow-hidden">
          <SpaceBackground />
          <div className="relative z-10 pb-8">
            <AppHeader showBackButton backHref="/" />
            <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-6">
              <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-2">Something went wrong</h2>
                <p className="text-white/70 mb-4">An unexpected error occurred. Try again.</p>
                <button onClick={() => reset()} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl">Retry</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}


