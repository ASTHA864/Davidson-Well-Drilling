import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import ContactForm from '../components/ContactForm.jsx'
import HeroSection from '../components/HeroSection.jsx'

function Contact() {
  return (
    <main>
      <HeroSection eyebrow="Contact Davidson Well Drilling" title="Let’s get your project moving." description="Tell us what you need, or call our Turnerville office to talk with the team." image="/images/header02.jpg" primaryLabel="Request a Quote" primaryTo="#quote" compact />
      <section className="section-wrap contact-layout">
        <div className="contact-details">
          <p className="eyebrow">Get in touch</p>
          <h2>We’re here to help.</h2>
          <p>Contact us about well drilling, pump sales and service, hydrofracturing, geothermal ground loops, or other listed services.</p>
          <a className="contact-detail" href="tel:+17067546033"><span><FiPhone aria-hidden="true" /></span><div><small>Call our office</small><strong>(706) 754-6033</strong></div></a>
          <a className="contact-detail" href="tel:+18002041483"><span><FiPhone aria-hidden="true" /></span><div><small>Toll free</small><strong>(800) 204-1483</strong></div></a>
          <a className="contact-detail" href="mailto:info@davidsonwelldrillinginc.com"><span><FiMail aria-hidden="true" /></span><div><small>Email</small><strong>info@davidsonwelldrillinginc.com</strong></div></a>
          <a className="contact-detail" href="https://maps.google.com/?q=3454+Old+Historic+441,+Turnerville,+GA+30580" target="_blank" rel="noreferrer"><span><FiMapPin aria-hidden="true" /></span><div><small>Visit or get directions</small><strong>3454 Old Historic 441<br />PO Box 28, Turnerville, GA 30580</strong></div></a>
          <div className="hours-note"><FiClock aria-hidden="true" /><p>Business hours aren’t listed on the company’s original website. Please call to confirm availability.</p></div>
        </div>
        <div className="contact-form-panel" id="quote">
          <div className="contact-form-heading"><p className="eyebrow">Send an enquiry</p><h2>How can we help?</h2><p>Fields marked <span aria-hidden="true">*</span> are required.</p></div>
          <ContactForm />
        </div>
      </section>
      <section className="contact-map">
        <div className="map-copy"><p className="eyebrow">Find us in Turnerville</p><h2>Serving our neighbors across the region.</h2><p>Davidson Well Drilling serves Northeast Georgia and Western South Carolina.</p><a href="https://maps.google.com/?q=3454+Old+Historic+441,+Turnerville,+GA+30580" target="_blank" rel="noreferrer" className="text-link">Get directions <FiMapPin aria-hidden="true" /></a></div>
        <iframe title="Map showing the Davidson Well Drilling address in Turnerville, Georgia" src="https://maps.google.com/maps?q=3454%20Old%20Historic%20441%2C%20Turnerville%2C%20GA%2030580&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </main>
  )
}

export default Contact
