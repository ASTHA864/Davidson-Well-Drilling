import { FiActivity, FiDroplet, FiLayers } from 'react-icons/fi'

export const drillingServices = [
  {
    number: '01',
    icon: FiDroplet,
    title: 'Water Well Drilling',
    description: 'Drilled water wells and well systems for residential and commercial water supply.',
    details: 'Well depth and project requirements depend on local geology and water conditions.',
    visual: 'well',
    to: '/water-well-drilling',
  },
  {
    number: '02',
    icon: FiActivity,
    title: 'Hydrofracturing',
    description: 'Water-only hydrofracturing may be considered for some low-yield wells.',
    details: 'Results depend on the condition of the well and local geology; improved flow is not guaranteed.',
    visual: 'fractures',
    to: '/hydro-fracturing',
  },
  {
    number: '03',
    icon: FiLayers,
    title: 'Geothermal Ground Loop Systems',
    description: 'Vertical ground loop drilling and down-hole installation coordinated with your geothermal or HVAC contractor.',
    details: 'Davidson handles drilling and down-hole installation; the contractor handles system design and complete HVAC installation.',
    visual: 'loop',
    to: '/geothermal-ground-loops',
  },
]
