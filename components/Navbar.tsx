"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect, useCallback } from "react"
import { ClothDropdownCanvas, ClothDropdownLinks } from "./ClothDropdown"

const navButtons = [
  { label: "Home", href: "/", left: 21.22, width: 8 },
  { label: "Rankings", href: "/rankings", left: 33.33, width: 9, hasDropdown: "rankings" },
  { label: "Forums", href: "/forums", left: 44.01, width: 8 },
  { label: "Servers", href: "/servers", left: 54.69, width: 8, hasDropdown: "servers" },
  { label: "News", href: "/news", left: 65.10, width: 7 },
  { label: "About", href: "/about", left: 74.22, width: 7 },
]

const rankingsItems = [
  { label: "Overall", href: "/rankings/overall" },
  { label: "PvP", href: "/rankings/pvp" },
  { label: "Community", href: "/rankings/community" },
  { label: "Aesthetic", href: "/rankings/aesthetic" },
]

const serversItems = [
  { label: "Browse All", href: "/servers" },
  { label: "Survival", href: "/servers?category=survival" },
  { label: "Creative", href: "/servers?category=creative" },
  { label: "PvP", href: "/servers?category=pvp" },
]

export function Navbar() {
  const [rankingsOpen, setRankingsOpen] = useState(false)
  const [serversOpen, setServersOpen] = useState(false)
  const [rankingsProgress, setRankingsProgress] = useState(0)
  const [serversProgress, setServersProgress] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 180, height: 240, canvasHeight: 320 })
  
  const rankingsButtonRef = useRef<HTMLButtonElement>(null)
  const serversButtonRef = useRef<HTMLButtonElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Don't close if clicking on a dropdown link
      if (target.closest('a')) return
      
      if (rankingsOpen && rankingsButtonRef.current && !rankingsButtonRef.current.contains(target)) {
        setRankingsOpen(false)
      }
      
      if (serversOpen && serversButtonRef.current && !serversButtonRef.current.contains(target)) {
        setServersOpen(false)
      }
    }

    if (rankingsOpen || serversOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside)
      }, 100)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [rankingsOpen, serversOpen])

  const handleDropdownClick = (dropdown: string) => {
    if (dropdown === "rankings") {
      setRankingsOpen(!rankingsOpen)
      setServersOpen(false)
    } else if (dropdown === "servers") {
      setServersOpen(!serversOpen)
      setRankingsOpen(false)
    }
  }

  const handleDimensionsChange = useCallback((width: number, height: number, canvasHeight: number) => {
    setDimensions({ width, height, canvasHeight })
  }, [])

  return (
    <div className="relative w-full">
      {/* CANVAS LAYER - z-10 (BEHIND navbar) */}
      <div
        className="absolute z-10 overflow-visible pointer-events-none"
        style={{
          left: "calc(37.5% - clamp(10px, 1.5vw, 20px))",
          transform: "translateX(-50%)",
          top: "0",
        }}
      >
        <ClothDropdownCanvas 
          isOpen={rankingsOpen}
          bannerImage="/images/desktop/blue-banner.png"
          onDimensionsChange={handleDimensionsChange}
          onProgressChange={setRankingsProgress}
        />
      </div>

      <div
        className="absolute z-10 overflow-visible pointer-events-none"
        style={{
          left: "calc(58.5% - clamp(10px, 1.5vw, 20px))",
          transform: "translateX(-50%)",
          top: "0",
        }}
      >
        <ClothDropdownCanvas 
          isOpen={serversOpen}
          bannerImage="/images/desktop/green-banner.png"
          onDimensionsChange={handleDimensionsChange}
          onProgressChange={setServersProgress}
        />
      </div>

      {/* NAVBAR - z-20 */}
      <div className="floating-shadow-strong relative z-20 w-full">
        <div 
          className="relative w-full -translate-y-[33.784%]"
          style={{ paddingTop: "15.4167%" }}
        >
          <Image
            src="/images/desktop/navbar.png"
            alt="Navigation"
            width={3840}
            height={592}
            priority
            sizes="100vw"
            className="absolute left-0 top-0 w-full h-full select-none"
          />
          
          {navButtons.map((button) => {
            if (button.hasDropdown) {
              return (
                <button
                  key={button.label}
                  ref={button.hasDropdown === "rankings" ? rankingsButtonRef : serversButtonRef}
                  onClick={() => handleDropdownClick(button.hasDropdown)}
                  className="navbar-hitbox"
                  style={{
                    left: `${button.left}%`,
                    top: "20%",
                    width: `${button.width}%`,
                    height: "25%",
                  }}
                  aria-label={button.label}
                  aria-expanded={button.hasDropdown === "rankings" ? rankingsOpen : serversOpen}
                />
              )
            }
            
            return (
              <Link
                key={button.label}
                href={button.href}
                className="navbar-hitbox"
                style={{
                  left: `${button.left}%`,
                  top: "20%",
                  width: `${button.width}%`,
                  height: "25%",
                }}
                aria-label={button.label}
              />
            )
          })}
        </div>
        
        <div style={{ paddingTop: "10.2083%", pointerEvents: "none" }} />
      </div>

      {/* LINKS LAYER - z-30 (IN FRONT of navbar) */}
      <div
        className="absolute z-30 overflow-visible"
        style={{
          left: "calc(37.5% - clamp(10px, 1.5vw, 20px))",
          transform: "translateX(-50%)",
          top: "0",
          pointerEvents: rankingsOpen ? "auto" : "none",
        }}
      >
        <ClothDropdownLinks
          isOpen={rankingsOpen}
          onClose={() => setRankingsOpen(false)}
          items={rankingsItems}
          dropProgress={rankingsProgress}
          width={dimensions.width}
          height={dimensions.height}
          canvasHeight={dimensions.canvasHeight}
        />
      </div>

      <div
        className="absolute z-30 overflow-visible"
        style={{
          left: "calc(58.5% - clamp(10px, 1.5vw, 20px))",
          transform: "translateX(-50%)",
          top: "0",
          pointerEvents: serversOpen ? "auto" : "none",
        }}
      >
        <ClothDropdownLinks
          isOpen={serversOpen}
          onClose={() => setServersOpen(false)}
          items={serversItems}
          dropProgress={serversProgress}
          width={dimensions.width}
          height={dimensions.height}
          canvasHeight={dimensions.canvasHeight}
        />
      </div>
    </div>
  )
}
