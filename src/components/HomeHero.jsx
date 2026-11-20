import { useEffect, useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rotatingHeadlines = [
  'Expert Drilling Solutions.',
  'Professional Well Drilling.',
  'Water Solutions That Last.',
  'Groundwater Solutions That Work.',
  'Quality Drilling Services.',
  'Reliable Drilling Expertise.',
]

function HomeHero() {
  const heroRef = useRef(null)
  const rotatingHeadingRef = useRef(null)
  const firstHeadlineRef = useRef(null)
  const secondHeadlineRef = useRef(null)

  useEffect(() => {
    if (
      !heroRef.current ||
      !rotatingHeadingRef.current ||
      !firstHeadlineRef.current ||
      !secondHeadlineRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return undefined

    const context = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.querySelectorAll('[data-hero-reveal]'),
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.1, ease: 'power2.out' },
      )
      gsap.to(heroRef.current.querySelector('.dw-hero-rig'), {
        y: 36,
        rotation: 1.5,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
      gsap.to(heroRef.current.querySelectorAll('.dw-hero-glow'), {
        y: (index) => (index === 0 ? -35 : 28),
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.4 },
      })
      const headlineLayers = [firstHeadlineRef.current, secondHeadlineRef.current]
      const timeline = gsap.timeline({ repeat: -1 })

      rotatingHeadlines.forEach((_, index) => {
        const visibleHeadline = headlineLayers[index % headlineLayers.length]
        const hiddenHeadline = headlineLayers[(index + 1) % headlineLayers.length]
        const nextHeadline = rotatingHeadlines[(index + 1) % rotatingHeadlines.length]

        timeline
          .to({}, { duration: 1.5 })
          .call(() => {
            hiddenHeadline.textContent = nextHeadline
            rotatingHeadingRef.current.setAttribute('aria-label', nextHeadline)
            gsap.set(hiddenHeadline, { autoAlpha: 0, y: 10 })
          })
          .to(visibleHeadline, {
            autoAlpha: 0,
            y: -12,
            duration: 0.36,
            ease: 'power2.inOut',
          })
          .fromTo(
            hiddenHeadline,
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power3.out', immediateRender: false },
            '<0.05',
          )
      })
    }, heroRef)

    return () => context.revert()
  }, [])

  return (
    <section className="dw-hero" aria-labelledby="home-heading" ref={heroRef}>
      <div className="dw-hero-glow dw-hero-glow-left" aria-hidden="true" />
      <div className="dw-hero-glow dw-hero-glow-right" aria-hidden="true" />
      <div className="dw-hero-rig" aria-hidden="true">
        <svg viewBox="0 0 250 310" role="presentation">
          <path className="rig-ground" d="M18 278H232" />
          <path className="rig-frame" d="M62 278V96H188V278M62 96H188M78 278V122H172V278M172 122H188M78 122H62" />
          <path className="rig-frame" d="M92 278V52H158V278M92 52H158M103 52V278M147 52V278" />
          <path className="rig-cable" d="M125 52V278" />
          <circle className="rig-wheel" cx="67" cy="278" r="18" />
          <circle className="rig-wheel" cx="183" cy="278" r="18" />
          <circle className="rig-hub" cx="67" cy="278" r="6" />
          <circle className="rig-hub" cx="183" cy="278" r="6" />
          <path className="rig-frame" d="M92 52L125 18L158 52M125 18V52" />
        </svg>
      </div>
      <div className="dw-hero-content">
        <p className="dw-eyebrow dw-hero-badge" data-hero-reveal>
          <span className="dw-badge-dot" aria-hidden="true" />
          Professional well drilling &amp; groundwater solutions
        </p>
        <h1 id="home-heading" data-hero-reveal>
          <span className="dw-hero-static">Reliable Water Wells.</span>
          <span
            className="dw-hero-rotator"
            ref={rotatingHeadingRef}
            aria-label={rotatingHeadlines[0]}
            aria-live="off"
          >
            <span className="dw-hero-rotator-text" ref={firstHeadlineRef} aria-hidden="true">
              Expert Drilling Solutions.
            </span>
            <span className="dw-hero-rotator-text" ref={secondHeadlineRef} aria-hidden="true" />
          </span>
        </h1>
        <p className="dw-hero-description" data-hero-reveal>
          Davidson Well Drilling provides professional well drilling,
          hydrofracturing, and geothermal ground loop solutions. We deliver
          dependable drilling services with a focus on quality workmanship,
          reliable results, and customer satisfaction.
        </p>
        <div className="dw-hero-actions" data-hero-reveal>
          <Link className="dw-hero-cta" to="/services">
            Explore our services <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="dw-hero-note" data-hero-reveal>
          <span className="dw-note-line" aria-hidden="true" />
          Family-owned and serving our region since 1973
        </div>
      </div>
    </section>
  )
}

export default HomeHero
