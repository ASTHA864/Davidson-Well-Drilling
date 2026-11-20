import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import InteractiveServiceExplorer from './InteractiveServiceExplorer.jsx'
import { drillingServices } from '../data/drillingServices.js'

function HomeServices() {
  return (
    <section className="dw-services interactive-home-services" id="services" aria-labelledby="services-heading">
      <div className="dw-section-heading" data-reveal>
        <div>
          <p className="dw-eyebrow">Our services</p>
          <h2 id="services-heading">Solutions That Start Beneath the Surface.</h2>
        </div>
        <Link className="dw-text-link" to="/services">
          All services <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <InteractiveServiceExplorer
        className="service-explorer-home"
        idPrefix="home-services"
        services={drillingServices}
      />
    </section>
  )
}

export default HomeServices
