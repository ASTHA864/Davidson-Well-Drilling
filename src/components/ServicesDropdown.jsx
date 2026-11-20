import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi'
import gsap from 'gsap'
import { NavLink } from 'react-router-dom'

const serviceLinks = [
  ['All Services', '/services'],
  ['Water Well Drilling', '/water-well-drilling'],
  ['Hydrofracturing', '/hydro-fracturing'],
  ['Geothermal Ground Loop Systems', '/geothermal-ground-loops'],
]

function ServicesDropdown({ onNavigate, active }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    function handlePointerDown(event) {
      if (!dropdownRef.current?.contains(event.target)) setIsOpen(false)
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !menuRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const links = menuRef.current.querySelectorAll('.dw-dropdown-inner a')
    const animation = gsap.timeline()
      .fromTo(
        menuRef.current,
        { autoAlpha: 0, y: 8, scale: 0.985 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.24, ease: 'power2.out' },
      )
      .fromTo(
        links,
        { autoAlpha: 0, y: 7 },
        { autoAlpha: 1, y: 0, duration: 0.18, stagger: 0.035, ease: 'power2.out' },
        '-=0.1',
      )
    return () => animation.revert()
  }, [isOpen])

  function closeDropdown() {
    setIsOpen(false)
    onNavigate()
  }

  return (
    <div className={`dw-dropdown${isOpen ? ' is-open' : ''}${active ? ' active' : ''}`} ref={dropdownRef} data-nav-item>
      <button
        ref={toggleRef}
        className={`dw-nav-link dw-dropdown-toggle${active ? ' active' : ''}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="services-menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        Services <FiChevronDown aria-hidden="true" />
      </button>
      <div className="dw-dropdown-menu" id="services-menu" ref={menuRef}>
        <div className="dw-dropdown-inner">
          {serviceLinks.map(([label, to]) => (
            <NavLink key={label} to={to} onClick={closeDropdown}>
              <span>{label}</span>
              <FiArrowUpRight aria-hidden="true" />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesDropdown
