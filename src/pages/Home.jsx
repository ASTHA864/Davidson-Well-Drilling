import { useRef } from 'react'
import { Link } from 'react-router-dom'
import HomeAbout from '../components/HomeAbout.jsx'
import HomeHero from '../components/HomeHero.jsx'
import HomeServices from '../components/HomeServices.jsx'
import HomeWork from '../components/HomeWork.jsx'
import HomeWhyChoose from '../components/HomeWhyChoose.jsx'
import ProjectInvitation from '../components/ProjectInvitation.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'
import { workGallery } from '../data/workGallery.js'
import { FiArrowUpRight, FiPhone } from 'react-icons/fi'

const processSteps = [
  ['01', 'Project Understanding', 'We discuss the property, intended use, site conditions, and project requirements.'],
  ['02', 'Coordination', 'Access, equipment, timelines, and any geothermal or HVAC contractor roles are brought into alignment.'],
  ['03', 'Drilling and Installation', 'The work is approached methodically, with attention to safety and site-specific conditions.'],
  ['04', 'Project Completion', 'We review the completed scope and discuss next steps with the property owner or project team.'],
]

function Home() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="dw-home" ref={pageRef}>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <section className="dw-process" aria-labelledby="process-heading">
        <div className="dw-process-heading" data-reveal>
          <p className="dw-eyebrow">How we work</p>
          <h2 id="process-heading">From Planning to the Field.</h2>
          <p>Clear steps. Direct communication. A coordinated approach from first conversation through completion.</p>
        </div>
        <div className="dw-process-rail">
          {processSteps.map(([number, title, description]) => (
            <article data-reveal key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <HomeWork />
      <section className="dw-work-gallery" aria-label="Representative field imagery">
        {workGallery.map((image, index) => (
          <figure className={`dw-gallery-item dw-gallery-item-${index + 1}`} data-reveal key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            <figcaption><span>{image.category}</span><span>Representative image</span></figcaption>
          </figure>
        ))}
      </section>
      <HomeWhyChoose />
      <section className="dw-service-area" aria-labelledby="service-area-heading">
        <div className="dw-area-copy" data-reveal>
          <p className="dw-eyebrow">Service area</p>
          <h2 id="service-area-heading">Proudly Serving Our Region.</h2>
          <p>Based in Turnerville, Georgia, Davidson serves property owners and project teams across Northeast Georgia and Western South Carolina.</p>
          <Link className="dw-text-link" to="/contact">Discuss Your Location <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
        <svg className="dw-region-map" viewBox="0 0 620 430" role="img" aria-labelledby="region-map-title region-map-description" data-reveal>
          <title id="region-map-title">Davidson service region</title>
          <desc id="region-map-description">Illustrative map marking Northeast Georgia and Western South Carolina.</desc>
          <path className="dw-map-state" d="M102 54L276 38l112 42 62 91-62 88-43 119-141-18-72-88-64-54z" />
          <path className="dw-map-state" d="M388 80l144 21 42 78-50 83-136 5-62-88z" />
          <path className="dw-map-route" d="M276 38c42 56 75 123 112 176 26 38 72 51 136 48" />
          <circle className="dw-map-point" cx="276" cy="214" r="8" />
          <circle className="dw-map-ring" cx="276" cy="214" r="18" />
          <text className="dw-map-label" x="292" y="205">TURNERVILLE</text>
          <text className="dw-map-label-small" x="292" y="224">GEORGIA</text>
          <text className="dw-map-region" x="132" y="294">NORTHEAST GEORGIA</text>
          <text className="dw-map-region" x="448" y="196" transform="rotate(-7 448 196)">WESTERN</text>
          <text className="dw-map-region" x="448" y="216" transform="rotate(-7 448 216)">SOUTH CAROLINA</text>
        </svg>
      </section>
      <div className="dw-home-contact section-wrap">
        <ProjectInvitation
          eyebrow="Let&apos;s get your next project moving"
          title="Let&apos;s Get Your Next Project Moving."
          description="Have questions about water well drilling or geothermal installation? Let&apos;s talk about your project."
          actionLabel="Contact Us"
        />
        <a className="dw-home-call" href="tel:+17067546033"><FiPhone aria-hidden="true" /> Call Now <span>(706) 754-6033</span></a>
      </div>
    </main>
  )
}

export default Home
