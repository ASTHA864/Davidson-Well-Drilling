import { FiCheck, FiDroplet, FiHeart } from 'react-icons/fi'
import HeroSection from '../components/HeroSection.jsx'
import CTASection from '../components/CTASection.jsx'

function AboutUs() {
  return (
    <main>
      <HeroSection eyebrow="About Davidson Well Drilling" title="A family business, rooted here." description="Serving Northeast Georgia and Western South Carolina with well drilling and water system services since 1973." image="/images/header02.jpg" secondaryLabel="Talk with us" secondaryTo="/contact" compact />
      <section className="section-wrap about-story">
        <div className="about-story-image"><img src="/images/0001.jpg" alt="Davidson Well Drilling crew and well drilling equipment" loading="lazy" /><span>Serving our community since 1973</span></div>
        <div className="detail-copy">
          <p className="eyebrow">Our story</p>
          <h2>Built on local knowledge and word of mouth.</h2>
          <p>Davidson Well Drilling is a family-owned and operated business serving Northeast Georgia and Western South Carolina since 1973. The original company website describes a business whose reputation has grown through satisfied customers and word of mouth.</p>
          <p>Based in Turnerville, Georgia, the company provides drilled water wells, residential and commercial well systems, pump sales and service, hydrofracturing, and geothermal ground loop drilling and installation.</p>
          <p>Barry Davidson is identified on the original site as Baroid-certified for geothermal ground loop installation. Davidson Well Drilling is licensed in Georgia and South Carolina and fully insured, according to its original company information.</p>
        </div>
      </section>
      <section className="section-band">
        <div className="section-wrap values-grid">
          <div><p className="eyebrow">What guides our work</p><h2>Our neighbors deserve thoughtful service.</h2><p>The company’s original website describes its customers as neighbors, friends, and family, and a commitment to doing its best to provide what customers need with good service.</p></div>
          <div className="value-card"><FiHeart aria-hidden="true" /><h3>Personal service</h3><p>A family-owned team serving its local communities.</p></div>
          <div className="value-card"><FiDroplet aria-hidden="true" /><h3>Practical expertise</h3><p>Well systems, pump work, hydrofracturing, and geothermal loop installation.</p></div>
          <div className="value-card"><FiCheck aria-hidden="true" /><h3>Professional commitment</h3><p>Licensed in Georgia and South Carolina, and fully insured, as stated on the company’s original site.</p></div>
        </div>
      </section>
      <section className="section-wrap about-gallery">
        <div><p className="eyebrow">Our work</p><h2>Experience, out in the field.</h2></div>
        <div className="about-gallery-images"><img src="/images/0004.jpg" alt="Well drilling equipment" loading="lazy" /><img src="/images/0005.jpg" alt="Drilling truck on a project site" loading="lazy" /><img src="/images/header01.jpg" alt="Davidson Well Drilling equipment" loading="lazy" /></div>
      </section>
      <CTASection title="Let’s talk about your water needs." text="Call or send us a message to discuss well drilling, pump service, or ground loop installation." />
    </main>
  )
}

export default AboutUs
