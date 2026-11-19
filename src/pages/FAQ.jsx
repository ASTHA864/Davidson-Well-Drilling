import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import HeroSection from '../components/HeroSection.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import CTASection from '../components/CTASection.jsx'
import { faqItems } from '../data/faqs.js'

function FAQ() {
  return (
    <main>
      <HeroSection eyebrow="Questions & answers" title="A few things you may be wondering." description="Helpful information about wells, pumps, hydrofracturing, and geothermal ground loops." image="/images/header01.jpg" secondaryLabel="Ask a question" secondaryTo="/contact" compact />
      <section className="section-wrap faq-page">
        <div className="faq-sidebar">
          <p className="eyebrow">Frequently asked questions</p>
          <h2>Clear answers.<br />No guesswork.</h2>
          <p>Every property and well is different. For advice about your specific site or system, contact Davidson Well Drilling directly.</p>
          <Link className="text-link" to="/contact">Still have questions? <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <FAQAccordion items={faqItems} />
      </section>
      <CTASection title="Have a question about your well?" text="Call us or send a message. We’ll be glad to hear what you’re working on." />
    </main>
  )
}

export default FAQ
