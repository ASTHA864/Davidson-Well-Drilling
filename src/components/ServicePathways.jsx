import { FiDroplet, FiTool, FiTrendingUp } from 'react-icons/fi'

const pathways = [
  {
    icon: FiDroplet,
    title: 'Water supply',
    description: 'Drilled wells and complete residential and commercial water well systems.',
  },
  {
    icon: FiTrendingUp,
    title: 'Well service',
    description: 'Water-only hydrofracturing may help improve flow in some low-yield wells.',
  },
  {
    icon: FiTool,
    title: 'Ground loop installation',
    description: 'Vertical drilling and down-hole installation coordinated with geothermal or HVAC contractors.',
  },
]

function ServicePathways({ title, description, className = '' }) {
  return (
    <section className={`service-pathways ${className}`} aria-labelledby="pathways-heading">
      <div className="service-pathways-intro" data-reveal>
        <p className="eyebrow">How we work</p>
        <h2 id="pathways-heading">{title}</h2>
        <p>{description}</p>
      </div>
      <ol className="pathway-list">
        {pathways.map(({ icon: Icon, title: itemTitle, description: itemDescription }, index) => {
          return (
            <li className="pathway-item" key={itemTitle} data-reveal>
              <span className="pathway-marker">
                <Icon aria-hidden="true" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </span>
              <div>
                <h3>{itemTitle}</h3>
                <p>{itemDescription}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default ServicePathways
