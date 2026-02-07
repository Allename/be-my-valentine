import React from "react"
export default function ValentineContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8">
          <div className="text-6xl md:text-7xl animate-bounce">
            💕
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
