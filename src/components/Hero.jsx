import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle network
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .4,
      vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.8 + .4,
      o: Math.random() * .5 + .15,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        // connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < 160) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(249,115,22,${.12 * (1 - d / 160)})`
            ctx.lineWidth = .5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }

        // particle
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249,115,22,${p.o})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  const container = { hidden: {}, show: { transition: { staggerChildren: .12, delayChildren: .3 } } }
  const item      = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: [.22, 1, .36, 1] } } }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg" style={{ background: 'var(--bg)' }}>

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" style={{ pointerEvents: 'none' }} />

      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-10%', left: '20%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,.07) 0%, transparent 70%)',
      }} />
      <div className="absolute pointer-events-none" style={{
        top: '10%', right: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,.04) 0%, transparent 70%)',
      }} />

      {/* AG watermark */}
      <div
        className="absolute right-0 top-1/2 select-none pointer-events-none font-display"
        style={{
          transform: 'translateY(-50%)',
          fontSize: 'clamp(180px, 22vw, 340px)',
          color: 'rgba(255,255,255,.018)',
          lineHeight: 1, letterSpacing: '-.02em',
        }}
      >
        AG
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">

          {/* Badge */}
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2 text-xs font-mono mb-8 px-4 py-2 rounded-full"
              style={{ background: 'var(--orange-dim)', border: '1px solid var(--orange-border)', color: 'var(--orange)', letterSpacing: '.14em' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--orange)' }} />
              AGÊNCIA DE GROWTH MARKETING
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="font-display leading-none mb-6" style={{ fontSize: 'clamp(56px, 10vw, 130px)', lineHeight: .9 }}>
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(232,232,232,.6)' }}>TRANSFOR</span>
            <span style={{ color: '#e8e8e8' }}>MAMOS</span>
            <br />
            <span style={{ color: '#e8e8e8' }}>CRESCIMENTO</span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, #f97316 0%, #fb923c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              EM RESULTADO
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={item} className="text-lg mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            A Alfa Growth une estratégia de dados, criatividade editorial e performance digital para escalar marcas
            que querem dominar seus mercados — e não apenas aparecer neles.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href="#cta" className="btn-orange">
              Começar agora
              <i className="fi fi-rr-arrow-right" style={{ fontSize: 14 }} />
            </a>
            <a href="#portfolio" className="btn-ghost">
              <i className="fi fi-rr-play" style={{ fontSize: 13 }} />
              Ver cases
            </a>
          </motion.div>

          {/* Metrics strip */}
          <motion.div variants={item} className="flex flex-wrap gap-8 mt-14 pt-10" style={{ borderTop: '1px solid var(--border)' }}>
            {[
              { v: '+50',   l: 'Clientes' },
              { v: '+200',  l: 'Campanhas' },
              { v: 'R$10M+',l: 'Em receita gerada' },
              { v: '98%',   l: 'Satisfação' },
            ].map((m) => (
              <div key={m.l}>
                <p className="font-display text-4xl" style={{ color: 'var(--orange)' }}>{m.v}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--muted)', letterSpacing: '.06em' }}>{m.l}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--muted2)' }}>SCROLL</span>
          <div className="w-px h-10 animate-pulse" style={{ background: 'linear-gradient(to bottom, var(--orange), transparent)' }} />
        </motion.div>
      </div>
    </section>
  )
}
