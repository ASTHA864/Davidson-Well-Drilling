function FAQAccordion({ items }) {
  return (
    <div className="faq-list">
      {items.map(({ question, answer }) => (
        <details className="faq-item" key={question}>
          <summary>{question}<span aria-hidden="true" /></summary>
          <div className="faq-answer"><p>{answer}</p></div>
        </details>
      ))}
    </div>
  )
}

export default FAQAccordion
