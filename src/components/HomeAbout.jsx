import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import GeologyProfile from './GeologyProfile.jsx'

function HomeAbout() {
  return (
    <section className="dw-about" id="company-introduction" aria-labelledby="about-heading">
      <div className="dw-about-copy" data-reveal>
        <p className="dw-eyebrow">EST. 1973 / Turnerville, Georgia</p>
        <h2 id="about-heading">
          Grounded in experience.
          <span>Built for the work ahead.</span>
        </h2>
        <p>
          For more than five decades, Davidson Well Drilling has served property
          owners, businesses, and project teams across Northeast Georgia and
          Western South Carolina. Regional understanding and practical coordination
          bring clarity to work that begins below ground.
        </p>
        <Link className="dw-text-link" to="/about-us">
          More about our company <FiArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <GeologyProfile />
    </section>
  )
}

export default HomeAbout
