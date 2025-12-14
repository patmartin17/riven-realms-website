"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { useRef, useState, useEffect } from "react"

type OrnateFrameProps = {
  children?: ReactNode
  className?: string
  contentClassName?: string
}

export function OrnateFrame({
  children,
  className,
  contentClassName,
}: OrnateFrameProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(400)

  // Auto-resize based on content
  useEffect(() => {
    if (!contentRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Get the actual content height and add some padding
        const newHeight = entry.contentRect.height + 80
        setContentHeight(Math.max(200, newHeight))
      }
    })

    resizeObserver.observe(contentRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <section className={className ?? "w-full"}>
      <div className="ornate-frame">
        <div className="ornate-frame__cap">
          <Image
            src="/images/desktop/ornate-top.png"
            alt=""
            width={2340}
            height={132}
            priority
            unoptimized
            className="ornate-frame__img"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div
          className="ornate-frame__middle"
          style={{ minHeight: `${contentHeight}px` }}
        >
          <div 
            ref={contentRef}
            className={["ornate-frame__content", contentClassName].filter(Boolean).join(" ")}
          >
            {children}
          </div>
        </div>

        <div className="ornate-frame__cap">
          <Image
            src="/images/desktop/ornate-bottom.png"
            alt=""
            width={2340}
            height={132}
            unoptimized
            className="ornate-frame__img"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  )
}
