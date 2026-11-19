import { FiArrowRight, FiCheck, FiDroplet, FiTool, FiTrendingUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const featuredServices = [
  { icon: FiDroplet, title: 'Water well drilling', description: 'Drilled water wells and complete residential and commercial well systems.', to: '/services' },
  { icon: FiTrendingUp, title: 'Hydrofracturing', description: 'A water-only process that may help improve flow in some low-yield wells.', to: '/hydro-fracturing' },
  { icon: FiTool, title: 'Geothermal ground loops', description: 'Vertical ground loop drilling and down-hole installation for your project.', to: '/geothermal-products' },
]

function Home() {
  return (
    <main>
      <section className="home-hero" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7, 28, 48, .87), rgba(7, 28, 48, .52) 55%, rgba(7, 28, 48, .12)), url("/images/header01.jpg")' }}>
        <div className="section-wrap home-hero-content">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-rule" />Northeast Georgia &amp; Western South Carolina</p>
          <h1>Good water starts<br />with a solid foundation.</h1>
          <p className="home-hero-description">Well drilling, pump service, hydrofracturing, and geothermal ground loop installation from a family-owned team serving the region since 1973.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/contact#quote">Request a Quote <FiArrowRight aria-hidden="true" /></Link>
            <Link className="button button-outline-light" to="/contact">Contact Us</Link>
          </div>
          <div className="hero-caption"><span className="hero-caption-dot" />Locally owned. Experienced. Ready to help.</div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span /></div>
      </section>

      <section className="trust-strip" aria-label="Company credentials">
        <div className="section-wrap trust-strip-inner">
          <span><FiCheck aria-hidden="true" /> Family owned &amp; operated</span>
          <span><FiCheck aria-hidden="true" /> Serving the region since 1973</span>
          <span><FiCheck aria-hidden="true" /> Licensed in Georgia &amp; South Carolina</span>
          <span><FiCheck aria-hidden="true" /> Fully insured</span>
        </div>
      </section>

      <section className="section-wrap intro-section">
        <div className="intro-image-wrap">
          <img src="/images/0005.jpg" alt="Davidson Well Drilling equipment at a well site" loading="lazy" />
          <div className="image-note"><strong>Since 1973</strong><span>Serving our neighbors with dependable water systems</span></div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">A local team you can count on</p>
          <h2>Meeting your well drilling and water supply needs.</h2>
          <p>Clean, dependable water matters. At Davidson Well Drilling, our customers are our neighbors, friends, and family. We work to understand your needs and provide the right well and water system for your property.</p>
          <p>Based in Turnerville, Georgia, we serve Northeast Georgia and Western South Carolina with residential and commercial well systems, pump sales and service, hydrofracturing, and geothermal ground loop installation.</p>
          <Link className="text-link" to="/about-us">Get to know us <FiArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section-band">
        <div className="section-wrap">
          <div className="section-heading-row">
            <div><p className="eyebrow">What we do</p><h2>Water well expertise,<br />from the ground up.</h2></div>
            <Link className="text-link" to="/services">Explore all services <FiArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="service-grid service-grid-home">
            {featuredServices.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-wrap why-layout">
          <div className="why-copy">
            <p className="eyebrow eyebrow-light">Why Davidson</p>
            <h2>Good work is built on trust.</h2>
            <p>For a family business, reputation matters. We bring local experience and practical know-how to the work, and treat every customer with the care we’d give a neighbor.</p>
            <ul className="check-list">
              <li><FiCheck aria-hidden="true" /> Family owned and operated since 1973</li>
              <li><FiCheck aria-hidden="true" /> Georgia and South Carolina licensed</li>
              <li><FiCheck aria-hidden="true" /> Fully insured</li>
              <li><FiCheck aria-hidden="true" /> Work with your geothermal or HVAC contractor</li>
            </ul>
            <Link className="text-link text-link-light" to="/about-us">More about our company <FiArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="why-photo-grid">
            <img src="/images/0004.jpg" alt="Drilling equipment prepared for well work" loading="lazy" />
            <img src="/images/0002.jpg" alt="Water pump equipment offered by Davidson Well Drilling" loading="lazy" />
            <span className="photo-caption">Local experience. Practical solutions.</span>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-wrap">
          <div className="section-heading-row">
            <div><p className="eyebrow eyebrow-light">On the job</p><h2>Built for the work<br />beneath the surface.</h2></div>
            <p className="gallery-intro">A look at the equipment and services behind dependable well and ground loop systems.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-item gallery-wide"><img src="/images/header02.jpg" alt="Davidson Well Drilling equipment on a project site" loading="lazy" /><figcaption>Well systems &amp; pump service</figcaption></figure>
            <figure className="gallery-item"><img src="/images/geotherm.jpg" alt="Geothermal ground loop installation" loading="lazy" /><figcaption>Geothermal ground loops</figcaption></figure>
            <figure className="gallery-item"><img src="/images/hydro-frac01.jpg" alt="Hydrofracturing equipment used for well service" loading="lazy" /><figcaption>Hydrofracturing</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="home-contact section-wrap" id="quote">
        <div className="home-contact-copy">
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us what you need.</h2>
          <p>Share a few details about your project. Your enquiry will be sent directly to our team.</p>
          <a className="contact-phone" href="tel:+17067546033">(706) 754-6033</a>
          <span>Prefer to call? We’re happy to hear from you.</span>
        </div>
        <ContactForm compact />
      </section>
    </main>
  )
}

export default Home
