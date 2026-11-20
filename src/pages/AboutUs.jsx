import { useRef } from 'react'
import { FiArrowUpRight, FiGitBranch, FiMapPin, FiUsers } from 'react-icons/fi'
import ProjectInvitation from '../components/ProjectInvitation.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

function AboutUs() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="editorial-page about-page" ref={pageRef}>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-inner">
          <div className="about-hero-copy">
            <p className="eyebrow" data-reveal>About Davidson Well Drilling</p>
            <h1 id="about-title" data-reveal>
              Family-owned.
              <span>Serving our region since 1973.</span>
            </h1>
            <p className="about-hero-lede" data-reveal>
              Davidson Well Drilling, Inc. is based in Turnerville, Georgia, and
              serves Northeast Georgia and Western South Carolina.
            </p>
            <a className="about-hero-action" href="#our-story" data-reveal>
              Discover our story <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <figure className="about-hero-photo" data-reveal>
            <img
              src="/images/optimized/rural-drilling-rig.jpg"
              alt="Representative image of drilling equipment in a rural field"
              fetchPriority="high"
              decoding="async"
            />
            <div className="about-established-badge">
              <span>Established</span>
              <strong>1973</strong>
            </div>
            <figcaption>Representative image · Well drilling equipment</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-story" id="our-story" aria-labelledby="about-story-title">
        <div className="about-story-inner">
          <figure className="about-story-photo" data-reveal>
            <img
              src="/images/optimized/geothermal-ground-loop-installation.jpg"
              alt="Representative image illustrating geothermal ground loop installation work"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Representative image · Ground loop installation</figcaption>
          </figure>
          <div className="about-story-copy" data-reveal>
            <p className="eyebrow">Our story</p>
            <h2 id="about-story-title">
              Rooted in Our Community.
              <span>Focused on Dependable Work.</span>
            </h2>
            <p>
              Davidson Well Drilling is a family-owned and operated business
              based in Turnerville, Georgia, serving homeowners and businesses
              across Northeast Georgia and Western South Carolina.
            </p>
            <p>
              The company values quality workmanship, clear communication, and
              project-specific planning. For geothermal work, Davidson
              coordinates drilling and installation with customers and their
              geothermal or HVAC contractors.
            </p>
            <p className="about-story-highlight">
              <span aria-hidden="true" />
              Family-owned and operated since 1973.
            </p>
          </div>
        </div>
      </section>

      <section className="about-history" aria-labelledby="about-history-title">
        <div className="about-history-inner">
          <div className="about-section-heading" data-reveal>
            <p className="eyebrow">A local history</p>
            <h2 id="about-history-title">Built on time, rooted in place.</h2>
            <p>A simple history, shaped by service to the surrounding region.</p>
          </div>
          <ol className="about-timeline">
            <li className="about-timeline-item" data-reveal>
              <span className="about-timeline-marker" aria-hidden="true" />
              <div className="about-timeline-copy">
                <h3 className="about-timeline-title"><time dateTime="1973">1973</time></h3>
                <p className="about-timeline-description">Davidson Well Drilling established.</p>
              </div>
            </li>
            <li className="about-timeline-item" data-reveal>
              <span className="about-timeline-marker" aria-hidden="true" />
              <div className="about-timeline-copy">
                <h3 className="about-timeline-title about-timeline-title-current">Today</h3>
                <p className="about-timeline-description">Family-owned and serving Northeast Georgia and Western South Carolina.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-values-inner">
          <div className="about-section-heading" data-reveal>
            <p className="eyebrow">Our values and approach</p>
            <h2 id="about-values-title">
              Local Knowledge.
              <span>Thoughtful Coordination.</span>
            </h2>
          </div>
          <div className="about-values-grid">
            <article className="about-value-card" data-reveal>
              <span className="about-value-icon"><FiUsers aria-hidden="true" /></span>
              <span className="about-value-number">01</span>
              <h3>Family-Owned Experience</h3>
              <p>Family-owned and operated since 1973.</p>
            </article>
            <article className="about-value-card" data-reveal>
              <span className="about-value-icon"><FiMapPin aria-hidden="true" /></span>
              <span className="about-value-number">02</span>
              <h3>Local Knowledge</h3>
              <p>Serving Northeast Georgia and Western South Carolina.</p>
            </article>
            <article className="about-value-card" data-reveal>
              <span className="about-value-icon"><FiGitBranch aria-hidden="true" /></span>
              <span className="about-value-number">03</span>
              <h3>Project Coordination</h3>
              <p>Coordinating drilling and installation work with customers and geothermal or HVAC contractors.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-service-area" aria-labelledby="about-service-area-title">
        <div className="about-service-area-inner">
          <div className="about-service-area-copy" data-reveal>
            <p className="eyebrow">Close to home</p>
            <h2 id="about-service-area-title">Proudly Serving Our Local Communities.</h2>
            <p>
              Based in Turnerville, Georgia, Davidson Well Drilling serves
              Northeast Georgia and Western South Carolina. Contact the team to
              discuss your project and location.
            </p>
          </div>
          <div className="about-region-card" data-reveal aria-label="Davidson Well Drilling service area">
            <span className="about-region-label"><FiMapPin aria-hidden="true" /> Service area</span>
            <strong>Northeast Georgia</strong>
            <span className="about-region-divider" aria-hidden="true" />
            <strong>Western South Carolina</strong>
            <span className="about-region-base">Based in Turnerville, Georgia</span>
          </div>
        </div>
      </section>

      <div className="about-closing">
        <ProjectInvitation
          eyebrow="Talk with our team"
          title="Ready to Start Your Next Project?"
          description="From water well drilling to geothermal ground loop installation, we're ready to help."
          actionLabel="Contact Davidson"
        />
      </div>
    </main>
  )
}

export default AboutUs
