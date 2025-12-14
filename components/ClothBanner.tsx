"use client"

import { useEffect, useRef, useCallback } from "react"

interface Point {
  x: number
  y: number
  oldX: number
  oldY: number
  pinned: boolean
}

interface Stick {
  p0: Point
  p1: Point
  length: number
}

export function ClothBanner({
  width = 300,
  height = 400,
  className = "",
}: {
  width?: number
  height?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, isNear: false })
  const animationRef = useRef<number>(0)
  const pointsRef = useRef<Point[]>([])
  const sticksRef = useRef<Stick[]>([])

  const initCloth = useCallback(() => {
    const points: Point[] = []
    const sticks: Stick[] = []

    const cols = 15
    const rows = 20
    const spacingX = width / (cols - 1)
    const spacingY = height / (rows - 1)

    // Create points
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const point: Point = {
          x: x * spacingX,
          y: y * spacingY,
          oldX: x * spacingX,
          oldY: y * spacingY,
          pinned: y === 0, // Pin top row
        }
        points.push(point)
      }
    }

    // Create horizontal sticks
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const p0 = points[y * cols + x]
        const p1 = points[y * cols + x + 1]
        sticks.push({ p0, p1, length: spacingX })
      }
    }

    // Create vertical sticks
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

  const updatePhysics = useCallback(() => {
    const points = pointsRef.current
    const sticks = sticksRef.current
    const mouse = mouseRef.current

    const gravity = 0.5
    const friction = 0.98
    const mouseRadius = 80
    const mouseStrength = 0.3

    // Update points with verlet integration
    for (const point of points) {
      if (point.pinned) continue

      const vx = (point.x - point.oldX) * friction
      const vy = (point.y - point.oldY) * friction

      point.oldX = point.x
      point.oldY = point.y

      point.x += vx
      point.y += vy + gravity

      // Mouse interaction
      if (mouse.isNear) {
        const dx = point.x - mouse.x
        const dy = point.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius
          point.x += (dx / dist) * force * mouseStrength * 15
          point.y += (dy / dist) * force * mouseStrength * 15
        }
      }

      // Gentle wind effect
      point.x += Math.sin(Date.now() * 0.001 + point.y * 0.02) * 0.3
    }

    // Solve constraints multiple times for stability
    for (let i = 0; i < 3; i++) {
      for (const stick of sticks) {
        const dx = stick.p1.x - stick.p0.x
        const dy = stick.p1.y - stick.p0.y
        const dist = Math.sqrt(dx * dx + dy * dy)
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
  }, [])

  const render = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const points = pointsRef.current
    const cols = 15
    const rows = 20

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw the cloth as filled quads with gradient
    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const i = y * cols + x
        const p0 = points[i]
        const p1 = points[i + 1]
        const p2 = points[i + cols + 1]
        const p3 = points[i + cols]

        // Calculate shading based on normal (simple approximation)
        const nx = (p1.x - p0.x + p2.x - p3.x) / 2
        const ny = (p3.y - p0.y + p2.y - p1.y) / 2
        const shade = Math.max(0.4, Math.min(1, 0.7 + nx * 0.01))

        // Deep red color with shading
        const r = Math.floor(140 * shade)
        const g = Math.floor(25 * shade)
        const b = Math.floor(30 * shade)

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
        ctx.strokeStyle = `rgb(${Math.floor(r * 0.8)}, ${Math.floor(g * 0.8)}, ${Math.floor(b * 0.8)})`
        ctx.lineWidth = 0.5

        ctx.beginPath()
        ctx.moveTo(p0.x, p0.y)
        ctx.lineTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.lineTo(p3.x, p3.y)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }
    }

    // Draw decorative gold border on sides
    ctx.strokeStyle = "#c9a227"
    ctx.lineWidth = 3

    // Left edge
    ctx.beginPath()
    for (let y = 0; y < rows; y++) {
      const p = points[y * cols]
      if (y === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()

    // Right edge
    ctx.beginPath()
    for (let y = 0; y < rows; y++) {
      const p = points[y * cols + cols - 1]
      if (y === 0) ctx.moveTo(p.x, p.y)
      else ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()

    // Draw gold fringe at bottom
    ctx.fillStyle = "#c9a227"
    const bottomRow = rows - 1
    for (let x = 0; x < cols; x += 2) {
      const p = points[bottomRow * cols + x]
      ctx.beginPath()
      ctx.moveTo(p.x - 4, p.y)
      ctx.lineTo(p.x, p.y + 15)
      ctx.lineTo(p.x + 4, p.y)
      ctx.closePath()
      ctx.fill()
    }

    // Draw mounting rod at top
    ctx.fillStyle = "#8B4513"
    ctx.strokeStyle = "#5D3A1A"
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.roundRect(-10, -8, width + 20, 12, 3)
    ctx.fill()
    ctx.stroke()

    // Gold caps on rod
    ctx.fillStyle = "#c9a227"
    ctx.beginPath()
    ctx.arc(-5, 0, 8, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(width + 5, 0, 8, 0, Math.PI * 2)
    ctx.fill()
  }, [width])

  const animate = useCallback(() => {
    updatePhysics()
    render()
    animationRef.current = requestAnimationFrame(animate)
  }, [updatePhysics, render])

  useEffect(() => {
    initCloth()
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [initCloth, animate])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    mouseRef.current = {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      isNear: true,
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isNear = false
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height + 20}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.5))",
      }}
    />
  )
}

