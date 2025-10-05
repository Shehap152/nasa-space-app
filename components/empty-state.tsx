import { AlertCircle, Search } from "lucide-react"

interface EmptyStateProps {
  title: string
  message?: string
  icon?: "alert" | "search"
  className?: string
}

export function EmptyState({ title, message, icon = "alert", className = "" }: EmptyStateProps) {
  const Icon = icon === "search" ? Search : AlertCircle
  return (
    <div className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${className}`}>
      <div className="flex items-center gap-2 text-white/80 mb-2">
        <Icon className="w-5 h-5 text-white/60" />
        <span className="font-medium">{title}</span>
      </div>
      {message && <p className="text-white/60 text-sm">{message}</p>}
    </div>
  )
}


