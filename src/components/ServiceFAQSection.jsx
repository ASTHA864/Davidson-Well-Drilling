import FAQAccordion from './FAQAccordion.jsx'

function ServiceFAQSection({ title, description, items }) {
  return (
    <section className="service-faq-section" data-reveal>
      <div className="service-faq-intro">
        <p className="eyebrow">Useful details</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <FAQAccordion items={items} />
    </section>
  )
}

export default ServiceFAQSection
