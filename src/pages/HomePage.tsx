import { motion, useReducedMotion } from 'framer-motion'
import { ButtonLink } from '../components/ButtonLink'
import { Reveal } from '../components/Reveal'
import { brand } from '../data/artwork'
import { useImageLoaded, useMotionReady } from '../hooks/useMotionReady'

export function HomePage() {
  const reduce = useReducedMotion()
  const ready = useMotionReady()
  const heroLoaded = useImageLoaded(brand.hero)
  const play = ready && heroLoaded && !reduce

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={
            play
              ? { opacity: 1, scale: 1 }
              : reduce && heroLoaded
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1.06 }
          }
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={brand.hero}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-wash" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/20 to-ink/30" />
        </motion.div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <motion.p
            className="font-display text-4xl text-paper md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            {brand.name}
          </motion.p>
          <motion.p
            className="mt-5 max-w-xl text-base text-paper/90 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
          >
            {brand.tagline}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
          >
            <ButtonLink variant="onDark" to="/oils">
              View oils
            </ButtonLink>
            <ButtonLink variant="onDarkGhost" to="/sketches">
              View sketches
            </ButtonLink>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="font-display text-3xl text-ink md:text-4xl">
            Portraits in oil and pencil — a studio practice built over years.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Meet the artist, wander the galleries, or reach out for a
            commission. This is the home of {brand.name}.
          </p>
        </Reveal>
        <Reveal delay={0.14} className="mt-10 flex flex-wrap gap-4">
          <ButtonLink variant="primary" to="/about">
            About {brand.artist.split(' ')[0]}
          </ButtonLink>
          <ButtonLink variant="ghost" to="/contact">
            Get in touch
          </ButtonLink>
        </Reveal>
      </section>
    </>
  )
}
