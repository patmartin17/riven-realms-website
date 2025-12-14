import { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d0618]" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Purple background with texture - same as main site */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0618] via-[#1a0a2e] to-[#0d0618]" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, rgba(157, 78, 221, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)
          `
        }} />
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Main ornate frame container - same as main site */}
      <div className="relative min-h-screen px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-6 lg:py-3">
        <div className="relative min-h-[calc(100vh-16px)] rounded border border-[#c77dff]/20 bg-[#0d0618]/50 overflow-hidden">
          {/* Frame decorations */}
          <div className="absolute inset-0 pointer-events-none z-[50]">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#c77dff]/30 rounded-tl" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#c77dff]/30 rounded-tr" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#c77dff]/30 rounded-bl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#c77dff]/30 rounded-br" />
            
            {/* Corner diamonds */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#c77dff]/50 rotate-45" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#c77dff]/50 rotate-45" />
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#c77dff]/50 rotate-45" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#c77dff]/50 rotate-45" />
          </div>

          {/* Content */}
          <div className="relative z-10 min-h-[calc(100vh-16px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
