import { useRef, useState } from 'react'

const geologyStages = [
  {
    id: 'surface',
    label: 'Site conditions',
    description: 'Access, terrain, and property conditions shape how each project is approached.',
  },
  {
    id: 'well',
    label: 'Well construction',
    description: 'Well depth and construction depend on the local geology and water conditions.',
  },
  {
    id: 'water',
    label: 'Groundwater',
    description: 'Water-bearing fractures vary by location; no two sites are exactly alike.',
  },
]

function GeologyProfile() {
  const [activeStage, setActiveStage] = useState(geologyStages[0].id)
  const tabRefs = useRef([])
  const activeStageIndex = geologyStages.findIndex((stage) => stage.id === activeStage)

  function handleTabKeyDown(event, index) {
    let nextIndex = index

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % geologyStages.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + geologyStages.length) % geologyStages.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = geologyStages.length - 1
    else return

    event.preventDefault()
    setActiveStage(geologyStages[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="geology-profile" data-active={activeStage}>
      <figure className="geology-profile-figure">
        <div className="geology-profile-meta"><span>FIELD SECTION / 01</span><span>Illustrative · not to scale</span></div>
        <svg viewBox="0 0 640 390" role="img" aria-labelledby="geology-profile-title geology-profile-description">
          <title id="geology-profile-title">Illustrative well and geological cross-section</title>
          <desc id="geology-profile-description">A conceptual diagram of a well crossing underground layers and reaching water-bearing rock.</desc>
          <rect x="0" y="106" width="640" height="67" className="geology-layer geology-layer-surface" />
          <rect x="0" y="173" width="640" height="79" className="geology-layer geology-layer-rock" />
          <rect x="0" y="252" width="640" height="138" className="geology-layer geology-layer-water" />
          <path d="M0 106 C90 99 155 112 240 104 C340 95 422 110 510 102 C560 98 600 101 640 96" className="geology-ground-line" />
          <path d="M0 228 H640" className="geology-water-line" />
          <rect x="298" y="70" width="44" height="274" rx="3" className="geology-well-casing" />
          <rect x="310" y="71" width="20" height="272" className="geology-well-core" />
          <path d="M299 277 L262 259 L237 269 L214 246 M341 289 L378 270 L402 279 L430 253" className="geology-fracture" />
          <circle cx="238" cy="269" r="5" className="geology-water-point" />
          <circle cx="402" cy="279" r="5" className="geology-water-point" />
          <text x="28" y="90" className="geology-svg-label">SURFACE</text>
          <text x="28" y="218" className="geology-svg-label">WATER TABLE</text>
          <text x="355" y="338" className="geology-svg-label">WELL CASING</text>
          <path d="M28 369 H612" className="geology-measure-line" />
          <circle cx="28" cy="369" r="2" className="geology-measure-dot" />
          <circle cx="612" cy="369" r="2" className="geology-measure-dot" />
        </svg>
        <figcaption>Ground conditions are site-specific and can vary across a property.</figcaption>
      </figure>

      <div className="geology-profile-controls">
        <div className="geology-profile-tabs" role="tablist" aria-label="Explore the well cross-section">
          {geologyStages.map((stage, index) => (
            <button
              key={stage.id}
              ref={(element) => { tabRefs.current[index] = element }}
              id={`geology-tab-${stage.id}`}
              className={`geology-profile-tab${activeStage === stage.id ? ' is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activeStage === stage.id}
              aria-controls="geology-stage-panel"
              tabIndex={activeStage === stage.id ? 0 : -1}
              onClick={() => setActiveStage(stage.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span>0{index + 1}</span>{stage.label}
            </button>
          ))}
        </div>
        <div
          id="geology-stage-panel"
          className="geology-profile-panel"
          role="tabpanel"
          aria-labelledby={`geology-tab-${activeStage}`}
          tabIndex={0}
        >
          <p>{geologyStages[activeStageIndex].description}</p>
        </div>
      </div>
    </div>
  )
}

export default GeologyProfile
