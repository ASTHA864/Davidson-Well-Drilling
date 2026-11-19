import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function HeroSection({ eyebrow, title, description, image, primaryLabel = 'Request a Quote', primaryTo = '/contact#quote', secondaryLabel, secondaryTo, compact = false }) {
  return (
    <section className={`page-hero${compact ? ' page-hero-compact' : ''}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(7, 28, 48, .88) 0%, rgba(7, 28, 48, .68) 52%, rgba(7, 28, 48, .18) 100%), url("${image}")` }}>
      <div className="section-wrap page-hero-content">
        {eyebrow && <p className="eyebrow eyebrow-light">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="page-hero-description">{description}</p>}
        <div className="hero-actions">
          <Link className="button button-primary" to={primaryTo}>{primaryLabel} <FiArrowRight aria-hidden="true" /></Link>
          {secondaryLabel && <Link className="button button-outline-light" to={secondaryTo}>{secondaryLabel} <FiArrowRight aria-hidden="true" /></Link>}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
