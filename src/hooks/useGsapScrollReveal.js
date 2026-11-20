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
    }, scopeRef)

    return () => context.revert()
  }, [scopeRef])
}

export default useGsapScrollReveal
