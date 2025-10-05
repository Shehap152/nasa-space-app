import Link from "next/link"
import { AppHeader } from "@/components/app-header"
import { SpaceBackground } from "@/components/space-background"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#1a1a3e] to-[#2d1b4e] relative overflow-hidden">
      <SpaceBackground />
      <div className="relative z-10 pb-8">
        <AppHeader showBackButton backHref="/" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h1 className="text-white text-2xl font-bold mb-2">Page not found</h1>
            <p className="text-white/70 mb-6">The resource you are looking for does not exist or may have been moved.</p>
            <Link href="/publications"><Button className="bg-blue-500 hover:bg-blue-600">Back to Publications</Button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}


