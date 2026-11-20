import { useRef } from 'react'
import { FiArrowDownRight, FiDroplet, FiInfo, FiShield } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import RelatedServices from '../components/RelatedServices.jsx'
import ServiceFAQSection from '../components/ServiceFAQSection.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

const hydroFaqs = [
  {
    question: 'Will hydrofracturing restore my well?',
    answer: 'It may help some low-yield wells, but the result depends on the well’s condition and geology. Improvement is not guaranteed.',
  },
  {
    question: 'Are additives used?',
    answer: 'Davidson uses clean water without additives. Ask the team about the proposed work for your well.',
  },
  {
    question: 'Is hydrofracturing right for every well?',
    answer: 'No. The service may be considered for some underperforming wells. An evaluation of the existing well is needed to discuss whether it may be appropriate.',
  },
]

const hydroConsiderations = [
  { icon: FiInfo, title: 'Existing well conditions', text: 'Hydrofracturing may be considered for some low-yield wells, depending on the well and local geology.' },
  { icon: FiShield, title: 'No guaranteed outcome', text: 'Every well is different. Increased flow or improved performance is not guaranteed.' },
]

function HydroFracturing() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="service-detail-page hydro-page" ref={pageRef}>
      <header className="hydro-hero">
        <div className="hydro-hero-copy" data-reveal>
          <p className="eyebrow">Existing well service · Hydrofracturing</p>
          <h1>Improving Well Performance <span>Through Hydrofracturing.</span></h1>
          <p className="service-detail-lede">
            A water-only process that may help some low-yield wells. Results depend on well conditions and are not guaranteed.
          </p>
          <Link className="hydro-hero-link" to="#hydro-process">Understand the process <FiArrowDownRight aria-hidden="true" /></Link>
        </div>
        <div className="hydro-water-mark" aria-hidden="true">
          <span className="hydro-water-ring hydro-water-ring-one" />
          <span className="hydro-water-ring hydro-water-ring-two" />
          <FiDroplet />
          <small>WATER<br />ONLY</small>
        </div>
      </header>

      <section className="hydro-introduction section-wrap" data-reveal>
        <div className="hydro-intro-index">01 <span>/ 05</span></div>
        <div>
          <p className="eyebrow">What is hydrofracturing?</p>
          <h2>A well-development option for some low-yield wells.</h2>
        </div>
        <p>
          Hydrofracturing uses water injected under pressure in an existing well to help clear or open water-bearing fractures. Davidson uses clean water without additives. Whether it may help depends on the well’s construction, condition, and local geology.
        </p>
      </section>

      <section className="hydro-process-section" id="hydro-process" aria-labelledby="hydro-process-heading">
        <div className="hydro-process-inner">
          <div className="hydro-process-heading" data-reveal>
            <p className="eyebrow">02 / How the process works</p>
            <h2 id="hydro-process-heading">Start with the well you already have.</h2>
            <p>Discuss the well’s history and conditions with Davidson before deciding whether hydrofracturing is worth considering.</p>
          </div>
          <div className="hydro-process-rail">
            <span className="hydro-process-line" aria-hidden="true" />
            <article data-reveal>
              <span className="hydro-process-step">A</span>
              <div><h3>Talk through the well</h3><p>Share what you know about its construction and changes in water flow.</p></div>
            </article>
            <article data-reveal>
              <span className="hydro-process-step">B</span>
              <div><h3>Water-only process</h3><p>Water is injected under pressure to help clear or open existing water-bearing fractures. No additives are used.</p></div>
            </article>
            <article data-reveal>
              <span className="hydro-process-step">C</span>
              <div><h3>Review the limitations</h3><p>Discuss the proposed work and understand that improved water flow is not guaranteed.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="hydro-considerations" aria-labelledby="hydro-considerations-heading">
        <div className="hydro-considerations-heading" data-reveal>
          <p className="eyebrow">03 / When it may be considered</p>
          <h2 id="hydro-considerations-heading">When it may be considered.</h2>
          <p>Hydrofracturing is a possible service for some low-yield wells—not a promise of a particular result.</p>
        </div>
        <div className="hydro-consideration-grid">
          {hydroConsiderations.map(({ icon: Icon, title, text }) => (
            <article className="hydro-consideration-card glass-panel" data-reveal key={title}>
              <Icon aria-hidden="true" />
              <span>{title}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceFAQSection
        description="Straightforward answers about the hydrofracturing process and its limits."
        items={hydroFaqs}
        title="Hydrofracturing questions."
      />
      <RelatedServices current="/hydro-fracturing" />
    </main>
  )
}

export default HydroFracturing
