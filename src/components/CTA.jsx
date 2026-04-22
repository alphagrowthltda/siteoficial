import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden grid-bg" style={{ background: 'var(--bg2)' }}>

      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,.06) 0%, transparent 65%)',
      }} />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--orange-border), transparent)' }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <motion.p
          className="sec-label justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Pronto para crescer?
        </motion.p>

        <motion.h2
          className="font-display leading-none mb-6"
          style={{ fontSize: 'clamp(52px, 10vw, 120px)', color: '#e8e8e8' }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .1 }}
        >
          VAMOS<br />
          <span style={{ color: 'var(--orange)' }}>ESCALAR</span><br />
          SEU NEGÓCIO?
        </motion.h2>

        <motion.p
          className="text-lg mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--muted)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >
          Fale com um especialista AG hoje e descubra exatamente como vamos transformar
          sua empresa em uma máquina de crescimento previsível.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
        >
          <a
            href="https://wa.me/5521990597493?text=Olá! Vim pelo site e quero saber mais sobre os serviços da Alfa Growth."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-semibold text-sm px-8 py-4 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: '#25d366', boxShadow: '0 0 32px rgba(37,211,102,.3)' }}
          >
            <i className="fi fi-brands-whatsapp text-xl" style={{ lineHeight: 1 }} />
            Falar no WhatsApp
          </a>

          <a
            href="mailto:contato@alfagrowth.com.br"
            className="btn-ghost justify-center"
          >
            <i className="fi fi-rr-envelope" style={{ fontSize: 16 }} />
            Enviar email
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-14 pt-10"
          style={{ borderTop: '1px solid var(--border)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
        >
          {[
            { icon: 'fi-rr-shield-check', label: 'Sem fidelidade obrigatória' },
            { icon: 'fi-rr-chart-line-up', label: 'Resultados em 30 dias' },
            { icon: 'fi-rr-headset',        label: 'Suporte dedicado' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <i className={`fi ${b.icon} text-sm`} style={{ color: 'var(--orange)', lineHeight: 1 }} />
              <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
