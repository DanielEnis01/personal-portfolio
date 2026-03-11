import { motion } from 'motion/react'
import { useState } from 'react'

export function ImageWithFallback({ src, alt, className, style }) {
  const [error, setError] = useState(false)

  if (error || !src) {
    return (
      <div 
        className={`flex items-center justify-center bg-[#3B4252] ${className}`}
        style={style}
      >
        <span className="text-[#ECEFF4]/20">Image not available</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
