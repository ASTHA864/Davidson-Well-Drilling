import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'
import { drillingServices } from '../data/drillingServices.js'

const additionalServices = [
  {
    title: 'Pump Sales & Service',
    description: 'Davidson carries, services, and installs Franklin Electric submersible pumps for water well systems.',
  },
  {
    title: 'Wellhead finishing stones',
    description: 'Rocks for dressing up a wellhead; contact the team to ask about available options.',
  },
]

function Services() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="service-explorer-page" ref={pageRef}>
      <header className="service-explorer-hero">
        <div className="service-explorer-hero-inner" data-reveal>
          <p className="eyebrow">Davidson Well Drilling · Since 1973</p>
          <h1>Drilling services <span>for your project.</span></h1>
          <p>Explore Davidson’s water well, hydrofracturing, and geothermal ground loop services.</p>
        </div>
        <div className="service-hero-light" aria-hidden="true" />
      </header>

      <section className="service-explorer-main">
        <div className="service-explorer-section-heading" data-reveal>
          <div>
            <p className="eyebrow">Three core services</p>
            <h2>Choose the service <span>that fits your needs.</span></h2>
          </div>
          <p>Site conditions and project requirements vary. Contact Davidson Well Drilling to discuss your property and scope.</p>
        </div>
        <div className="service-grid services-primary-grid">
          {drillingServices.map(({ icon, title, description, to }) => (
            <ServiceCard
              description={description}
              icon={icon}
              key={to}
              title={title}
              to={to}
              linkLabel="Learn more"
            />
          ))}
        </div>
      </section>

      <section className="additional-services-section" id="additional-services" data-reveal>
        <div className="additional-services-heading">
          <p className="eyebrow">Additional services</p>
          <h2>Support for well systems.</h2>
          <p>Contact the team to discuss current availability and your project requirements.</p>
        </div>
        <ul className="additional-services-list">
          {additionalServices.map(({ title, description }, index) => (
            <li className="additional-service-item" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><strong>{title}</strong><p>{description}</p></div>
            </li>
          ))}
        </ul>
        <Link className="additional-services-link" to="/contact#quote">Ask about additional services <FiArrowUpRight aria-hidden="true" /></Link>
      </section>
    </main>
  )
}

export default Services
