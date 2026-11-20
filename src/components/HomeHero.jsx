import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <section className="dw-hero" aria-labelledby="home-hero-title">
      <img
        className="dw-hero-image"
        src="/images/optimized/rural-drilling-rig.jpg"
        alt="Representative image of a professional drilling rig operating at a rural site"
        fetchPriority="high"
        decoding="async"
        data-parallax
      />
      <div className="dw-hero-shade" aria-hidden="true" />
      <div className="dw-hero-inner">
        <div className="dw-hero-content" data-reveal>
          <p className="dw-hero-badge"><span>EST. 1973</span><span>FAMILY OWNED</span></p>
          <h1 id="home-hero-title">Engineering <em>what&apos;s beneath</em> the surface.</h1>
          <p className="dw-hero-description">
            From dependable water well drilling to geothermal ground loop installations,
            Davidson Well Drilling brings experience and precision to every project.
          </p>
          <div className="dw-hero-actions">
            <Link className="dw-hero-cta" to="/services">Explore Our Services <FiArrowUpRight aria-hidden="true" /></Link>
            <Link className="dw-hero-secondary" to="/contact#quote">Get In Touch</Link>
          </div>
        </div>
        <div className="dw-hero-rail" aria-hidden="true">
          <span>NE GA</span><i /><span>FIELD 01</span>
        </div>
      </div>
      <div className="dw-hero-caption">
        <span>Representative field image</span>
        <span>34.7610° N&nbsp;&nbsp; 83.4760° W</span>
      </div>
      <a className="dw-hero-scroll" href="#company-introduction" aria-label="Scroll to company introduction">
        <span>Scroll</span><i />
      </a>
    </section>
  )
}

export default HomeHero
