import { FiArrowUpRight, FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function CapabilityList({ items }) {
  return (
    <div className="capability-list">
      {items.map((item, index) => (
        <details className="capability-row" key={item.title} data-reveal>
          <summary>
            <span className="capability-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="capability-summary">
              <span className="capability-title">{item.title}</span>
              <span className="capability-description">{item.description}</span>
            </span>
            <span className="capability-toggle" aria-hidden="true"><FiPlus /></span>
          </summary>
          <div className="capability-expand">
            <div className="capability-expand-inner">
              <p>{item.details}</p>
              <Link to={item.to} className="editorial-link">
                Explore this service <FiArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}

export default CapabilityList
