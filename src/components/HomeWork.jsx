import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { workGallery } from '../data/workGallery.js'

function HomeWork() {
  return (
    <section className="dw-work" id="our-work" aria-labelledby="work-heading">
      <div className="dw-section-heading work-preview-heading" data-reveal>
        <div>
          <p className="dw-eyebrow">Our work</p>
          <h2 id="work-heading">Drilling equipment in the field.</h2>
        </div>
        <p className="dw-work-description">
          Representative images illustrate the work; they are not documented Davidson projects.
        </p>
      </div>
      <div className="dw-work-grid">
        {workGallery.slice(0, 2).map((image) => (
          <figure className="dw-work-image" data-reveal key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      <Link className="work-preview-link" to="/our-work">
        Explore our work <FiArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  )
}

export default HomeWork
