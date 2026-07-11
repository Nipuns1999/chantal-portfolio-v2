import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonLinkProps =
  | {
      variant: 'primary' | 'ghost' | 'onDark' | 'onDarkGhost'
      to: string
      children: ReactNode
      className?: string
    }
  | {
      variant: 'primary' | 'ghost' | 'onDark' | 'onDarkGhost'
      href: string
      children: ReactNode
      className?: string
      external?: boolean
    }

const base =
  'inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const styles = {
  primary: 'bg-ink text-paper hover:bg-sage-deep focus-visible:outline-ink',
  ghost: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink/5 focus-visible:outline-sage',
  onDark:
    'bg-paper text-ink hover:bg-paper-deep focus-visible:outline-paper',
  onDarkGhost:
    'border border-paper/50 text-paper hover:border-paper hover:bg-paper/10 focus-visible:outline-paper',
} as const

export function ButtonLink(props: ButtonLinkProps) {
  const className = `${base} ${styles[props.variant]} ${props.className ?? ''}`

  if ('to' in props) {
    return (
      <Link to={props.to} className={className}>
        {props.children}
      </Link>
    )
  }

  return (
    <a
      href={props.href}
      className={className}
      {...(props.external
        ? { target: '_blank', rel: 'noreferrer noopener' }
        : {})}
    >
      {props.children}
    </a>
  )
}
