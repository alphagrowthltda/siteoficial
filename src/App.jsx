import { useEffect } from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Marquee     from './components/Marquee'
import Stats       from './components/Stats'
import Services    from './components/Services'
import Process     from './components/Process'
import Portfolio   from './components/Portfolio'
import Instagram   from './components/Instagram'
import Testimonials from './components/Testimonials'
import CTA         from './components/CTA'
import Footer      from './components/Footer'

export default function App() {
  // Scroll progress bar
  useEffect(() => {
    const bar = document.createElement('div')
    bar.id = 'scrollbar'
    document.body.appendChild(bar)

    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); bar.remove() }
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* WhatsApp floating CTA */}
      <a
        href="https://wa.me/5521990597493?text=Olá! Quero saber mais sobre os serviços da Alfa Growth."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta"
        aria-label="Falar no WhatsApp"
      >
        <i className="fi fi-brands-whatsapp text-white text-2xl" style={{ lineHeight: 1 }} />
      </a>

      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <Instagram />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
