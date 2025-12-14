"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export function TavernSign() {
  const [tilt, setTilt] = useState(0)
  const [isNear, setIsNear] = useState(false)
  const signRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef(0)

  useEffect(() => {
    let animationId: number

    const animate = () => {
      if (!signRef.current) {
        animationId = requestAnimationFrame(animate)
        return
      }

      // Smoothly interpolate toward target tilt
      tiltRef.current += (tilt - tiltRef.current) * 0.06
      
      if (isNear) {
        // Apply the smooth tilt via state (triggers re-render for transform)
        setTilt((prev) => {
          const diff = Math.abs(prev - tiltRef.current)
          // Only update if there's meaningful change to avoid excessive renders
          return diff > 0.01 ? tiltRef.current : prev
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!signRef.current) return

      const rect = signRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Distance from mouse to sign center
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      // Proximity threshold (pixels) - when mouse is within this range, sign "runs away"
      const threshold = Math.max(rect.width, rect.height) * 1.5
      const maxTilt = 4 // Maximum tilt in degrees when "stuck"

      if (distance < threshold) {
        setIsNear(true)
        // Calculate how close the cursor is (0 = far, 1 = very close)
        const proximity = 1 - Math.min(distance / threshold, 1)
        
        // Sign tilts away from cursor - inverted direction
        // Closer cursor = more tilt, but clamped to maxTilt
        const normalizedX = distX / (rect.width / 2)
        const targetTilt = -normalizedX * maxTilt * proximity
        
        // Clamp to max tilt so it "gets stuck" at the limit
        tiltRef.current = Math.max(-maxTilt, Math.min(maxTilt, targetTilt))
        setTilt(tiltRef.current)
      } else {
        setIsNear(false)
        // Smoothly return to center when cursor moves away
        tiltRef.current = 0
        setTilt(0)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [isNear, tilt])

  return (
    <div
      ref={signRef}
      className={`pointer-events-none absolute -top-[30px] left-1/2 z-30 ${isNear ? "tavern-sign-interactive" : "tavern-sign-swing"}`}
      style={
        isNear
          ? {
              width: "clamp(280px, 40vw, 600px)",
              transform: `translateX(-50%) rotate(${tilt}deg)`,
              transition: "transform 0.2s ease-out",
            }
          : {
              width: "clamp(280px, 40vw, 600px)",
              transition: "transform 0.5s ease-out",
            }
      }
    >
      <Image
        src="/images/desktop/sign1.png"
        alt="HytaleHighlights Logo"
        width={1910}
        height={1004}
        priority
        className="w-full h-auto"
        style={{
          filter:
            "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) drop-shadow(0 12px 24px rgba(0,0,0,0.5)) drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
          display: "block",
        }}
      />
    </div>
  )
}

