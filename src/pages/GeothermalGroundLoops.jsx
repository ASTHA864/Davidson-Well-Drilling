import { useRef } from 'react'
import { FiCheck, FiCompass, FiTool } from 'react-icons/fi'
import RelatedServices from '../components/RelatedServices.jsx'
import ServiceFAQSection from '../components/ServiceFAQSection.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

const geothermalFaqs = [
  {
    question: 'What does vertical ground loop drilling involve?',
    answer: 'It is drilling for vertical geothermal loops as part of a system planned with a geothermal or HVAC contractor.',
  },
  {
    question: 'What does Davidson provide for down-hole installation?',
    answer: 'Davidson provides down-hole installation and lists transfer medium as part of this service. Confirm project details with the team.',
  },
  {
    question: 'Who handles the complete HVAC system?',
    answer: 'The geothermal or HVAC contractor handles system design, equipment, and HVAC installation. Davidson’s role is drilling and down-hole installation.',
  },
]

function GeothermalGroundLoops() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="service-detail-page geothermal-loop-page" ref={pageRef}>
      <header className="geothermal-loop-hero">
        <div className="geothermal-loop-copy" data-reveal>
          <p className="eyebrow">Geothermal ground loop systems</p>
          <h1>Geothermal Ground Loop <span>Systems.</span></h1>
          <p className="service-detail-lede">
            Davidson provides vertical drilling and down-hole installation in coordination with your geothermal or HVAC contractor.
          </p>
        </div>
        <div className="geothermal-role-diagram glass-panel" data-reveal>
          <p className="eyebrow">Project roles</p>
          <div className="role-diagram-line" aria-hidden="true" />
          <article>
            <span>01</span>
            <div><strong>Drilling and down-hole work</strong><small>Davidson Well Drilling</small></div>
            <FiTool aria-hidden="true" />
          </article>
          <article>
            <span>02</span>
            <div><strong>System design and HVAC</strong><small>Your geothermal or HVAC contractor</small></div>
            <FiCompass aria-hidden="true" />
          </article>
          <p className="role-diagram-note">The project scope is coordinated with the customer and contractor.</p>
        </div>
      </header>

      <section className="geothermal-understanding section-wrap" data-reveal>
        <div className="geothermal-section-number">01<span>/05</span></div>
        <div>
          <p className="eyebrow">Understanding the system</p>
          <h2>A ground loop is one part of a larger HVAC project.</h2>
        </div>
        <p>
          Davidson Well Drilling provides vertical ground loop drilling and down-hole installation. The geothermal or HVAC contractor plans and installs the complete heating and cooling system.
        </p>
      </section>

      <section className="geothermal-detail section-wrap" id="vertical-drilling" data-reveal>
        <div className="geothermal-detail-heading">
          <p className="eyebrow">02 / Vertical ground loop drilling</p>
          <h2>Drilling for the vertical loop portion of the project.</h2>
        </div>
        <div className="geothermal-detail-copy">
          <p>Davidson drills for vertical geothermal ground loops as part of a system planned with the customer’s geothermal or HVAC contractor.</p>
          <p>Site-specific requirements and the drilling scope are coordinated with the project team. No fixed depth or system outcome is promised.</p>
        </div>
      </section>

      <section className="geothermal-detail geothermal-detail-tint" id="down-hole-installation" data-reveal>
        <div className="geothermal-detail-heading">
          <p className="eyebrow">03 / Down-hole installation</p>
          <h2>Installation work that supports a vertical ground loop.</h2>
        </div>
        <div className="geothermal-detail-copy">
          <p>Davidson’s listed geothermal scope includes down-hole installation for vertical ground loop systems.</p>
          <p>The installation requirements are discussed with the customer and geothermal or HVAC contractor as part of project coordination.</p>
        </div>
      </section>

      <section className="geothermal-detail section-wrap" id="transfer-medium" data-reveal>
        <div className="geothermal-detail-heading">
          <p className="eyebrow">04 / Transfer medium</p>
          <h2>Confirm project-specific details with the team.</h2>
        </div>
        <div className="geothermal-detail-copy">
          <p>Davidson lists transfer medium as part of its down-hole installation service.</p>
          <p>The available information does not specify the medium or project specifications. Confirm those details with Davidson and the geothermal or HVAC contractor.</p>
        </div>
      </section>

      <section className="geothermal-responsibilities" id="project-responsibilities" aria-labelledby="geothermal-roles-heading">
        <div className="geothermal-responsibilities-inner">
          <div className="geothermal-responsibilities-heading" data-reveal>
            <p className="eyebrow">05 / Project responsibilities</p>
            <h2 id="geothermal-roles-heading">Clear roles for a coordinated project.</h2>
          </div>
          <div className="geothermal-responsibility-grid">
            <article data-reveal>
              <h3>Davidson Well Drilling</h3>
              <ul>
                <li><FiCheck aria-hidden="true" />Vertical ground loop drilling</li>
                <li><FiCheck aria-hidden="true" />Down-hole installation</li>
                <li><FiCheck aria-hidden="true" />Related installation scope, confirmed for the project</li>
              </ul>
            </article>
            <article data-reveal>
              <h3>Geothermal/HVAC Contractor</h3>
              <ul>
                <li><FiCheck aria-hidden="true" />Complete HVAC system design</li>
                <li><FiCheck aria-hidden="true" />System equipment</li>
                <li><FiCheck aria-hidden="true" />HVAC installation</li>
              </ul>
            </article>
          </div>
          <p className="geothermal-coordination-note" data-reveal>
            Davidson coordinates drilling and down-hole installation with the customer and contractor. The contractor remains responsible for the complete HVAC system.
          </p>
        </div>
      </section>

      <ServiceFAQSection
        description="Learn what Davidson provides and which work belongs to the geothermal or HVAC contractor."
        items={geothermalFaqs}
        title="Ground loop system questions."
      />
      <RelatedServices current="/geothermal-ground-loops" />
    </main>
  )
}

export default GeothermalGroundLoops
