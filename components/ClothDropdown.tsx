"use client"

import { useEffect, useRef, useCallback, useState } from "react"

interface Point {
  x: number
  y: number
  oldX: number
  oldY: number
  pinned: boolean
  u: number
  v: number
}

interface Stick {
  p0: Point
  p1: Point
  length: number
}

interface DropdownItem {
  label: string
  href: string
}

const defaultRankingsItems: DropdownItem[] = [
  { label: "Top Servers", href: "/rankings/top" },
  { label: "New Servers", href: "/rankings/new" },
  { label: "Rising", href: "/rankings/rising" },
  { label: "Categories", href: "/rankings/categories" },
]

// Canvas component - renders BEHIND navbar
export function ClothDropdownCanvas({
  isOpen,
  bannerImage = "/images/desktop/blue-banner.png",
  onDimensionsChange,
  onProgressChange,
}: {
  isOpen: boolean
  bannerImage?: string
  onDimensionsChange?: (width: number, height: number, canvasHeight: number) => void
  onProgressChange?: (progress: number) => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const pointsRef = useRef<Point[]>([])
  const sticksRef = useRef<Stick[]>([])
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 180, height: 240 })
  const dropProgressRef = useRef(0)
  const isOpenRef = useRef(isOpen)
  const settleTimeRef = useRef(0)
  const retractTimeRef = useRef(0)

  useEffect(() => {
    const updateSize = () => {
      const vw = window.innerWidth
      const width = Math.min(220, Math.max(120, 120 + (vw - 640) * (100 / 1280)))
      const height = width * 1.4
      setDimensions({ width, height })
      onDimensionsChange?.(width, height, height + 80)
    }
    
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [onDimensionsChange])

  const { width, height } = dimensions
  const canvasHeight = height + 80
  
  const cols = 18
  const rows = 26

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      imageRef.current = img
      setImageLoaded(true)
    }
    img.src = bannerImage
  }, [bannerImage])

  const initCloth = useCallback(() => {
    const points: Point[] = []
    const sticks: Stick[] = []

    const spacingX = width / (cols - 1)
    const spacingY = height / (rows - 1)

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const point: Point = {
          x: x * spacingX,
          y: 0,
          oldX: x * spacingX,
          oldY: 0,
          pinned: y === 0,
          u: x / (cols - 1),
          v: y / (rows - 1),
        }
        points.push(point)
      }
    }

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const p0 = points[y * cols + x]
        const p1 = points[y * cols + x + 1]
        sticks.push({ p0, p1, length: spacingX })
      }
    }

    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols; x++) {
        const p0 = points[y * cols + x]
        const p1 = points[(y + 1) * cols + x]
        sticks.push({ p0, p1, length: spacingY })
      }
    }

    pointsRef.current = points
    sticksRef.current = sticks
  }, [width, height])

  useEffect(() => {
    if (imageLoaded) {
      initCloth()
    }
  }, [imageLoaded, initCloth, dimensions])

  useEffect(() => {
    if (!isOpen && isOpenRef.current) {
      retractTimeRef.current = 0
      settleTimeRef.current = 0
    }
    if (isOpen && !isOpenRef.current) {
      settleTimeRef.current = 0
      retractTimeRef.current = 0
    }
    isOpenRef.current = isOpen
  }, [isOpen])

  const updatePhysics = useCallback(() => {
    const points = pointsRef.current
    const sticks = sticksRef.current

    if (!isOpenRef.current) {
      dropProgressRef.current = Math.max(0, dropProgressRef.current - 0.08)
      retractTimeRef.current += 1
      
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        if (point.pinned) continue
        
        point.y += (0 - point.y) * 0.15
        point.oldY = point.y + (point.oldY - point.y) * 0.5
        
        const col = i % cols
        const targetX = col * (width / (cols - 1))
        point.x += (targetX - point.x) * 0.1
      }
    } else {
      dropProgressRef.current = Math.min(1, dropProgressRef.current + 0.10)
      settleTimeRef.current += 1
      
      const targetDrop = dropProgressRef.current
      const gravity = 0.7 * targetDrop
      const friction = 0.95

      const isSettling = settleTimeRef.current < 40
      const swingAmount = isSettling ? Math.max(0, 1 - settleTimeRef.current / 40) * 0.06 : 0

      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        if (point.pinned) continue

        const row = Math.floor(i / cols)
        const rowDelay = row / rows
        const rowProgress = Math.max(0, Math.min(1, (targetDrop - rowDelay * 0.12) / 0.88))

        if (rowProgress < 0.05) {
          point.y = 0
          point.oldY = 0
          continue
        }

        const vx = (point.x - point.oldX) * friction
        const vy = (point.y - point.oldY) * friction

        point.oldX = point.x
        point.oldY = point.y

        point.x += vx
        point.y += vy + gravity

        if (swingAmount > 0 && targetDrop > 0.5) {
          point.x += Math.sin(Date.now() * 0.003 + point.v * 2) * swingAmount * row / rows
        }
      }
    }

    for (let iter = 0; iter < 6; iter++) {
      for (const stick of sticks) {
        const dx = stick.p1.x - stick.p0.x
        const dy = stick.p1.y - stick.p0.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist === 0) continue
        
        const diff = stick.length - dist
        const percent = diff / dist / 2

        const offsetX = dx * percent
        const offsetY = dy * percent

        if (!stick.p0.pinned) {
          stick.p0.x -= offsetX
          stick.p0.y -= offsetY
        }
        if (!stick.p1.pinned) {
          stick.p1.x += offsetX
          stick.p1.y += offsetY
        }
      }
    }
  }, [width])

  const render = useCallback(() => {
    const canvas = canvasRef.current
    const img = imageRef.current
    if (!canvas || !img) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    if (canvas.width !== width || canvas.height !== canvasHeight) {
      canvas.width = width
      canvas.height = canvasHeight
    }

    const points = pointsRef.current

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (dropProgressRef.current < 0.01) return

    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const i = y * cols + x
        const p0 = points[i]
        const p1 = points[i + 1]
        const p2 = points[i + cols + 1]
        const p3 = points[i + cols]

        if (p0.y < 0.5 && p3.y < 0.5) continue

        const padding = 0.5
        const srcX = Math.max(0, p0.u * img.width - padding)
        const srcY = Math.max(0, p0.v * img.height - padding)
        const srcW = Math.min(img.width - srcX, (p1.u - p0.u) * img.width + padding * 2)
        const srcH = Math.min(img.height - srcY, (p3.v - p0.v) * img.height + padding * 2)

        ctx.save()
        
        const ex = 1.5
        ctx.beginPath()
        ctx.moveTo(p0.x - ex, p0.y - ex)
        ctx.lineTo(p1.x + ex, p1.y - ex)
        ctx.lineTo(p2.x + ex, p2.y + ex)
        ctx.lineTo(p3.x - ex, p3.y + ex)
        ctx.closePath()
        ctx.clip()

        const scaleX = (p1.x - p0.x + ex * 2) / srcW || 1
        const scaleY = (p3.y - p0.y + ex * 2) / srcH || 1
        const skewX = (p3.x - p0.x) / srcH || 0
        
        ctx.transform(scaleX, 0, skewX, scaleY, p0.x - ex - srcX * scaleX, p0.y - ex - srcY * scaleY)
        ctx.drawImage(img, 0, 0)
        
        ctx.restore()
      }
    }
  }, [width, canvasHeight])

  const frameCountRef = useRef(0)
  const animate = useCallback(() => {
    updatePhysics()
    render()
    
    frameCountRef.current++
    if (frameCountRef.current % 3 === 0) {
      onProgressChange?.(dropProgressRef.current)
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [updatePhysics, render, onProgressChange])

  useEffect(() => {
    if (imageLoaded) {
      initCloth()
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [imageLoaded, initCloth, animate])

  if (!isOpen && dropProgressRef.current < 0.01) return null

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={canvasHeight}
      style={{
        width: `${width}px`,
        height: `${canvasHeight}px`,
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))",
        pointerEvents: "none",
      }}
    />
  )
}

// Links component - renders IN FRONT of navbar
export function ClothDropdownLinks({
  isOpen,
  onClose,
  items,
  dropProgress,
  width,
  height,
  canvasHeight,
}: {
  isOpen: boolean
  onClose: () => void
  items?: { label: string; href: string }[]
  dropProgress: number
  width: number
  height: number
  canvasHeight: number
}) {
  const dropdownItems = items || defaultRankingsItems

  const getItemPosition = (index: number) => {
    const baseTop = height * 0.18 // Keep first item in same spot
    const spacing = height * 0.13 // Much tighter spacing
    const y = baseTop + (spacing * index)
    return {
      top: `${(y / canvasHeight) * 100}%`,
      height: `${(spacing / canvasHeight) * 90}%`,
    }
  }

  const getItemOpacity = (index: number) => {
    const startThreshold = 0.85 + (index * 0.03)
    const fadeRange = 0.04
    
    if (dropProgress < startThreshold) return 0
    if (dropProgress > startThreshold + fadeRange) return 1
    return (dropProgress - startThreshold) / fadeRange
  }

  if (!isOpen && dropProgress < 0.01) return null

  return (
    <div 
      style={{ 
        width: `${width}px`,
        height: `${canvasHeight}px`,
        paddingTop: `${height * 0.1}px`,
        position: "relative",
      }}
    >
      {dropdownItems.map((item, index) => {
        const pos = getItemPosition(index)
        const opacity = getItemOpacity(index)
        const scale = opacity < 1 ? 0.7 + (opacity * 0.3) : 1
        const isClickable = opacity > 0.5
        
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              if (!isClickable) {
                e.preventDefault()
                return
              }
              onClose()
            }}
            className="absolute left-[5%] w-[90%] flex items-center justify-center group"
            style={{
              top: pos.top,
              height: pos.height,
              opacity: opacity,
              transform: `translateY(${(1 - opacity) * 8}px) scale(${scale})`,
              transition: "transform 0.08s ease-out",
              pointerEvents: isClickable ? "auto" : "none",
              cursor: isClickable ? "pointer" : "default",
              textDecoration: "none",
            }}
          >
            <span
              className="relative transition-all duration-150 group-hover:text-amber-200"
              style={{
                fontFamily: "var(--font-cinzel), Georgia, serif",
                fontSize: `${Math.max(12, width * 0.08)}px`,
                fontWeight: 600,
                color: "white",
                textShadow: "0 2px 4px rgba(0,0,0,1), 0 4px 8px rgba(0,0,0,0.8), 0 1px 0 rgba(0,0,0,1)",
                letterSpacing: "0.05em",
              }}
            >
              {item.label}
              <span 
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-200 transition-all duration-200 group-hover:w-full"
                style={{
                  boxShadow: "0 0 8px rgba(251, 191, 36, 0.6)",
                }}
              />
            </span>
          </a>
        )
      })}
    </div>
  )
}
