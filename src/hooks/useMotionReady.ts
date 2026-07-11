import { useEffect, useState } from 'react'

/** True after the first client paint — avoids a one-frame flash before Motion applies `initial`. */
export function useMotionReady() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return ready
}

export function useImageLoaded(src: string) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    const img = new Image()

    const mark = () => {
      if (!cancelled) setLoaded(true)
    }

    img.onload = mark
    img.onerror = mark
    img.src = src

    if (img.complete) mark()

    return () => {
      cancelled = true
    }
  }, [src])

  return loaded
}
