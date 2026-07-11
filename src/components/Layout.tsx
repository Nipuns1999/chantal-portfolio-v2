import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  const location = useLocation()
  const reduce = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="flex flex-1 flex-col"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <main className="flex-1">
            <Outlet />
          </main>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
