import { useEffect, useRef } from 'react'

export function TopographyBackground() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const backgroundColor = '#2E3440'
    const lineColor = 'rgba(136, 192, 208, 0.13)'
    const lineCount = 22
    const speed = 0.8
    const strokeWidth = 1

    const dpr = window.devicePixelRatio || 1
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    let animationId
    let tick = 0

    const getHeight = (x, t) => {
      const scale = 0.003
      return (
        Math.sin(x * scale * 2 + t) * 30 +
        Math.sin(x * scale * 3.7 + t * 0.7) * 20 +
        Math.sin(x * scale * 1.3 - t * 0.5) * 40 +
        Math.sin(x * scale * 5.1 + t * 1.2) * 10 +
        Math.sin(x * scale * 0.7 + t * 0.3) * 50
      )
    }

    const animate = () => {
      tick += 0.008 * speed

      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)

      ctx.strokeStyle = lineColor
      ctx.lineWidth = strokeWidth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      const spacing = height / (lineCount - 1)
      const padding = 50

      for (let i = 0; i < lineCount; i++) {
        const baseY = spacing * i
        ctx.beginPath()
        let started = false
        for (let x = -padding; x <= width + padding; x += 3) {
          const terrainHeight = getHeight(x + i * 100, tick)
          const y = baseY + terrainHeight
          if (!started) {
            ctx.moveTo(x, y)
            started = true
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: '#2E3440' }}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, #2E3440 100%)',
          opacity: 0.6,
        }}
      />
    </div>
  )
}
