import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function HomeWork() {
  return (
    <section className="dw-work" id="our-work" aria-labelledby="work-heading">
      <div className="dw-section-heading work-preview-heading" data-reveal>
        <div>
          <p className="dw-eyebrow">Field perspective</p>
          <h2 id="work-heading">Every site begins with its own conditions.</h2>
        </div>
        <p className="dw-work-description">
          Local geology, access, and project goals all help shape the work below the surface.
        </p>
      </div>
      <div className="dw-work-note" data-reveal>
        <span className="dw-work-note-index">01 / SITE-SPECIFIC</span>
        <p>From a new water well to a geothermal ground loop, Davidson coordinates the drilling scope with the property owner and project team.</p>
        <Link className="work-preview-link" to="/our-work">
          Explore representative field imagery <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default HomeWork
