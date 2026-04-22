const tags = [
  'Growth Hacking', 'Meta Ads', 'Google Ads', 'SEO', 'Social Media',
  'Branding', 'UGC', 'CRO', 'Automação', 'Analytics', 'Funis', 'E-mail Marketing',
  'Reels', 'TikTok Ads', 'LinkedIn Ads', 'Copywriting', 'Data-Driven',
]

function Track({ reverse = false }) {
  const doubled = [...tags, ...tags]
  return (
    <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
      <div
        className={`marquee-track ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-mono text-xs px-5 py-2.5 rounded-full"
            style={{
              background: i % 3 === 0 ? 'var(--orange-dim)' : 'var(--bg3)',
              border: '1px solid ' + (i % 3 === 0 ? 'var(--orange-border)' : 'var(--border)'),
              color: i % 3 === 0 ? 'var(--orange)' : 'var(--muted)',
              letterSpacing: '.08em',
            }}
          >
            {i % 3 === 0 && <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--orange)' }} />}
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="py-10 flex flex-col gap-4" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <Track />
      <Track reverse />
    </div>
  )
}
