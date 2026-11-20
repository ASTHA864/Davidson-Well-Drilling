import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ProjectInvitation({
  eyebrow = 'Discuss your project',
  title = 'Have a Drilling Project in Mind?',
  description = 'Let’s discuss your water well drilling or geothermal ground loop requirements.',
  actionLabel = 'Talk With Our Team',
}) {
  return (
    <section className="project-invitation" aria-labelledby="project-invitation-heading" data-reveal>
      <div className="project-invitation-glow" aria-hidden="true" />
      <div className="project-invitation-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="project-invitation-heading">{title}</h2>
        <p>{description}</p>
      </div>
      <Link className="project-invitation-action" to="/contact#quote">
        {actionLabel}
        <span aria-hidden="true"><FiArrowUpRight /></span>
      </Link>
    </section>
  )
}

export default ProjectInvitation
