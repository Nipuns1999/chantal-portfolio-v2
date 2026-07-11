import { NavLink, Link } from 'react-router-dom'
import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { brand } from '../data/artwork'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/oils', label: 'Oils' },
  { to: '/sketches', label: 'Sketches' },
  { to: '/contact', label: 'Contact' },
] as const

function linkClass({ isActive }: { isActive: boolean }) {
  return [
    'relative text-sm tracking-wide transition-colors duration-300',
    isActive ? 'text-ink' : 'text-ink-soft hover:text-ink',
    isActive
      ? 'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-sage'
      : '',
  ].join(' ')
}

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const reduce = useReducedMotion()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-ink md:text-2xl"
          onClick={() => setOpen(false)}
        >
          {brand.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={'end' in link ? link.end : false}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-ink/20 text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-ink transition ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-full bg-ink transition ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px w-full bg-ink transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={menuId}
            className="border-t border-ink/10 bg-paper md:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={'end' in link ? link.end : false}
                  className={({ isActive }) =>
                    `py-3 text-base ${isActive ? 'text-ink' : 'text-ink-soft'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
