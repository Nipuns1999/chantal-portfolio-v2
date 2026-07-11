import { Reveal } from '../components/Reveal'
import { ButtonLink } from '../components/ButtonLink'
import { brand } from '../data/artwork'

export function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16 md:px-8 md:py-24">
      <Reveal>
        <div className="mx-auto aspect-square max-w-md overflow-hidden rounded-full">
          <img
            src={brand.portrait}
            alt={brand.artist}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </Reveal>

      <div>
        <Reveal>
          <p className="text-sm uppercase tracking-[0.2em] text-sage">About</p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            {brand.artist}
          </h1>
        </Reveal>
        <Reveal delay={0.08} className="mt-8">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            {brand.about}
          </p>
        </Reveal>
        <Reveal delay={0.14} className="mt-10 flex flex-wrap gap-4">
          <ButtonLink variant="primary" to="/oils">
            Oil paintings
          </ButtonLink>
          <ButtonLink variant="ghost" to="/sketches">
            Pencil sketches
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
