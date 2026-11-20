import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

function InteractiveServiceExplorer({ services, idPrefix, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const rootRef = useRef(null)
  const tabRefs = useRef([])
  const indicatorRef = useRef(null)
  const panelContentRef = useRef(null)
  const activeService = services[activeIndex]
  const panelId = `${idPrefix}-panel`

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const activeTab = tabRefs.current[activeIndex]
    if (!activeTab || !indicatorRef.current || !panelContentRef.current) return undefined

    const transition = gsap.timeline()
      .to(indicatorRef.current, {
        y: activeTab.offsetTop,
        height: activeTab.offsetHeight,
        duration: 0.38,
        ease: 'power3.out',
      })
      .fromTo(
        panelContentRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.38, ease: 'power2.out' },
        '<',
      )

    return () => transition.kill()
  }, [activeIndex])

  function handleTabKeyDown(event, index) {
    const forward = event.key === 'ArrowDown' || event.key === 'ArrowRight'
    const backward = event.key === 'ArrowUp' || event.key === 'ArrowLeft'
    if (!forward && !backward) return

    event.preventDefault()
    const nextIndex = forward
      ? (index + 1) % services.length
      : (index - 1 + services.length) % services.length
    tabRefs.current[nextIndex]?.focus()
    setActiveIndex(nextIndex)
  }

  return (
    <div className={`service-explorer ${className}`} data-reveal ref={rootRef}>
      <div className="service-explorer-tabs" role="tablist" aria-label="Drilling service options">
        <span className="service-explorer-indicator" ref={indicatorRef} aria-hidden="true" />
        {services.map(({ number, title }, index) => (
          <button
            aria-controls={panelId}
            aria-selected={activeIndex === index}
            className={`service-explorer-tab${activeIndex === index ? ' is-active' : ''}`}
            id={`${idPrefix}-tab-${index}`}
            key={title}
            onClick={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
            onMouseEnter={() => setActiveIndex(index)}
            ref={(element) => { tabRefs.current[index] = element }}
            role="tab"
            tabIndex={activeIndex === index ? 0 : -1}
            type="button"
          >
            <span className="service-explorer-number">{number}</span>
            <span>{title}</span>
            <FiArrowUpRight aria-hidden="true" />
          </button>
        ))}
      </div>

      <section
        aria-labelledby={`${idPrefix}-tab-${activeIndex}`}
        className="service-explorer-panel glass-panel"
        id={panelId}
        ref={panelContentRef}
        role="tabpanel"
        tabIndex={0}
      >
        <div className="service-explorer-panel-content">
          <div className="service-explorer-panel-topline">
            <span>{activeService.number}</span>
            <activeService.icon aria-hidden="true" />
          </div>
          <p className="eyebrow">A Davidson drilling service</p>
          <h3>{activeService.title}</h3>
          <p className="service-explorer-description">{activeService.description}</p>
          <p className="service-explorer-detail">{activeService.details}</p>
          <Link className="service-explorer-link" to={activeService.to}>
            Explore service <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className="service-explorer-orbit" aria-hidden="true"><span /><span /><span /></div>
      </section>
    </div>
  )
}

export default InteractiveServiceExplorer
