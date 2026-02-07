'use client'

import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import ValentineContainer from '@/components/valentine-container'
import ValentineQuestion from '@/components/valentine-question'
import ValentineButtons from '@/components/valentine-buttons'
import NoModal from '@/components/no-modal'
import SuccessScreen from '@/components/success-screen'

export default function Home() {
  const [showNoModal, setShowNoModal] = useState(false)
  const [isYes, setIsYes] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  // Handle window resize for confetti
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isYes) {
    return (
      <>
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          gravity={0.3}
          colors={['#ff1493', '#ff69b4', '#ffc0cb', '#ffb6c1', '#ffffff']}
        />
        <SuccessScreen />
      </>
    )
  }

  return (
    <ValentineContainer>
      <ValentineQuestion />
      <ValentineButtons
        onYes={() => setIsYes(true)}
        onNo={() => setShowNoModal(true)}
      />
      <NoModal isOpen={showNoModal} onClose={() => setShowNoModal(false)} />
    </ValentineContainer>
  )
}
