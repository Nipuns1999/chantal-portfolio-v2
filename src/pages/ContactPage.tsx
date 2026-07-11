import { Reveal } from '../components/Reveal'
import { ButtonLink } from '../components/ButtonLink'
import { brand } from '../data/artwork'

const links = [
  { label: 'Instagram', href: brand.instagram },
  { label: 'LinkedIn', href: brand.linkedin },
  { label: 'Facebook', href: brand.facebook },
] as const

export function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-sage">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
          Let&apos;s talk about a portrait
        </h1>
      </Reveal>
      <Reveal delay={0.08} className="mt-6">
        <p className="text-base leading-relaxed text-ink-soft md:text-lg">
          Whether you have a commission in mind or simply want to say hello,
          email is the best place to start.
        </p>
      </Reveal>
      <Reveal delay={0.12} className="mt-10">
        <ButtonLink
          variant="primary"
          href={`mailto:${brand.email}`}
          className="min-w-[14rem]"
        >
          Email {brand.artist.split(' ')[0]}
        </ButtonLink>
        <p className="mt-4 text-sm text-ink-soft">{brand.email}</p>
      </Reveal>
      <Reveal delay={0.18} className="mt-14">
        <p className="text-sm text-ink-soft">Or find the work elsewhere</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-base text-ink underline decoration-sage/50 underline-offset-4 transition hover:decoration-sage"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
