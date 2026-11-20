import { FiArrowUpRight } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { drillingServices } from '../data/drillingServices.js'
import ProjectInvitation from './ProjectInvitation.jsx'

function RelatedServices({ current }) {
  const { pathname } = useLocation()
  const currentService = drillingServices.find(({ to }) => to === pathname)
    || drillingServices.find(({ to }) => to === current)

  return (
    <section className="related-services" aria-labelledby="related-services-heading">
      <div className="related-services-inner">
        <div className="related-services-heading" data-reveal>
          <div>
            <p className="eyebrow">Continue Exploring</p>
            <h2 id="related-services-heading">Discover More Drilling Solutions.</h2>
          </div>
          <span className="related-services-count">01 — 03 <span>DAVIDSON SERVICES</span></span>
        </div>
        <nav className="related-services-nav" aria-label="Explore drilling services">
          <ol className="related-services-list">
            {drillingServices.map(({ number, title, description, to }) => {
              const isCurrent = to === currentService?.to

              return (
                <li className={`related-service-item${isCurrent ? ' is-current' : ''}`} key={to} data-reveal>
                  {isCurrent ? (
                    <div className="related-service-row" aria-current="page">
                      <span className="related-service-number">{number}</span>
                      <span className="related-service-copy">
                        <strong>{title}</strong>
                        <span>{description}</span>
                      </span>
                      <span className="related-service-current">Current page</span>
                      <FiArrowUpRight className="related-service-arrow" aria-hidden="true" />
                    </div>
                  ) : (
                    <Link className="related-service-row" to={to}>
                      <span className="related-service-number">{number}</span>
                      <span className="related-service-copy">
                        <strong>{title}</strong>
                        <span>{description}</span>
                      </span>
                      <FiArrowUpRight className="related-service-arrow" aria-hidden="true" />
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
        <ProjectInvitation />
      </div>
    </section>
  )
}

export default RelatedServices
