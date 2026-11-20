import { useRef } from 'react'
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import ContactForm from '../components/ContactForm.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

function Contact() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="contact-page" ref={pageRef}>
      <section className="section-wrap contact-layout">
        <div className="contact-details" data-reveal>
          <p className="eyebrow">Contact Davidson Well Drilling</p>
          <h1>Let’s Talk About Your Drilling Needs.</h1>
          <p className="contact-intro-copy">
            Tell us about your well, pump, hydrofracturing, or geothermal
            ground loop project.
          </p>
          <a className="contact-detail" href="tel:+17067546033"><span><FiPhone aria-hidden="true" /></span><div><small>Phone</small><strong>(706) 754-6033</strong></div></a>
          <a className="contact-detail" href="tel:+18002041483"><span><FiPhone aria-hidden="true" /></span><div><small>Toll free</small><strong>(800) 204-1483</strong></div></a>
          <a className="contact-detail" href="mailto:info@davidsonwelldrillinginc.com"><span><FiMail aria-hidden="true" /></span><div><small>Email</small><strong>info@davidsonwelldrillinginc.com</strong></div></a>
          <a className="contact-detail" href="https://maps.google.com/?q=3454+Old+Historic+441,+Turnerville,+GA+30580" target="_blank" rel="noreferrer"><span><FiMapPin aria-hidden="true" /></span><div><small>Address</small><strong>3454 Old Historic 441<br />PO Box 28, Turnerville, GA 30580</strong></div></a>
          <div className="hours-note"><FiClock aria-hidden="true" /><p>Call ahead to confirm current availability.</p></div>
        </div>
        <div className="contact-form-panel" id="quote" data-reveal>
          <div className="contact-form-heading">
            <p className="eyebrow">Send an enquiry</p>
            <h2>How can we help?</h2>
            <p>Fields marked <span aria-hidden="true">*</span> are required.</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="contact-map contact-map-compact">
        <div className="map-copy"><p className="eyebrow">Find us in Turnerville</p><h2>Serving our neighbors across the region.</h2><p>Davidson Well Drilling serves Northeast Georgia and Western South Carolina.</p><a href="https://maps.google.com/?q=3454+Old+Historic+441,+Turnerville,+GA+30580" target="_blank" rel="noreferrer" className="text-link">Get directions <FiMapPin aria-hidden="true" /></a></div>
        <iframe title="Map showing the Davidson Well Drilling address in Turnerville, Georgia" src="https://maps.google.com/maps?q=3454%20Old%20Historic%20441%2C%20Turnerville%2C%20GA%2030580&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </main>
  )
}

export default Contact
