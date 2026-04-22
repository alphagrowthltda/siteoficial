import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Início',     href: '#hero' },
  { label: 'Serviços',  href: '#services' },
  { label: 'Processo',  href: '#process' },
  { label: 'Cases',     href: '#portfolio' },
  { label: 'Instagram', href: '#instagram' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .6, ease: [.22, 1, .36, 1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 8000,
        padding: '16px 0',
        background: scrolled ? 'rgba(8,8,8,.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.06)' : '1px solid transparent',
        transition: 'background .4s, border .4s',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-black font-display font-black text-sm"
            style={{ background: 'var(--orange)' }}
          >
            AG
          </div>
          <div className="font-display text-xl leading-none">
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px #e8e8e8' }}>ALFA</span>
            <span style={{ color: 'var(--orange)' }}>GROWTH</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: 'var(--muted)', letterSpacing: '.04em' }}
                onMouseEnter={e => e.target.style.color = '#e8e8e8'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a href="#cta" className="btn-orange hidden md:inline-flex text-sm py-2.5 px-5">
            Falar com AG
            <i className="fi fi-rr-arrow-right" style={{ fontSize: 13 }} />
          </a>
          <button
            className="md:hidden text-white p-2 rounded-lg"
            style={{ background: 'var(--bg3)' }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <i className={`fi ${open ? 'fi-rr-cross' : 'fi-rr-menu-burger'}`} style={{ fontSize: 18 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(8,8,8,.98)', borderTop: '1px solid var(--border)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b font-semibold"
                  style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}
                >
                  {l.label}
                </a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="btn-orange mt-2 justify-center">
                Falar com AG
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
