import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// ────────────────────────────────────────────────────────────────────────────
// INSTAGRAM GRAPH API INTEGRATION
// Para conectar o feed real, adicione ao .env:
//   VITE_IG_TOKEN=<seu_instagram_access_token>
//   VITE_IG_USER_ID=<seu_instagram_user_id>
//
// Endpoint: GET https://graph.instagram.com/v19.0/{user-id}/media
//   ?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp
//   &access_token={token}
// ────────────────────────────────────────────────────────────────────────────

const IG_TOKEN   = import.meta.env.VITE_IG_TOKEN   || ''
const IG_USER_ID = import.meta.env.VITE_IG_USER_ID || ''

async function fetchIGPosts() {
  if (!IG_TOKEN || !IG_USER_ID) return null
  try {
    const r = await fetch(
      `https://graph.instagram.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=6&access_token=${IG_TOKEN}`
    )
    const d = await r.json()
    return d.data ?? null
  } catch { return null }
}

// Mock posts matching AG dark editorial aesthetic
const MOCK_POSTS = [
  { id:'1', caption:'Você está pagando caro para ser ignorado. Veja como mudar isso. 🔥', likes:847,  comments:43, img:'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80', type:'CAROUSEL_ALBUM' },
  { id:'2', caption:'IA está matando as agências tradicionais — e isso é ótimo. 🤖',       likes:1203, comments:67, img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', type:'IMAGE' },
  { id:'3', caption:'UGC matou a agência tradicional? A verdade que ninguém conta.',       likes:956,  comments:51, img:'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80', type:'CAROUSEL_ALBUM' },
  { id:'4', caption:'Os 3 pilares do crescimento digital em 2025.',                        likes:2341, comments:89, img:'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', type:'IMAGE' },
  { id:'5', caption:'Geração saúde vs álcool — os dados que vão te surpreender.',          likes:1087, comments:55, img:'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?w=600&q=80', type:'IMAGE' },
  { id:'6', caption:'Estratégia de conteúdo que aprecia com o tempo. 📈',                  likes:763,  comments:32, img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80', type:'CAROUSEL_ALBUM' },
]

function Post({ post, index, isReal }) {
  const [hovered, setHovered] = useState(false)

  const imgSrc = isReal
    ? (post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url)
    : post.img

  const href = isReal ? post.permalink : 'https://instagram.com/alfagrowth'
  const likes    = post.likes    ?? 0
  const comments = post.comments ?? 0

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ig-post"
      initial={{ opacity: 0, scale: .92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * .07, duration: .5, ease: [.22, 1, .36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imgSrc} alt={post.caption || 'Post Instagram'} loading="lazy" />

      {/* Type badge */}
      {(post.type === 'CAROUSEL_ALBUM' || post.media_type === 'CAROUSEL_ALBUM') && (
        <div
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(6px)' }}
        >
          <i className="fi fi-rr-layers text-white" style={{ fontSize: 11, lineHeight: 1 }} />
        </div>
      )}

      {/* Hover overlay */}
      <div className="ig-overlay">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-white font-semibold text-sm">
            <i className="fi fi-sr-heart" style={{ color: '#ef4444', fontSize: 16, lineHeight: 1 }} />
            {likes > 0 ? likes.toLocaleString() : '—'}
          </span>
          <span className="flex items-center gap-2 text-white font-semibold text-sm">
            <i className="fi fi-rr-comment" style={{ fontSize: 16, lineHeight: 1 }} />
            {comments > 0 ? comments : '—'}
          </span>
        </div>
        <p className="text-xs text-center px-4 leading-snug line-clamp-2" style={{ color: 'rgba(255,255,255,.7)' }}>
          {post.caption}
        </p>
      </div>
    </motion.a>
  )
}

export default function Instagram() {
  const [posts, setPosts]   = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchIGPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  const displayPosts = posts || MOCK_POSTS
  const isReal       = !!posts

  return (
    <section id="instagram" className="py-32" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.p
              className="sec-label mb-4"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              @alfagrowth
            </motion.p>
            <motion.h2
              className="font-display leading-none"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)', color: '#e8e8e8' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .1 }}
            >
              SIGA NO<br />
              <span style={{ color: 'var(--orange)' }}>INSTAGRAM</span>
            </motion.h2>
          </div>

          <motion.a
            href="https://instagram.com/alfagrowth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <i className="fi fi-brands-instagram text-xl" style={{ lineHeight: 1 }} />
            Seguir @alfagrowth
            <i className="fi fi-rr-arrow-right text-sm" style={{ lineHeight: 1 }} />
          </motion.a>
        </div>

        {/* Feed grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl animate-pulse" style={{ background: 'var(--bg3)' }} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {displayPosts.slice(0, 6).map((post, i) => (
              <Post key={post.id} post={post} index={i} isReal={isReal} />
            ))}
          </div>
        )}

        {/* Status badge */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2 h-2 rounded-full" style={{ background: isReal ? '#22c55e' : 'var(--muted2)' }} />
          <span className="font-mono text-xs" style={{ color: 'var(--muted2)', letterSpacing: '.08em' }}>
            {isReal ? 'FEED AO VIVO — INSTAGRAM GRAPH API' : 'FEED DE DEMONSTRAÇÃO — CONFIGURE VITE_IG_TOKEN PARA FEED REAL'}
          </span>
        </div>
      </div>
    </section>
  )
}
