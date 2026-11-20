import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { Link, NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import ServicesDropdown from './ServicesDropdown.jsx'

function Navbar() {
  const [openedLocationKey, setOpenedLocationKey] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuToggleRef = useRef(null)
  const headerRef = useRef(null)
  const navigationRef = useRef(null)
  const activeIndicatorRef = useRef(null)
  const { pathname, key } = useLocation()
  const menuOpen = openedLocationKey === key
  const servicesActive = [
    '/services',
    '/water-well-drilling',
    '/hydro-fracturing',
    '/geothermal-ground-loops',
  ].includes(pathname)

  function moveIndicator(target, duration = 0.3) {
    const navigation = navigationRef.current
    const indicator = activeIndicatorRef.current
    if (!navigation || !indicator || !target) return

    const navigationBounds = navigation.getBoundingClientRect()
    const targetBounds = target.getBoundingClientRect()
    const position = {
      x: targetBounds.left - navigationBounds.left,
      width: targetBounds.width,
      autoAlpha: 1,
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.set(indicator, position)
    else gsap.to(indicator, { ...position, duration, ease: 'power3.out', overwrite: true })
  }

  function activeNavigationItem() {
    return navigationRef.current?.querySelector('[data-nav-item].active')
  }

  function handleNavigationPointerOver(event) {
    if (event.pointerType === 'touch' || window.innerWidth <= 900) return
    const target = event.target.closest('[data-nav-item]')
    if (target && !target.contains(event.relatedTarget)) moveIndicator(target)
  }

  function handleNavigationPointerMove(event) {
    if (event.pointerType === 'touch' || window.innerWidth <= 900 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const target = event.target.closest('[data-nav-item]')
    if (!target) return

    const bounds = target.getBoundingClientRect()
    gsap.to(target, {
      x: (event.clientX - bounds.left - bounds.width / 2) * 0.025,
      y: (event.clientY - bounds.top - bounds.height / 2) * 0.025,
      duration: 0.24,
      ease: 'power2.out',
      overwrite: true,
    })
  }

  function handleNavigationPointerLeave() {
    const navigation = navigationRef.current
    if (!navigation || window.innerWidth <= 900) return
    gsap.to(navigation.querySelectorAll('[data-nav-item]'), { x: 0, y: 0, duration: 0.25, ease: 'power2.out', overwrite: true })
    moveIndicator(activeNavigationItem())
  }

  useLayoutEffect(() => {
    const navigation = navigationRef.current
    const indicator = activeIndicatorRef.current
    if (!navigation || !indicator) return undefined

    const updateIndicator = () => moveIndicator(activeNavigationItem(), 0.24)
    updateIndicator()
    const observer = new ResizeObserver(updateIndicator)
    observer.observe(navigation)
    navigation.querySelectorAll('[data-nav-item]').forEach((item) => observer.observe(item))
    window.addEventListener('resize', updateIndicator)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateIndicator)
      gsap.killTweensOf(indicator)
      gsap.killTweensOf(navigation.querySelectorAll('[data-nav-item]'))
    }
  }, [pathname, servicesActive])

  useEffect(() => {
    function updateScrollState() {
      setIsScrolled(window.scrollY > 24)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    function closeOnOutsidePointer(event) {
      if (!headerRef.current?.contains(event.target)) setOpenedLocationKey(null)
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setOpenedLocationKey(null)
        menuToggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePointer)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  function closeMenu() {
    setOpenedLocationKey(null)
  }

  return (
    <header className={`dw-header${isScrolled ? ' is-scrolled' : ''}`} ref={headerRef}>
      <div className="dw-header-inner">
        <Link className="brand" to="/" aria-label="Davidson Well Drilling home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-copy">
            <strong>Davidson</strong>
            <small>WELL DRILLING, INC.</small>
          </span>
        </Link>

        <button
          ref={menuToggleRef}
          className="dw-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setOpenedLocationKey(menuOpen ? null : key)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav
          ref={navigationRef}
          className={`dw-navigation${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
          onPointerOver={handleNavigationPointerOver}
          onPointerMove={handleNavigationPointerMove}
          onPointerLeave={handleNavigationPointerLeave}
        >
          <NavLink data-nav-item className={({ isActive }) => `dw-nav-link${isActive ? ' active' : ''}`} to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <ServicesDropdown onNavigate={closeMenu} active={servicesActive} />
          <NavLink data-nav-item className={({ isActive }) => `dw-nav-link${isActive ? ' active' : ''}`} to="/about-us" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink data-nav-item className={({ isActive }) => `dw-nav-link${isActive ? ' active' : ''}`} to="/our-work" onClick={closeMenu}>
            Our Work
          </NavLink>
          <NavLink data-nav-item className={({ isActive }) => `dw-nav-link${isActive ? ' active' : ''}`} to="/faqs" onClick={closeMenu}>
            FAQs
          </NavLink>
          <NavLink data-nav-item className={({ isActive }) => `dw-nav-link${isActive ? ' active' : ''}`} to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
          <span className="dw-nav-indicator" ref={activeIndicatorRef} aria-hidden="true" />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
