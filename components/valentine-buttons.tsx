'use client'

import { Button } from '@/components/ui/button'

interface ValentineButtonsProps {
  onYes: () => void
  onNo: () => void
}

export default function ValentineButtons({
  onYes,
  onNo,
}: ValentineButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        onClick={onYes}
        className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        Yes
      </Button>
      <Button
        onClick={onNo}
        variant="outline"
        disabled
        className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-200 bg-transparent"
      >
        No
      </Button>
    </div>
  )
}
