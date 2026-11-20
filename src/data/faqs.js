export const faqItems = [
  {
    question: 'Where is Davidson Well Drilling based?',
    answer: 'Davidson Well Drilling is based in Turnerville, Georgia, and serves Northeast Georgia and Western South Carolina.',
    category: 'general',
  },
  {
    question: 'When was Davidson Well Drilling established?',
    answer: 'Davidson Well Drilling is a family-owned and operated business serving the region since 1973.',
    category: 'general',
  },
  {
    question: 'Which pumps does Davidson carry and service?',
    answer: 'Davidson carries, services, and installs Franklin Electric submersible pumps for water well systems. Contact the team about current availability.',
    category: 'general',
  },
  {
    question: 'How deep will a water well need to be?',
    answer: 'Well depth and casing requirements depend on the local geology and water conditions at the property. Davidson can discuss the requirements for your site.',
    category: 'water-well',
  },
  {
    question: 'Does Davidson drill residential and commercial water wells?',
    answer: 'Davidson provides drilled water wells and well systems for residential and commercial water supply.',
    category: 'water-well',
  },
  {
    question: 'What is hydrofracturing?',
    answer: 'Hydrofracturing uses water injected under pressure in an existing well to help clear or open water-bearing fractures.',
    category: 'hydrofracturing',
  },
  {
    question: 'Can hydrofracturing guarantee more water flow?',
    answer: 'No. It may be considered for some low-yield wells, but the result depends on the well and its geology. Improved flow is not guaranteed.',
    category: 'hydrofracturing',
  },
  {
    question: 'Does Davidson use additives for hydrofracturing?',
    answer: 'Davidson describes its hydrofracturing process as using clean water without additives.',
    category: 'hydrofracturing',
  },
  {
    question: 'What work does Davidson provide for geothermal ground loops?',
    answer: 'Davidson provides vertical ground loop drilling and down-hole installation, including the transfer medium listed for this service.',
    category: 'geothermal',
  },
  {
    question: 'Who designs and installs the complete HVAC system?',
    answer: 'The geothermal or HVAC contractor handles the system design, equipment, and complete HVAC installation. Davidson coordinates the drilling and down-hole installation scope with the project team.',
    category: 'geothermal',
  },
  {
    question: 'What does down-hole installation include?',
    answer: 'Down-hole installation supports the vertical ground loop. Confirm the transfer medium and other project-specific details with Davidson and your geothermal or HVAC contractor.',
    category: 'geothermal',
  },
  {
    question: 'What does vertical ground loop drilling involve?',
    answer: 'It is drilling for vertical geothermal loops as part of a system planned with a geothermal or HVAC contractor.',
    category: 'geothermal',
  },
]

export const faqCategories = [
  { id: 'general', label: 'General Questions' },
  { id: 'water-well', label: 'Water Well Drilling' },
  { id: 'hydrofracturing', label: 'Hydrofracturing' },
  { id: 'geothermal', label: 'Geothermal Ground Loop Systems' },
].map((category) => ({
  ...category,
  items: faqItems.filter((item) => item.category === category.id),
}))
