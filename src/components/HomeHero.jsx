import { useEffect, useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

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
