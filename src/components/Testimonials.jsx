import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    initials: 'RF',
    name:     'Rodrigo Ferreira',
    role:     'CEO — TechBrasil',
    stars:    5,
    text:     'A Alfa Growth transformou completamente nossa presença digital. Em 6 meses triplicamos nossos leads qualificados e o ROI foi absurdo. Não é uma agência, é um parceiro de crescimento real.',
  },
  {
    initials: 'AC',
    name:     'Amanda Costa',
    role:     'CMO — Nutri+',
    stars:    5,
    text:     'Melhor investimento que já fizemos. A equipe entende de performance como ninguém. Crescemos 840% no Instagram orgânico sem perder qualidade — conteúdo editorial que a concorrência não consegue copiar.',
  },
  {
    initials: 'FS',
    name:     'Felipe Santos',
    role:     'Fundador — UrbanStore',
    stars:    5,
    text:     'Do zero a R$1M em vendas mensais em 8 meses. A AG não vende promessa vaga — apresenta estratégia clara, executa com excelência e entrega número. Simples assim.',
  },
  {
    initials: 'ML',
    name:     'Mariana Lima',
    role:     'Diretora de Marketing — Construfort',
    stars:    5,
    text:     'Tentei outras agências antes. A diferença da Alfa Growth é que eles têm obsessão por dados e resultado. Cada decisão é embasada — sem achismo, sem "vamos testar e ver o que acontece".',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="fi fi-sr-star text-sm" style={{ color: 'var(--orange)', lineHeight: 1 }} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p className="sec-label mb-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            Depoimentos
          </motion.p>
          <motion.h2
            className="font-display leading-none"
            style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: '#e8e8e8' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
          >
            O QUE DIZEM<br />NOSSOS <span style={{ color: 'var(--orange)' }}>CLIENTES</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Featured quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: .45, ease: [.22, 1, .36, 1] }}
              className="card-glow p-10"
            >
              <Stars count={testimonials[active].stars} />
              <blockquote className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text)' }}>
                "{testimonials[active].text}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-mono text-sm font-bold"
                  style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', color: 'var(--orange)' }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#e8e8e8' }}>{testimonials[active].name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Selector list */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300"
                style={{
                  background: active === i ? 'var(--orange-dim)' : 'var(--bg3)',
                  border: `1px solid ${active === i ? 'var(--orange-border)' : 'var(--border)'}`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold flex-shrink-0"
                  style={{
                    background: active === i ? 'var(--orange)' : 'var(--bg2)',
                    color: active === i ? '#000' : 'var(--muted)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: active === i ? '#e8e8e8' : 'var(--muted)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--muted2)' }}>{t.role}</p>
                </div>
                {active === i && (
                  <i className="fi fi-rr-angle-right ml-auto" style={{ color: 'var(--orange)', fontSize: 14, lineHeight: 1 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
