import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function HomeAbout() {
  return (
    <section className="dw-about" aria-labelledby="about-heading">
      <div className="dw-about-copy" data-reveal>
        <p className="dw-eyebrow">A local team you can count on</p>
        <h2 id="about-heading">
          Experience You Can Trust.
          <span>Quality You Can Depend On.</span>
        </h2>
        <p>
          Davidson works with property owners, businesses, and geothermal or
          HVAC contractors on drilling and ground loop projects. Each site has
          its own conditions, so the project scope is discussed with the team.
        </p>
        <Link className="dw-text-link" to="/about-us">
          More about our company <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <figure className="dw-about-photo" data-reveal>
        <img
          src="/images/optimized/rural-drilling-rig.jpg"
          alt="Representative image of drilling equipment in a rural field"
          loading="lazy"
        />
        <figcaption>
          <span className="dw-about-photo-mark" aria-hidden="true">ILLUSTRATIVE</span>
          <span>Well drilling equipment</span>
        </figcaption>
      </figure>
    </section>
  )
}

export default HomeAbout
