import { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

function FAQAccordion({ items, searchable = false }) {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const visibleItems = normalizedQuery
    ? items.filter(({ question, answer }) => `${question} ${answer}`.toLowerCase().includes(normalizedQuery))
    : items

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
          {visibleItems.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary>{question}<span aria-hidden="true" /></summary>
              <div className="faq-answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      ) : (
        <p className="faq-empty">No answers match “{query}”. Try another search term or clear your search.</p>
      )}
    </div>
  )
}

export default FAQAccordion
