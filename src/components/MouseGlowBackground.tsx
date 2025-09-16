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
    <section className="fixed inset-0 w-full h-full bg-[#0b001a] overflow-hidden z-[-1]">
      {/* Glow */}
      {isMobile ? (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 300,
            height: 300,
            background: 'rgba(150, 100, 255, 0.25)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
      ) : (
        <div
          ref={glowRef}
          className="pointer-events-none fixed"
          style={{
            width: 300,
            height: 300,
            background: 'rgba(150, 100, 255, 0.25)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            left: 0,
            top: 0,
            zIndex: 1,
            transition: 'background 0.2s',
          }}
        />
      )}
    </section>
  )
}

export default MouseGlowBackground 