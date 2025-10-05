import Link from "next/link"
import { BookOpen, Star, Lightbulb } from "lucide-react"

export function QuickActions() {
  const actions = [
    { href: "/publications", label: "Browse Publications", icon: BookOpen },
    { href: "/favorites", label: "View Favorites", icon: Star },
    { href: "/knowledge-gaps", label: "Knowledge Gaps", icon: Lightbulb },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {actions.map(({ href, label, icon: Icon }) => (
        <Link key={href} href={href} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          <span className="text-white group-hover:text-white/90 text-sm font-medium">{label}</span>
        </Link>
      ))}
    </div>
  )
}


