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

          <aside className="about-company-record" data-reveal aria-label="Company history">
            <div className="about-record-contours" aria-hidden="true">
              <svg viewBox="0 0 520 360" focusable="false">
                <path d="M24 104C106 38 183 45 260 100s146 60 236-8" />
                <path d="M5 137c91-75 176-70 258-9s148 70 252 1" />
                <path d="M-14 171c100-85 194-83 280-20s152 81 265 10" />
                <path d="M-20 209c110-91 211-95 302-30s160 92 275 21" />
                <path d="M-10 249c120-93 225-103 319-43s160 105 273 34" />
              </svg>
            </div>
            <span className="about-record-index">DAVIDSON WELL DRILLING / 01</span>
            <p className="about-record-year">1973</p>
            <p className="about-record-caption">Established in Turnerville, Georgia.</p>
            <div className="about-record-rule" aria-hidden="true" />
            <div className="about-record-details">
              <span>Family-owned</span>
              <span>Locally operated</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="about-story" id="our-story" aria-labelledby="about-story-title">
        <div className="about-story-inner">
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
          <aside className="about-story-principle" data-reveal>
            <span className="about-story-principle-label">A practical approach</span>
            <p>Every site is different.</p>
            <span className="about-story-principle-rule" aria-hidden="true" />
            <span className="about-story-principle-note">Project scope is shaped by local conditions and clear coordination.</span>
          </aside>
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
        <div className="section-wrap">
          <ProjectInvitation
            eyebrow="Rooted in the region"
            title="Let’s talk about your project."
            description="Contact Davidson Well Drilling to discuss your location, project goals, and next steps."
            actionLabel="Contact our team"
          />
        </div>
      </div>
    </main>
  )
}

export default AboutUs
