import { FiArrowUpRight, FiMapPin, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div className="footer-brand">
          <Link className="brand brand-light" to="/">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-copy"><strong>Davidson</strong><small>WELL DRILLING, INC.</small></span>
          </Link>
          <p>Family-owned well drilling and ground loop installation for Northeast Georgia and Western South Carolina.</p>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>
        <div>
          <h2 className="footer-heading">Services</h2>
          <div className="footer-links">
            <Link to="/services">All Services</Link>
            <Link to="/water-well-drilling">Water Well Drilling</Link>
            <Link to="/hydro-fracturing">Hydrofracturing</Link>
            <Link to="/geothermal-ground-loops">Geothermal Ground Loops</Link>
          </div>
        </div>
        <div className="footer-contact">
          <h2 className="footer-heading">Get in touch</h2>
          <a href="tel:+17067546033"><FiPhone aria-hidden="true" /> (706) 754-6033</a>
          <a href="tel:+18002041483"><FiPhone aria-hidden="true" /> (800) 204-1483</a>
          <a href="https://maps.google.com/?q=3454+Old+Historic+441,+Turnerville,+GA+30580" target="_blank" rel="noreferrer">
            <FiMapPin aria-hidden="true" /> 3454 Old Historic 441<br />PO Box 28, Turnerville, GA 30580
          </a>
          <a href="mailto:info@davidsonwelldrillinginc.com">info@davidsonwelldrillinginc.com <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap footer-bottom-inner">
          <span>© {currentYear} Davidson Well Drilling, Inc. All rights reserved.</span>
          <span>Serving Northeast Georgia &amp; Western South Carolina</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer