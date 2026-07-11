import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { ArtworkPiece } from '../data/artwork'

interface LightboxProps {
  pieces: ArtworkPiece[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({
  pieces,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const reduce = useReducedMotion()
  const piece = index === null ? null : pieces[index]

  useEffect(() => {
    if (index === null) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onPrev, onNext])

  return (
    <AnimatePresence>
      {piece ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={piece.title}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 border border-paper/40 px-3 py-2 text-sm text-paper hover:bg-paper/10"
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="button"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-paper/30 px-3 py-4 text-paper hover:bg-paper/10 md:left-8"
            aria-label="Previous artwork"
            onClick={(event) => {
              event.stopPropagation()
              onPrev()
            }}
          >
            ←
          </button>

          <button
            type="button"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-paper/30 px-3 py-4 text-paper hover:bg-paper/10 md:right-8"
            aria-label="Next artwork"
            onClick={(event) => {
              event.stopPropagation()
              onNext()
            }}
          >
            →
          </button>

          <motion.figure
            className="relative max-h-full max-w-5xl"
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={piece.src}
              alt={piece.alt}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-xl text-paper">
              {piece.title}
            </figcaption>
          </motion.figure>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
