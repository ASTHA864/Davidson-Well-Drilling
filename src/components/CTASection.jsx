import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function CTASection({ title = 'Let’s talk about your project.', text = 'Tell us what you need and our team can help you explore the next steps.', image = '/images/header02.jpg' }) {
  return (
    <section className="cta-section" style={{ backgroundImage: `linear-gradient(90deg, rgba(8, 36, 61, .95), rgba(8, 36, 61, .72)), url("${image}")` }}>
      <div className="section-wrap cta-inner">
        <div><p className="eyebrow eyebrow-light">Talk with our team</p><h2>{title}</h2><p>{text}</p></div>
        <Link className="button button-light" to="/contact#quote">Request a quote <FiArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

export default CTASection
