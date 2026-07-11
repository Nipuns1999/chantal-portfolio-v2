import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMotionReady } from '../hooks/useMotionReady'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()
  const ready = useMotionReady()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  if (!ready) {
    return (
      <div className={className} style={{ opacity: 0 }} aria-hidden>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px', amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
