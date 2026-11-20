import { useRef } from 'react'
import { FiArrowDownRight, FiArrowUpRight, FiDroplet, FiHome, FiMap } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import RelatedServices from '../components/RelatedServices.jsx'
import ServiceFAQSection from '../components/ServiceFAQSection.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

const waterWellFaqs = [
  {
    question: 'How deep will a water well need to be?',
    answer: 'Depth depends on geology and water conditions at each property. Regional depth references are not guarantees for an individual site.',
  },
  {
    question: 'Does Davidson serve residential and commercial projects?',
    answer: 'Davidson provides drilled water wells and well systems for residential and commercial water supply.',
  },
  {
    question: 'Can I discuss my property before deciding?',
    answer: 'Yes. Contact Davidson Well Drilling to discuss your water needs and the conditions at your property.',
  },
]

const applications = [
  { icon: FiHome, title: 'Residential supply', text: 'Drilled water wells and well systems for residential properties.' },
  { icon: FiMap, title: 'Commercial supply', text: 'Water well drilling and systems for commercial properties.' },
  { icon: FiDroplet, title: 'Property-specific scope', text: 'Well depth and site requirements vary with local geology and water conditions.' },
]

function WaterWellDrilling() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="service-detail-page water-well-page" ref={pageRef}>
      <header className="water-well-hero">
        <div className="water-well-hero-inner">
          <p className="eyebrow">Water well drilling · Davidson Well Drilling</p>
          <h1>Reliable Water <span>Well Drilling.</span></h1>
          <p className="service-detail-lede">
            Drilled water wells and well systems for residential and commercial water supply.
          </p>
          <div className="water-well-hero-meta">
            <span><strong>Since 1973</strong> Family-owned and operated</span>
            <Link to="#water-well-intro">Explore the service <FiArrowDownRight aria-hidden="true" /></Link>
          </div>
        </div>
        <aside className="water-well-glass-note glass-panel" data-reveal>
          <span className="water-well-note-icon"><FiDroplet aria-hidden="true" /></span>
          <p className="eyebrow">Every property is different</p>
          <strong>Well depth depends on local geology and water conditions.</strong>
          <span className="water-well-note-mark">DW / 01</span>
        </aside>
      </header>

      <section className="water-well-intro section-wrap" id="water-well-intro" data-reveal>
        <div>
          <p className="eyebrow">01 / Understanding the service</p>
          <h2>A dependable water source starts with work suited to the site.</h2>
        </div>
        <div className="water-well-intro-copy">
          <p>
            Davidson Well Drilling provides drilled water wells and complete residential and commercial well systems. The appropriate scope depends on the property and its water conditions.
          </p>
          <p>
            The team has served Northeast Georgia and Western South Carolina since 1973. Contact Davidson to discuss your water supply needs and the work available for your site.
          </p>
        </div>
      </section>

      <section className="water-well-applications" aria-labelledby="water-applications-heading">
        <div className="water-well-section-heading" data-reveal>
          <div>
            <p className="eyebrow">02 / Applications</p>
            <h2 id="water-applications-heading">Water well services for different properties.</h2>
          </div>
          <span className="section-index">DW / 02</span>
        </div>
        <div className="water-application-list">
          {applications.map(({ icon: Icon, title, text }, index) => (
            <article className="water-application" data-reveal key={title}>
              <span className="water-application-number">{String(index + 1).padStart(2, '0')}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="water-well-scope" data-reveal>
        <div className="water-well-scope-inner">
          <div>
            <p className="eyebrow">03 / Well drilling services</p>
            <h2>One team for the well and its supporting system.</h2>
            <p>Davidson’s listed well-related services include drilled water wells, residential and commercial well systems, and pump sales and service.</p>
          </div>
          <ul className="water-well-service-list">
            <li><span>01</span> Drilled water wells</li>
            <li><span>02</span> Residential and commercial well systems</li>
            <li><span>03</span> Pump sales and service</li>
          </ul>
        </div>
      </section>

      <section className="water-well-information" data-reveal>
        <div className="water-info-index"><span>04</span><FiArrowUpRight aria-hidden="true" /></div>
        <div>
          <p className="eyebrow">Important service information</p>
          <h2>Depth, scope, and conditions are site-specific.</h2>
          <p>Well depth and casing requirements vary with local geology and water conditions. Regional estimates are a reference only and are not a guarantee for an individual property.</p>
        </div>
      </section>

      <ServiceFAQSection
        description="A few helpful answers about planning water well work."
        items={waterWellFaqs}
        title="Water well drilling questions."
      />
      <RelatedServices current="/water-well-drilling" />
    </main>
  )
}

export default WaterWellDrilling
