import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'
import { drillingServices } from '../data/drillingServices.js'
import { workGallery } from '../data/workGallery.js'

function OurWork() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="editorial-page work-page" ref={pageRef}>
      <header className="work-page-hero">
        <div className="work-page-hero-copy">
          <p className="eyebrow" data-reveal>Our work · In the field</p>
          <h1 data-reveal>
            Behind Every Project,
            <span>There's Groundwork.</span>
          </h1>
          <p className="work-page-hero-description" data-reveal>
            Explore the drilling equipment, field operations and installation work that support Davidson Well Drilling&apos;s services.
          </p>
        </div>
        <figure className="work-page-hero-image" data-reveal>
          <img
            data-parallax
            src="/images/optimized/golden-hour-well-drilling.jpg"
            alt="Representative image of a water well drilling rig operating at a rural site."
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <span>Field operations</span>
            <strong>Representative image</strong>
          </figcaption>
          <span className="work-page-image-index" aria-hidden="true">01 / FIELD</span>
        </figure>
      </header>

      <section className="work-gallery-section" aria-labelledby="work-gallery-heading">
        <div className="work-gallery-intro section-wrap" data-reveal>
          <div>
            <p className="eyebrow">A closer look</p>
            <h2 id="work-gallery-heading">The work behind reliable service.</h2>
          </div>
          <p>These images illustrate the types of work Davidson provides. They are not represented as customer projects or job-site records.</p>
        </div>
        <div className="work-editorial-gallery section-wrap">
          {workGallery.map((image, index) => (
            <Link
              aria-label={`${image.category}, representative image. Learn about this service.`}
              className={`work-story-card work-story-card-${index + 1}`}
              data-reveal
              key={image.src}
              to={image.to}
            >
              <img data-image-reveal src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <span className="work-story-category">{image.category}</span>
              <span className="work-story-caption">Representative image</span>
              <span className="work-story-arrow" aria-hidden="true"><FiArrowUpRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="work-expertise-section" aria-labelledby="work-expertise-heading">
        <div className="work-expertise-heading section-wrap" data-reveal>
          <div>
            <p className="eyebrow">Services</p>
            <h2 id="work-expertise-heading">Our Expertise Goes Beyond Drilling.</h2>
          </div>
          <p>Explore the services and project-specific work Davidson provides across the region.</p>
        </div>
        <div className="work-expertise-cards section-wrap">
          {drillingServices.map(({ number, icon: Icon, title, description, to }) => {
            const serviceTitle = title === 'Geothermal Ground Loop Systems' ? 'Geothermal Ground Loops' : title

            return (
              <Link className="work-expertise-card" data-reveal key={to} to={to}>
                <span className="work-expertise-card-top">
                  <span>{number}</span>
                  <span className="work-expertise-icon"><Icon aria-hidden="true" /></span>
                </span>
                <span className="work-expertise-card-title">{serviceTitle}</span>
                <span className="work-expertise-card-description">{description}</span>
                <span className="work-expertise-card-link">Explore service <FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default OurWork
