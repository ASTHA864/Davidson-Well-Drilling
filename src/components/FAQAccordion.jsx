import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import gsap from 'gsap'

function FAQAccordion({ items, searchable = false }) {
  const [query, setQuery] = useState('')
  const [openQuestion, setOpenQuestion] = useState(null)
  const panelRefs = useRef(new Map())
  const normalizedQuery = query.trim().toLowerCase()
  const visibleItems = useMemo(() => {
    if (!normalizedQuery) return items
    return items.filter(({ question, answer }) => `${question} ${answer}`.toLowerCase().includes(normalizedQuery))
  }, [items, normalizedQuery])
  const activeQuestion = visibleItems.some(({ question }) => question === openQuestion) ? openQuestion : null

  useLayoutEffect(() => {
    const panels = visibleItems
      .map(({ question }) => [question, panelRefs.current.get(question)])
      .filter(([, panel]) => panel)

    panels.forEach(([question, panel]) => {
      gsap.killTweensOf(panel)
      const isOpen = question === activeQuestion

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(panel, { height: isOpen ? 'auto' : 0, autoAlpha: isOpen ? 1 : 0 })
        return
      }

      if (isOpen) {
        gsap.fromTo(
          panel,
          { height: 0, autoAlpha: 0 },
          { height: 'auto', autoAlpha: 1, duration: 0.38, ease: 'power2.out' },
        )
      } else {
        gsap.to(panel, { height: 0, autoAlpha: 0, duration: 0.26, ease: 'power2.inOut' })
      }
    })

    return () => panels.forEach(([, panel]) => gsap.killTweensOf(panel))
  }, [activeQuestion, visibleItems])

  return (
    <div className="faq-content">
      {searchable && (
        <div className="faq-tools">
          <div className="faq-search">
            <FiSearch aria-hidden="true" />
            <label className="visually-hidden" htmlFor="faq-search-input">Search frequently asked questions</label>
            <input
              id="faq-search-input"
              type="search"
              aria-label="Search frequently asked questions"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions or answers"
            />
            {query && (
              <button type="button" aria-label="Clear FAQ search" onClick={() => setQuery('')}>
                <FiX aria-hidden="true" />
              </button>
            )}
          </div>
          <p className="faq-results" aria-live="polite">
            {normalizedQuery ? `${visibleItems.length} ${visibleItems.length === 1 ? 'answer' : 'answers'} found` : `${items.length} common questions`}
          </p>
        </div>
      )}
      {visibleItems.length > 0 ? (
        <div className="faq-list">
          {visibleItems.map(({ question, answer }, index) => {
            const isOpen = activeQuestion === question
            const questionId = `faq-question-${index}-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
            const answerId = `${questionId}-answer`

            return (
              <article className={`faq-item${isOpen ? ' is-open' : ''}`} key={question}>
                <h3 className="faq-question-heading">
                  <button
                    className="faq-question"
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenQuestion(isOpen ? null : question)}
                  >
                    <span>{question}</span>
                    <span className="faq-question-icon" aria-hidden="true"><i /></span>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={answerId}
                  ref={(node) => {
                    if (node) panelRefs.current.set(question, node)
                    else panelRefs.current.delete(question)
                  }}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <p>{answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <p className="faq-empty">No answers match “{query}”. Try another search term or clear your search.</p>
      )}
    </div>
  )
}

export default FAQAccordion
