import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useGsapScrollReveal(scopeRef) {
  useEffect(() => {
    if (!scopeRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })
      gsap.utils.toArray('[data-image-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: 'inset(14% 8% 14% 8%)', scale: 1.08 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 82%', once: true },
          },
        )
      })
      gsap.utils.toArray('[data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: element.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1 },
        })
      })
      gsap.utils.toArray('[data-geo-flow]').forEach((element) => {
        gsap.fromTo(
          element.querySelectorAll('.geo-flow-line'),
          { strokeDashoffset: 44 },
          {
            strokeDashoffset: 0,
            stagger: 0.18,
            duration: 2,
            ease: 'power1.inOut',
            repeat: -1,
            scrollTrigger: { trigger: element, start: 'top 86%', end: 'bottom 20%', toggleActions: 'play pause resume pause' },
          },
        )
        gsap.fromTo(
          element.querySelectorAll('[data-geo-depth]'),
          { autoAlpha: 0.35, scale: 0.96, transformOrigin: 'center' },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.22,
            scrollTrigger: { trigger: element, start: 'top 72%', once: true },
          },
        )
      })
    }, scopeRef)

    return () => context.revert()
  }, [scopeRef])
}

export default useGsapScrollReveal
