import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    n: '01',
    icon: 'fi-rr-search',
    title: 'Diagnóstico',
    desc: 'Mapeamos seu negócio, mercado e concorrência para identificar as maiores alavancas de crescimento disponíveis.',
  },
  {
    n: '02',
    icon: 'fi-rr-settings',
    title: 'Estratégia',
    desc: 'Construímos um plano personalizado com metas claras, canais priorizados e KPIs mensuráveis semana a semana.',
  },
  {
    n: '03',
    icon: 'fi-rr-rocket',
    title: 'Execução e Escala',
    desc: 'Executamos com precisão cirúrgica, medimos tudo e iteramos continuamente para maximizar ROI.',
  },
]

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .1 })

  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden"
      style={{ background: 'var(--bg2)' }}
    >
      {/* Top/bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--orange-border), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--orange-border), transparent)' }} />

      {/* BG grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p className="sec-label mb-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              Como trabalhamos
            </motion.p>
            <motion.h2
              className="font-display leading-none"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: '#e8e8e8' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .1 }}
            >
              NOSSO<br /><span style={{ color: 'var(--orange)' }}>PROCESSO</span>
            </motion.h2>
          </div>
          <motion.p
            className="max-w-xs text-sm leading-relaxed"
            style={{ color: 'var(--muted)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
          >
            Cada cliente recebe um processo dedicado — sem templates genéricos, sem fórmulas copiadas.
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px"
            style={{ background: 'linear-gradient(90deg, var(--orange-border), var(--orange-border) 50%, var(--orange-border))' }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * .15, duration: .65, ease: [.22, 1, .36, 1] }}
            >
              {/* Icon circle */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="relative w-12 h-12 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--orange-border)',
                    boxShadow: '0 0 20px rgba(249,115,22,.15)',
                  }}
                >
                  <i className={`fi ${s.icon} text-xl`} style={{ color: 'var(--orange)', lineHeight: 1 }} />
                </div>
                <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--muted2)' }}>{s.n}</span>
              </div>

              <h3 className="font-display text-3xl mb-4" style={{ color: '#e8e8e8' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
