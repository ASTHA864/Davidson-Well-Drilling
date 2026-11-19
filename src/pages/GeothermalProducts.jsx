import { FiArrowRight, FiCheck, FiTool } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection.jsx'
import CTASection from '../components/CTASection.jsx'

function GeothermalProducts() {
  return (
    <main>
      <HeroSection eyebrow="Geothermal & products" title="The right work, below ground." description="Vertical geothermal ground loop drilling and down-hole installation, plus Franklin Electric submersible pump sales and service." image="/images/geotherm.jpg" secondaryLabel="Contact our team" secondaryTo="/contact" compact />
      <section className="section-wrap geothermal-intro">
        <div className="detail-copy">
          <p className="eyebrow">Ground source heat exchange</p>
          <h2>Geothermal ground loop systems.</h2>
          <p>Ground-source heat pump systems exchange heat with the earth through a buried loop. In broad terms, a heat pump moves heat between a building and the ground as heating or cooling is needed.</p>
          <p>Davidson Well Drilling provides drilling and down-hole installation of vertical ground loop systems and transfer medium. We can work with your geothermal or heating-and-air contractor; complete HVAC system installation is handled by your contractor.</p>
          <ul className="check-list"><li><FiCheck aria-hidden="true" /> Vertical loop drilling</li><li><FiCheck aria-hidden="true" /> Down-hole installation</li><li><FiCheck aria-hidden="true" /> Coordination with your geothermal or HVAC contractor</li></ul>
          <Link className="text-link" to="/contact">Discuss a geothermal project <FiArrowRight aria-hidden="true" /></Link>
        </div>
        <figure className="geothermal-image"><img src="/images/geotherm.jpg" alt="Vertical geothermal ground loop installation" loading="lazy" /><figcaption>Vertical ground loop installation</figcaption></figure>
      </section>
      <section className="product-band">
        <div className="section-wrap product-layout">
          <div><p className="eyebrow eyebrow-light">Pump products &amp; service</p><h2>Franklin Electric submersible pumps.</h2><p>The company says it carries, services, and installs Franklin Electric submersible pumps for water well systems. Contact Davidson for current product availability and to discuss your pump needs.</p><a className="button button-light" href="tel:+17067546033">Call (706) 754-6033 <FiArrowRight aria-hidden="true" /></a></div>
          <figure><img src="/images/0002.jpg" alt="Pump equipment carried and serviced by Davidson Well Drilling" loading="lazy" /><figcaption><FiTool aria-hidden="true" /> Pump sales, installation &amp; service</figcaption></figure>
        </div>
      </section>
      <section className="section-wrap product-extra">
        <div className="product-extra-image"><img src="/images/0005.jpg" alt="Well drilling project equipment" loading="lazy" /></div>
        <div><p className="eyebrow">More for your well</p><h2>Wellhead finishing stones.</h2><p>Davidson also offers rocks for dressing up a wellhead. Contact the team to ask about available options.</p><Link className="text-link" to="/services">View all services <FiArrowRight aria-hidden="true" /></Link></div>
      </section>
      <CTASection title="Planning a geothermal or water well project?" text="Talk with our team about drilling, down-hole installation, and pump service." />
    </main>
  )
}

export default GeothermalProducts
