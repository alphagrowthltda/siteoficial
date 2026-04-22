const nav = {
  Serviços: ['Social Media', 'Tráfego Pago', 'Growth Hacking', 'Automação', 'Branding', 'Analytics'],
  Empresa:  ['Sobre nós', 'Cases', 'Blog', 'Carreiras', 'Imprensa'],
  Contato:  ['contato@alfagrowth.com.br', 'WhatsApp', 'Instagram', 'LinkedIn'],
}

const socials = [
  { icon: 'fi-brands-instagram', href: 'https://instagram.com/alfagrowth',         label: 'Instagram' },
  { icon: 'fi-brands-linkedin',  href: 'https://linkedin.com/company/alfagrowth',  label: 'LinkedIn' },
  { icon: 'fi-brands-whatsapp',  href: 'https://wa.me/5521990597493',              label: 'WhatsApp' },
  { icon: 'fi-brands-youtube',   href: 'https://youtube.com/@alfagrowth',          label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-14">

          {/* Brand col */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-base text-black"
                style={{ background: 'var(--orange)' }}
              >
                AG
              </div>
              <div className="font-display text-2xl leading-none">
                <span style={{ color: 'transparent', WebkitTextStroke: '1.5px #e8e8e8' }}>ALFA</span>
                <span style={{ color: 'var(--orange)' }}>GROWTH</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--muted)' }}>
              Agência de growth marketing especializada em transformar dados em crescimento real,
              previsível e sustentável para empresas que querem dominar seus mercados.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: 'var(--bg3)',
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange-border)'; e.currentTarget.style.background = 'var(--orange-dim)'; e.currentTarget.style.color = 'var(--orange)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg3)'; e.currentTarget.style.color = 'var(--muted)' }}
                >
                  <i className={`fi ${s.icon} text-base`} style={{ lineHeight: 1 }} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(nav).map(([cat, items]) => (
            <div key={cat}>
              <h4 className="text-sm font-semibold mb-5" style={{ color: '#e8e8e8' }}>{cat}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: 'var(--muted)' }}
                      onMouseEnter={e => e.target.style.color = '#e8e8e8'}
                      onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="font-mono text-xs" style={{ color: 'var(--muted2)', letterSpacing: '.08em' }}>
            © 2025 ALFA GROWTH. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded flex items-center justify-center font-display font-black text-xs text-black"
              style={{ background: 'var(--orange)' }}
            >
              AG
            </div>
            <p className="font-mono text-xs" style={{ color: 'var(--muted2)', letterSpacing: '.08em' }}>
              AGÊNCIA DE GROWTH MARKETING
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
