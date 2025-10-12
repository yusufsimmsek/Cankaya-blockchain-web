import React, { useEffect, useRef, useState } from 'react'

const isTouchDevice = () => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

const MouseGlowBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [mouse, setMouse] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const glowRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>()
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })

  useEffect(() => {
    setIsMobile(isTouchDevice())
    if (isTouchDevice()) return

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return
    const animate = () => {
      // Smoothly interpolate position
      pos.current.x += (mouse.x - pos.current.x) * 0.15
      pos.current.y += (mouse.y - pos.current.y) * 0.15
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${pos.current.x - 150}px, ${pos.current.y - 150}px, 0)`
      }
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [mouse, isMobile])

  return (
    <section className="fixed inset-0 w-full h-full bg-black overflow-hidden z-[-1]">
    </section>
  )
}

export default MouseGlowBackground 