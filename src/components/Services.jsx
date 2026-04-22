import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    icon: 'fi-rr-smartphone',
    tag: 'Conteúdo',
    title: 'Social Media',
    desc: 'Conteúdo editorial dark premium que posiciona sua marca como autoridade — não como mais uma conta no feed.',
  },
  {
    icon: 'fi-rr-target',
    tag: 'Performance',
    title: 'Tráfego Pago',
    desc: 'Campanhas de alta performance no Meta Ads e Google com foco em conversão real e ROAS escalável.',
  },
  {
    icon: 'fi-rr-chart-line-up',
    tag: 'Estratégia',
    title: 'Growth Hacking',
    desc: 'Experimentos data-driven para encontrar os vetores de crescimento que nenhum concorrente está explorando.',
  },
  {
    icon: 'fi-rr-bolt',
    tag: 'Tech',
    title: 'Automação',
    desc: 'Funis automatizados, CRMs integrados e fluxos de email que trabalham 24/7 convertendo leads.',
  },
  {
    icon: 'fi-rr-diamond',
    tag: 'Marca',
    title: 'Branding',
    desc: 'Identidade visual e posicionamento estratégico que criam reconhecimento imediato e premium perception.',
  },
  {
    icon: 'fi-rr-chart-histogram',
    tag: 'Dados',
    title: 'Analytics',
    desc: 'Dashboards em tempo real com as métricas que importam. Decisões baseadas em dados, não em achismos.',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .05 })

  return (
    <section id="services" className="py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="sec-label mb-4"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            O que fazemos
          </motion.p>
          <motion.h2
            className="font-display leading-none"
            style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: '#e8e8e8' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .1 }}
          >
            SERVIÇOS QUE<br />
            <span style={{ color: 'var(--orange)' }}>ESCALAM</span> MARCAS
          </motion.h2>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * .07, duration: .6, ease: [.22, 1, .36, 1] }}
              className="card-glow p-8 group"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)' }}
              >
                <i className={`fi ${svc.icon} text-xl`} style={{ color: 'var(--orange)', lineHeight: 1 }} />
              </div>

              <span className="font-mono text-xs tracking-widest mb-2 block" style={{ color: 'var(--muted2)', letterSpacing: '.12em' }}>
                {svc.tag.toUpperCase()}
              </span>
              <h3 className="font-display text-2xl mb-3" style={{ color: '#e8e8e8' }}>{svc.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{svc.desc}</p>

              {/* Hover arrow */}
              <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-semibold" style={{ color: 'var(--orange)' }}>Saiba mais</span>
                <i className="fi fi-rr-arrow-right text-xs" style={{ color: 'var(--orange)' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
