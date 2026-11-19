import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ServiceCard({ icon: Icon, image, title, description, to = '/contact#quote', linkLabel = 'Learn more' }) {
  return (
    <article className="service-card">
      {image ? (
        <Link to={to} className="service-image-link" aria-label={`Learn more about ${title}`}>
          <img className="service-image" src={image} alt="" loading="lazy" />
        </Link>
      ) : (
        <div className="service-icon" aria-hidden="true">{Icon && <Icon />}</div>
      )}
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="text-link" to={to}>{linkLabel} <FiArrowUpRight aria-hidden="true" /></Link>
      </div>
    </article>
  )
}

export default ServiceCard
