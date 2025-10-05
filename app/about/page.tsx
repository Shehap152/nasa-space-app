import { AppHeader } from "@/components/app-header"
import { SpaceBackground } from "@/components/space-background"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1a1a3e] to-[#2d1b4e] relative overflow-hidden">
      <SpaceBackground />
      <div className="relative z-10 pb-8">
        <AppHeader showBackButton backHref="/" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h1 className="text-white text-2xl font-bold mb-4">About Space Hunters</h1>
            <p className="text-white/70 leading-relaxed">
              Space Hunters helps researchers and enthusiasts explore space biology publications, AI-assisted insights, and curated datasets from NASA and related sources. This project showcases a modern Next.js 14 App Router architecture with a shared UI system and integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


