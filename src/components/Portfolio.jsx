import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const cases = [
  {
    cat:    'Social Media + Tráfego',
    title:  'Marca de saúde: do zero a 300K seguidores em 8 meses',
    result: '+840% de alcance orgânico',
    tags:   ['Instagram', 'Reels', 'Meta Ads'],
    img:    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    color:  'rgba(249,115,22,.18)',
  },
  {
    cat:    'E-commerce Growth',
    title:  'R$1.2M em vendas em 30 dias com funil de performance',
    result: '12× ROAS médio sustentado',
    tags:   ['Meta Ads', 'Google Ads', 'CRO'],
    img:    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    color:  'rgba(59,130,246,.18)',
  },
  {
    cat:    'Branding + B2B',
    title:  'Reposicionamento que triplicou o ticket médio em 6 meses',
    result: '+280% em receita recorrente',
    tags:   ['Branding', 'LinkedIn', 'Content'],
    img:    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    color:  'rgba(168,85,247,.18)',
  },
]

export default function Portfolio() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .05 })

  return (
    <section id="portfolio" className="py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p className="sec-label mb-4" initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              Cases de sucesso
            </motion.p>
            <motion.h2
              className="font-display leading-none"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: '#e8e8e8' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .1 }}
            >
              RESULTADOS<br /><span style={{ color: 'var(--orange)' }}>REAIS</span>
            </motion.h2>
          </div>
          <motion.a
            href="#cta"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
            style={{ color: 'var(--orange)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ gap: '12px' }}
          >
            Ver todos os cases
            <i className="fi fi-rr-arrow-right" style={{ fontSize: 13 }} />
          </motion.a>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * .1, duration: .65, ease: [.22, 1, .36, 1] }}
              className="card-glow overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.img} alt={c.title}
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ filter: 'brightness(.45) saturate(0)', transform: 'scale(1)' }}
                  onMouseEnter={e => { e.target.style.filter = 'brightness(.6) saturate(.3)'; e.target.style.transform = 'scale(1.06)' }}
                  onMouseLeave={e => { e.target.style.filter = 'brightness(.45) saturate(0)'; e.target.style.transform = 'scale(1)' }}
                />
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${c.color}, transparent)` }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--card), transparent)' }} />

                {/* Arrow */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(8px)' }}
                >
                  <i className="fi fi-rr-arrow-up-right text-white" style={{ fontSize: 12, lineHeight: 1 }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--muted2)', letterSpacing: '.1em' }}>
                  {c.cat.toUpperCase()}
                </span>
                <h3 className="font-semibold text-base mt-2 mb-4 leading-snug" style={{ color: '#e8e8e8' }}>
                  {c.title}
                </h3>

                {/* Result badge */}
                <div
                  className="px-4 py-2.5 rounded-xl mb-4"
                  style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)' }}
                >
                  <p className="text-sm font-bold" style={{ color: 'var(--orange)' }}>{c.result}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--bg3)', color: 'var(--muted)', border: '1px solid var(--border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
