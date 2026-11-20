function ServiceIllustration({ variant, className = '' }) {
  const illustrations = {
    well: {
      label: 'Illustrative water well cross-section',
      surface: 'M0 92 C60 82 115 99 180 89 C245 79 302 97 360 86',
      strata: [
        { y: 95, height: 54, className: 'service-strata-top' },
        { y: 149, height: 64, className: 'service-strata-mid' },
        { y: 213, height: 67, className: 'service-strata-deep' },
      ],
      detail: <><path d="M170 58V248" className="service-well-casing" /><path d="M180 199H270" className="service-water-line" /><path d="M170 223L145 211L128 224M190 232L217 219L237 231" className="service-fracture-lines" /></>,
    },
    fractures: {
      label: 'Illustrative well hydrofracturing cross-section',
      surface: 'M0 92 C60 82 115 99 180 89 C245 79 302 97 360 86',
      strata: [
        { y: 95, height: 54, className: 'service-strata-top' },
        { y: 149, height: 64, className: 'service-strata-mid' },
        { y: 213, height: 67, className: 'service-strata-deep' },
      ],
      detail: <><path d="M170 58V248" className="service-well-casing" /><path d="M170 184L132 169L112 179L91 158M170 196L205 177L226 185L255 160M170 212L139 229L122 247M170 214L205 231L231 251" className="service-fracture-lines service-fracture-active" /><circle cx="170" cy="199" r="13" className="service-pressure-ring" /></>,
    },
    loop: {
      label: 'Illustrative vertical geothermal ground loop cross-section',
      surface: 'M0 92 C60 82 115 99 180 89 C245 79 302 97 360 86',
      strata: [
        { y: 95, height: 54, className: 'service-strata-top' },
        { y: 149, height: 64, className: 'service-strata-mid' },
        { y: 213, height: 67, className: 'service-strata-deep' },
      ],
      detail: <><path d="M150 103V220C150 251 210 251 210 220V103" className="service-ground-loop" /><path d="M150 127V194M210 222V158" className="service-loop-flow" /><circle cx="150" cy="112" r="5" className="service-loop-node" /><circle cx="210" cy="112" r="5" className="service-loop-node" /></>,
    },
  }
  const illustration = illustrations[variant] || illustrations.well

  return (
    <svg
      className={`service-illustration-svg ${className}`.trim()}
      viewBox="0 0 360 280"
      role="img"
      aria-label={`${illustration.label}, not to scale`}
    >
      <path d={illustration.surface} className="service-ground-line" />
      {illustration.strata.map((stratum) => (
        <rect key={stratum.className} x="0" y={stratum.y} width="360" height={stratum.height} className={stratum.className} />
      ))}
      <path d="M0 213H360" className="service-water-table" />
      {illustration.detail}
      <path d="M20 264H340" className="service-depth-line" />
      <circle cx="20" cy="264" r="2" className="service-depth-dot" />
      <circle cx="340" cy="264" r="2" className="service-depth-dot" />
      <text x="20" y="80" className="service-svg-label">SURFACE</text>
      <text x="20" y="205" className="service-svg-label">GEOLOGY</text>
    </svg>
  )
}

export default ServiceIllustration
