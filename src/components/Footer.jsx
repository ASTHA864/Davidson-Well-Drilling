import { FiArrowUp, FiArrowUpRight, FiMapPin, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function Footer() {
  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <footer className="dw-footer">
      <svg className="dw-footer-contours" viewBox="0 0 1600 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <path d="M-120 155C70 25 218 40 354 145s218 150 365 86 210-194 400-174 287 168 523 95" />
        <path d="M-130 195C61 65 211 81 347 184s222 149 369 86 212-194 401-174 288 168 526 94" />
        <path d="M-140 235C53 106 204 120 340 224s225 148 372 86 214-194 403-174 290 168 529 93" />
        <path d="M-150 275C44 146 197 160 333 264s228 147 375 86 216-194 405-174 292 168 532 92" />
        <path d="M-160 315C35 187 190 201 326 304s231 146 378 86 218-194 407-174 294 168 535 91" />
        <path d="M-170 355C27 228 183 241 319 344s234 145 381 86 220-194 409-174 296 168 538 90" />
      </svg>
      <div className="dw-footer-ambient" aria-hidden="true" />
      <div className="dw-footer-container">
        <section className="dw-footer-cta" aria-labelledby="dw-footer-cta-heading">
          <div className="dw-footer-cta-copy">
            <p className="dw-footer-eyebrow">Talk with our team</p>
            <h2 id="dw-footer-cta-heading">Ready to Start Your Next Project?</h2>
            <p>From water well drilling to geothermal ground loop installation, we&apos;re ready to help.</p>
          </div>
          <div className="dw-footer-cta-actions">
            <Link className="dw-footer-button dw-footer-button-primary" to="/contact">
              Contact Us <FiArrowUpRight aria-hidden="true" />
            </Link>
            <a className="dw-footer-button dw-footer-button-quiet" href="tel:+17067546033">
              Call Now <FiPhone aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="dw-footer-main">
          <section className="dw-footer-brand" aria-label="Davidson Well Drilling">
            <Link className="brand brand-light dw-footer-logo" to="/" aria-label="Davidson Well Drilling home">
              <span className="brand-mark dw-footer-logo-mark" aria-hidden="true"><span /></span>
              <span className="brand-copy"><strong>Davidson</strong><small>WELL DRILLING, INC.</small></span>
            </Link>
            <p>Family-owned drilling expertise built on dependable workmanship and straightforward service.</p>
            <div className="dw-footer-service-area">
              <FiMapPin aria-hidden="true" />
              <span>Serving Northeast Georgia<br />&amp; Western South Carolina</span>
            </div>
          </section>

          <nav className="dw-footer-nav" aria-label="Explore">
            <h2 className="dw-footer-heading">Explore</h2>
            <div className="dw-footer-links">
              <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/our-work">Our Work</Link>
              <Link to="/faqs">FAQs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>

          <nav className="dw-footer-nav" aria-label="Services">
            <h2 className="dw-footer-heading">Services</h2>
            <div className="dw-footer-links dw-footer-service-links">
              <Link to="/water-well-drilling"><span>Water Well Drilling</span><FiArrowUpRight aria-hidden="true" /></Link>
              <Link to="/hydro-fracturing"><span>Hydrofracturing</span><FiArrowUpRight aria-hidden="true" /></Link>
              <Link to="/geothermal-ground-loops"><span>Geothermal Ground Loops</span><FiArrowUpRight aria-hidden="true" /></Link>
            </div>
          </nav>

          <section className="dw-footer-contact" aria-labelledby="dw-footer-contact-heading">
            <h2 className="dw-footer-heading" id="dw-footer-contact-heading">Contact</h2>
            <a className="dw-footer-contact-card" href="tel:+17067546033">
              <span className="dw-footer-contact-icon"><FiPhone aria-hidden="true" /></span>
              <span><small>Office</small><strong>(706) 754-6033</strong></span>
            </a>
            <a className="dw-footer-contact-card" href="tel:+18002041483">
              <span className="dw-footer-contact-icon"><FiPhone aria-hidden="true" /></span>
              <span><small>Toll free</small><strong>(800) 204-1483</strong></span>
            </a>
            <a className="dw-footer-contact-card dw-footer-address" href="https://maps.google.com/?q=3454+Old+Historic+441,+Turnerville,+GA+30580" target="_blank" rel="noreferrer">
              <span className="dw-footer-contact-icon"><FiMapPin aria-hidden="true" /></span>
              <span><small>Visit</small><strong>3454 Old Historic 441<br />PO Box 28, Turnerville, GA 30580</strong></span>
            </a>
            <a className="dw-footer-email" href="mailto:info@davidsonwelldrillinginc.com">
              info@davidsonwelldrillinginc.com <FiArrowUpRight aria-hidden="true" />
            </a>
          </section>
        </div>

        <div className="dw-footer-bottom">
          <span>© {currentYear} Davidson Well Drilling, Inc. All rights reserved.</span>
          <span className="dw-footer-bottom-area">Northeast Georgia &amp; Western South Carolina</span>
          <button className="dw-footer-back-top" type="button" onClick={scrollToTop}>
            Back to top <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer