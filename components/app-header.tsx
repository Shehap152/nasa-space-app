import Link from "next/link"
import { ChevronLeft, Menu } from "lucide-react"
import { AppLogo } from "./app-logo"
import { SidebarTrigger } from "./ui/sidebar"

interface AppHeaderProps {
  showBackButton?: boolean
  backHref?: string
}

export function AppHeader({ showBackButton = false, backHref = "/" }: AppHeaderProps) {
  return (
    <header className="sticky top-4 z-50 mb-4 lg:mb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(2,6,23,0.25)] px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
        {showBackButton && (
          <Link
            href={backHref}
            className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </Link>
        )}
        <AppLogo />
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <SidebarTrigger className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors text-white" />
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-2 text-sm">
              <Link href="/publications" className="text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Publications</Link>
              <Link href="/favorites" className="text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Favorites</Link>
              <Link href="/knowledge-gaps" className="text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Knowledge Gaps</Link>
              <Link href="/data-integrations" className="text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Data Integrations</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
