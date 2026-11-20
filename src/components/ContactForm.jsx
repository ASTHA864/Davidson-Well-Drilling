import { useState } from 'react'
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi'

function ContactForm({ compact = false }) {
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      let result
      try {
        result = await response.json()
      } catch {
        throw new Error('The enquiry service returned an unexpected response.')
      }
      if (!response.ok) throw new Error(result.error || 'Your enquiry could not be sent.')
      setStatus({ type: 'success', message: result.message })
      form.reset()
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'We could not send your enquiry.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className={`contact-form${compact ? ' contact-form-compact' : ''}`} onSubmit={handleSubmit} aria-busy={submitting}>
      <div className="form-grid">
        <label><span className="field-label">Full name <span aria-hidden="true">*</span></span><input autoComplete="name" name="name" required placeholder="Your name" /></label>
        <label><span className="field-label">Email address <span aria-hidden="true">*</span></span><input autoComplete="email" name="email" type="email" required placeholder="you@example.com" /></label>
        <label><span className="field-label">Phone number</span><input autoComplete="tel" name="phone" type="tel" placeholder="(555) 555-5555" /></label>
        <label><span className="field-label">Service interested in <span aria-hidden="true">*</span></span>
          <select name="service" defaultValue="" required>
            <option value="">Select a service</option>
            <option>Water Well Drilling</option>
            <option>Pump Sales &amp; Service</option>
            <option>Hydrofracturing</option>
            <option>Geothermal Ground Loop Systems</option>
            <option>Other / Not Sure</option>
          </select>
        </label>
        <label className="form-subject"><span className="field-label">Subject <span aria-hidden="true">*</span></span><input name="subject" required maxLength="160" placeholder="How can we help?" /></label>
        <label className="form-message"><span className="field-label">Message <span aria-hidden="true">*</span></span><textarea name="message" rows="5" required placeholder="Tell us a little about your project" /></label>
      </div>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send enquiry'} <FiArrowUpRight aria-hidden="true" /></button>
        <p className="form-note">Your message will be sent to the Davidson Well Drilling team.</p>
      </div>
      {status && (
        <p className={`form-feedback form-feedback-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
          {status.type === 'success' && <FiCheckCircle aria-hidden="true" />}
          {status.message}
        </p>
      )}
    </form>
  )
}

export default ContactForm
