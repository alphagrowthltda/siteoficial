import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedNumber({ value, prefix = '', suffix = '' }) {
  const ref    = useRef(null)
  const startRef = useRef(false)
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true })

  const setRefs = (el) => { ref.current = el; inViewRef(el) }

  useEffect(() => {
    if (!inView || startRef.current) return
    startRef.current = true
    const el = ref.current
    if (!el) return

    const duration = 2000
    const start = performance.now()
    const numericTarget = parseInt(value.replace(/\D/g, '')) || 0

    const step = (now) => {
      const pct = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - pct, 3)
      const cur  = Math.round(ease * numericTarget)
      el.textContent = prefix + cur + suffix
      if (pct < 1) requestAnimationFrame(step)
      else el.textContent = prefix + value + suffix
    }
    requestAnimationFrame(step)
  }, [inView, value, prefix, suffix])

  return <span ref={setRefs}>{prefix}0{suffix}</span>
}

const stats = [
  { icon: 'fi-rr-users',         v: '50',    pre: '+',  suf: '',  label: 'Clientes atendidos' },
  { icon: 'fi-rr-megaphone',     v: '200',   pre: '+',  suf: '',  label: 'Campanhas executadas' },
  { icon: 'fi-rr-sack',         v: '10M',   pre: 'R$', suf: '+', label: 'Em receita gerada' },
  { icon: 'fi-rr-star',         v: '98',    pre: '',   suf: '%', label: 'Taxa de satisfação' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .15 })

  return (
    <section style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * .1, duration: .6, ease: [.22, 1, .36, 1] }}
              className="text-center group"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)' }}
              >
                <i className={`fi ${s.icon} text-xl`} style={{ color: 'var(--orange)', lineHeight: 1 }} />
              </div>
              <p className="font-display text-5xl md:text-6xl mb-1" style={{ color: '#e8e8e8' }}>
                <AnimatedNumber value={s.v} prefix={s.pre} suffix={s.suf} />
              </p>
              <p className="text-sm" style={{ color: 'var(--muted)', letterSpacing: '.04em' }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
