import { useRef } from 'react'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

function AboutUs() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="editorial-page about-page" ref={pageRef}>
      <section className="editorial-intro about-intro">
        <p className="eyebrow" data-reveal>About Davidson Well Drilling</p>
        <h1 data-reveal>
          Family-owned.
          <span>Serving our region since 1973.</span>
        </h1>
        <p className="editorial-lede" data-reveal>
          Davidson Well Drilling, Inc. is based in Turnerville, Georgia, and
          serves Northeast Georgia and Western South Carolina.
        </p>
      </section>

      <section className="identity-section" aria-labelledby="identity-heading">
        <div className="identity-inner">
          <p className="eyebrow" data-reveal>Company identity</p>
          <h2 id="identity-heading" data-reveal>
            Rooted in our community.
            <span>Focused on dependable work.</span>
          </h2>
          <div className="identity-copy" data-reveal>
            <p>
              Established in 1973, Davidson is a family-owned and operated
              business serving homeowners and businesses across its local
              service area.
            </p>
            <p>
              The company values quality workmanship, clear communication, and
              project-specific planning. For geothermal work, Davidson
              coordinates drilling and installation with the customer and
              their geothermal or HVAC contractor.
            </p>
            <span className="identity-since">Family-owned and operated since <strong>1973</strong></span>
          </div>
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-heading">
        <div className="approach-inner">
          <div className="approach-heading" data-reveal>
            <p className="eyebrow">Our values and approach</p>
            <h2 id="approach-heading">Local knowledge.<br /><span>Thoughtful coordination.</span></h2>
          </div>
          <div className="approach-points">
            <p data-reveal><span>01</span> Family-owned, with roots in Turnerville, Georgia.</p>
            <p data-reveal><span>02</span> Serving Northeast Georgia and Western South Carolina.</p>
            <p data-reveal><span>03</span> Coordinating geothermal drilling scope with customers and HVAC contractors.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
