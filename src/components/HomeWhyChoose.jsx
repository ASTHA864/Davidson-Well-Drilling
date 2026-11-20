import { FiMapPin, FiTool, FiUsers } from 'react-icons/fi'

const reasons = [
  {
    icon: FiUsers,
    title: 'Family-owned since 1973',
    description: 'A family-owned and operated business based in Turnerville, Georgia.',
  },
  {
    icon: FiMapPin,
    title: 'Serving our region',
    description: 'Davidson serves Northeast Georgia and Western South Carolina.',
  },
  {
    icon: FiTool,
    title: 'Coordinated project scope',
    description: 'For geothermal work, drilling and installation are coordinated with the customer and HVAC contractor.',
  },
]

function HomeWhyChoose() {
  return (
    <section className="dw-why" aria-labelledby="why-heading">
      <div className="dw-why-inner">
        <div className="dw-why-intro" data-reveal>
          <p className="dw-eyebrow">Why Davidson</p>
          <h2 id="why-heading">Local experience.<br />Clear coordination.</h2>
        </div>
        <div className="dw-why-list">
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <article className="dw-why-item" data-reveal key={title}>
              <span className="dw-why-number">{String(index + 1).padStart(2, '0')}</span>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeWhyChoose
