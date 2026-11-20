import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import gsap from 'gsap'
import FAQAccordion from './FAQAccordion.jsx'

function FAQCategoryExplorer({ categories }) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id)
  const categoryPanelRef = useRef(null)
  const tabRefs = useRef([])
  const activeCategory = categories.find(({ id }) => id === activeCategoryId) || categories[0]

  useEffect(() => {
    if (!categoryPanelRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const animation = gsap.fromTo(
      categoryPanelRef.current,
      { autoAlpha: 0, y: 9 },
      { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' },
    )
    return () => animation.revert()
  }, [activeCategoryId])

  function handleCategoryKeyDown(event) {
    const currentIndex = categories.findIndex(({ id }) => id === activeCategoryId)
    let nextIndex = currentIndex

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % categories.length
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + categories.length) % categories.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = categories.length - 1
    else return

    event.preventDefault()
    const nextCategory = categories[nextIndex]
    setActiveCategoryId(nextCategory.id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="faq-explorer" aria-label="Frequently asked questions">
      <div className="faq-category-column">
        <div className="faq-category-heading">
          <p className="eyebrow">Explore by topic</p>
          <h2>Find the right answer.</h2>
        </div>
        <div className="faq-category-list" role="tablist" aria-label="FAQ categories" aria-orientation="vertical">
          {categories.map(({ id, label, items }, index) => {
            const isActive = id === activeCategory.id

            return (
              <button
                className={`faq-category${isActive ? ' is-active' : ''}`}
                id={`faq-tab-${id}`}
                key={id}
                ref={(node) => { tabRefs.current[index] = node }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="faq-category-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveCategoryId(id)}
                onKeyDown={handleCategoryKeyDown}
              >
                <span className="faq-category-label">{label}</span>
                <span className="faq-category-count">{String(items.length).padStart(2, '0')}</span>
                <FiArrowUpRight aria-hidden="true" />
              </button>
            )
          })}
        </div>
        <p className="faq-category-note">Still unsure? Every property and system is different. We’re happy to discuss your specific project.</p>
      </div>
      <div
        className="faq-category-panel"
        id="faq-category-panel"
        role="tabpanel"
        aria-labelledby={`faq-tab-${activeCategory.id}`}
        ref={categoryPanelRef}
        key={activeCategory.id}
      >
        <div className="faq-category-panel-heading">
          <p className="eyebrow">{activeCategory.label}</p>
          <span>{String(activeCategory.items.length).padStart(2, '0')} answers</span>
        </div>
        <FAQAccordion items={activeCategory.items} searchable />
      </div>
    </section>
  )
}

export default FAQCategoryExplorer
