import { useRef } from 'react'
import FAQCategoryExplorer from '../components/FAQCategoryExplorer.jsx'
import ProjectInvitation from '../components/ProjectInvitation.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'
import { faqCategories } from '../data/faqs.js'

function FAQ() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="redesigned-faq-page" ref={pageRef}>
      <header className="faq-hero">
        <div className="faq-hero-orb faq-hero-orb-one" aria-hidden="true" />
        <div className="faq-hero-orb faq-hero-orb-two" aria-hidden="true" />
        <div className="faq-hero-content" data-reveal>
          <p className="eyebrow"><span className="faq-hero-dot" aria-hidden="true" />Questions, clearly answered</p>
          <h1>Everything You <span>Need to Know.</span></h1>
          <p>Find answers to common questions about our drilling services, geothermal solutions, and installation work.</p>
          <div className="faq-hero-meta">
            <span>DAVIDSON WELL DRILLING</span>
            <span aria-hidden="true" />
            <span>04 TOPICS</span>
          </div>
        </div>
        <div className="faq-hero-mark" aria-hidden="true">
          <span>DW</span>
          <i>EST. 1973</i>
        </div>
      </header>

      <FAQCategoryExplorer categories={faqCategories} />

      <div className="faq-contact-wrap">
        <ProjectInvitation
          eyebrow="Questions & support"
          title="Still Have Questions?"
          description="Get in touch with Davidson Well Drilling to discuss your drilling or geothermal requirements."
          actionLabel="Contact Us"
        />
      </div>
    </main>
  )
}

export default FAQ
