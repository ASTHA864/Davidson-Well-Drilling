import { FiDroplet, FiActivity, FiCheckCircle } from 'react-icons/fi'
import HeroSection from '../components/HeroSection.jsx'
import CTASection from '../components/CTASection.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'

const hydroFaqs = [
  { question: 'Will hydrofracturing restore my well?', answer: 'It may help some low-yield wells, but the result depends on the well’s condition and geology. An evaluation is needed, and improvement is not guaranteed.' },
  { question: 'Are additives used?', answer: 'Davidson uses clean water without additives. Ask the team about the proposed work for your well.' },
  { question: 'Do I need a new well instead?', answer: 'Not necessarily. The company describes hydrofracturing as a possible option for some underperforming wells. Davidson can discuss whether it may be appropriate for your situation.' },
]

function HydroFracturing() {
  return (
    <main>
      <HeroSection eyebrow="Well improvement service" title="A fresh approach to low-yield wells." description="Hydrofracturing uses pressurized water in an existing well. In some cases, it may help improve water flow without drilling a new well." image="/images/header01.jpg" secondaryLabel="Explore services" secondaryTo="/services" compact />
      <section className="section-wrap detail-intro">
        <div className="detail-copy">
          <p className="eyebrow">Understanding hydrofracturing</p>
          <h2>What is hydrofracturing?</h2>
          <p>After a well is drilled, silt or mineral deposits can build up around water-producing fractures in the rock. Hydrofracturing is a well-development process in which water is injected at pressure to help clear or open existing fractures and improve flow.</p>
          <p>Davidson uses a water-only process, without additives. Whether it may help depends on the well’s construction and local geology, so outcomes are not guaranteed.</p>
          <p>This service is for existing water wells; it is different from oil and gas extraction. Contact the team to discuss the condition and history of your well.</p>
        </div>
        <figure className="detail-photo"><img src="/images/hydro-frac01.jpg" alt="Hydrofracturing equipment used during well service" loading="lazy" /><figcaption>Hydrofracturing equipment</figcaption></figure>
      </section>
      <section className="section-band">
        <div className="section-wrap">
          <div className="section-heading-row">
            <div><p className="eyebrow">The process</p><h2>A careful, well-specific approach.</h2></div>
            <p className="section-heading-note">The exact work depends on the existing well. A site discussion helps establish whether hydrofracturing may be an option.</p>
          </div>
          <div className="process-grid">
            <article><span className="process-number">01</span><FiActivity aria-hidden="true" /><h3>Discuss the well</h3><p>Share what you know about its construction, performance, and recent water-flow changes.</p></article>
            <article><span className="process-number">02</span><FiDroplet aria-hidden="true" /><h3>Assess suitability</h3><p>Hydrofracturing is considered for some underperforming wells; it isn’t appropriate for every well.</p></article>
            <article><span className="process-number">03</span><FiCheckCircle aria-hidden="true" /><h3>Review next steps</h3><p>The team can explain the proposed work and its limitations before you decide how to proceed.</p></article>
          </div>
        </div>
      </section>
      <section className="section-wrap detail-faq">
        <div><p className="eyebrow">Good to know</p><h2>Hydrofracturing questions.</h2><p>Have a question about your well? Call or send a note with what you know about it.</p><a className="button button-outline" href="tel:+17067546033">(706) 754-6033</a></div>
        <FAQAccordion items={hydroFaqs} />
      </section>
      <CTASection title="Could hydrofracturing help your well?" text="Talk with Davidson Well Drilling about your well’s history and available options." image="/images/hydro-frac01.jpg" />
    </main>
  )
}

export default HydroFracturing
