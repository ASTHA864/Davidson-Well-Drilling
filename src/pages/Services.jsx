import { FiArrowRight, FiBriefcase, FiDroplet, FiLayers, FiMap, FiTool, FiTrendingUp } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'

const services = [
  { icon: FiDroplet, title: 'Drilled Water Wells', description: 'Six-inch drilled water wells for residential and commercial water supply. The original site notes casing to bedrock, typically around 70–100 feet in surrounding areas.', to: '/contact#quote' },
  { icon: FiBriefcase, title: 'Residential & Commercial Systems', description: 'Complete water well systems for homes, businesses, and commercial properties.', to: '/contact#quote' },
  { icon: FiTrendingUp, image: '/images/hydro-frac01.jpg', title: 'Hydrofracturing', description: 'Water-only hydrofracturing may help improve flow in certain low-yield wells. Results depend on well conditions.', to: '/hydro-fracturing' },
  { icon: FiLayers, image: '/images/geotherm.jpg', title: 'Geothermal Ground Loops', description: 'Vertical ground loop drilling and down-hole installation, coordinated with your geothermal or HVAC contractor.', to: '/geothermal-products' },
  { icon: FiTool, image: '/images/0002.jpg', title: 'Pump Sales & Service', description: 'Franklin Electric submersible pumps are carried, serviced, and installed by the company.', to: '/geothermal-products' },
  { icon: FiMap, image: '/images/0004.jpg', title: 'Trenching & Excavating', description: 'Trenching and excavation work are part of the company’s listed well-related services.', to: '/contact#quote' },
  { icon: FiDroplet, title: 'Well Abandonment', description: 'Proper abandonment is important for protecting groundwater. Contact the team to discuss your specific well and local requirements.', to: '/contact#quote' },
]

function Services() {
  return (
    <main>
      <HeroSection eyebrow="Our services" title="Grounded in good work." description="Well drilling, pump service, hydrofracturing, and more for homes and businesses across our service area." image="/images/header02.jpg" secondaryLabel="Contact us" secondaryTo="/contact" compact />
      <section className="section-wrap page-intro">
        <p className="eyebrow">How we can help</p>
        <h2>Practical solutions for your property.</h2>
        <p>Our services cover water wells, well systems, pumps, and vertical geothermal ground loops. Tell us about your project and we can discuss the scope with you.</p>
      </section>
      <section className="section-wrap services-page-grid">
        {services.map((service) => <ServiceCard key={service.title} {...service} />)}
      </section>
      <section className="service-note section-wrap">
        <div className="service-note-icon"><FiDroplet aria-hidden="true" /></div>
        <div><h2>Looking for water treatment or testing?</h2><p>The company’s original website says it does not currently offer water testing, treatment, or maintenance. Contact Davidson directly to confirm current availability or ask about referrals.</p></div>
        <Link className="text-link" to="/contact">Contact us <FiArrowRight aria-hidden="true" /></Link>
      </section>
      <CTASection />
    </main>
  )
}

export default Services
