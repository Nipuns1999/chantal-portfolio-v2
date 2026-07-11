import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ArtworkPiece } from '../data/artwork'
import { Lightbox } from './Lightbox'
import { useMotionReady } from '../hooks/useMotionReady'
import { Reveal } from './Reveal'

interface MasonryGalleryProps {
  pieces: ArtworkPiece[]
  heading: string
  intro: string
}

export function MasonryGallery({ pieces, heading, intro }: MasonryGalleryProps) {
  const [index, setIndex] = useState<number | null>(null)
  const reduce = useReducedMotion()
  const ready = useMotionReady()

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl text-ink md:text-5xl">
            {heading}
          </h1>
          <p className="mt-4 text-base text-ink-soft md:text-lg">{intro}</p>
        </div>
      </Reveal>

      <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {pieces.map((piece, i) => {
          const className =
            'mb-4 block w-full break-inside-avoid overflow-hidden bg-paper-deep/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage'

          const image = (
            <img
              src={piece.src}
              alt={piece.alt}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition duration-500 ease-out hover:scale-[1.02]"
            />
          )

          if (reduce || !ready) {
            return (
              <button
                key={piece.id}
                type="button"
                className={className}
                style={ready ? undefined : { opacity: 0 }}
                onClick={() => setIndex(i)}
              >
                {image}
              </button>
            )
          }

          return (
            <motion.button
              key={piece.id}
              type="button"
              className={className}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px', amount: 0.15 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 6) * 0.04,
              }}
            >
              {image}
            </motion.button>
          )
        })}
      </div>

      <Lightbox
        pieces={pieces}
        index={index}
        onClose={() => setIndex(null)}
        onPrev={() =>
          setIndex((current) =>
            current === null
              ? null
              : (current - 1 + pieces.length) % pieces.length,
          )
        }
        onNext={() =>
          setIndex((current) =>
            current === null ? null : (current + 1) % pieces.length,
          )
        }
      />
    </section>
  )
}
