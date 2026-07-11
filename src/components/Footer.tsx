import { Link } from 'react-router-dom'
import { brand } from '../data/artwork'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-ink/10 bg-paper-deep/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl text-ink">{brand.name}</p>
          <p className="mt-2 text-sm text-ink-soft">{brand.artist}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <Link to="/about" className="hover:text-ink">
            About
          </Link>
          <Link to="/oils" className="hover:text-ink">
            Oils
          </Link>
          <Link to="/sketches" className="hover:text-ink">
            Sketches
          </Link>
          <Link to="/contact" className="hover:text-ink">
            Contact
          </Link>
        </div>
        <p className="text-xs text-ink-soft">
          © {year} {brand.artist}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
