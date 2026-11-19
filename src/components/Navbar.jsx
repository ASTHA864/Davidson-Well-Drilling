import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiMenu, FiPhone, FiX } from 'react-icons/fi'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Hydro-Fracturing', '/hydro-fracturing'],
  ['Geothermal Products', '/geothermal-products'],
  ['About Us', '/about-us'],
  ['FAQ', '/faq'],
  ['Contact', '/contact'],
]

function Navbar() {
  const [openedAtPath, setOpenedAtPath] = useState(null)
  const { pathname } = useLocation()
  const menuOpen = openedAtPath === pathname
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Davidson Well Drilling home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-copy"><strong>Davidson</strong><small>WELL DRILLING, INC.</small></span>
        </Link>
        <div className="mobile-header-actions">
          <a className="mobile-call" href="tel:+17067546033" aria-label="Call Davidson Well Drilling at (706) 754-6033">
            <FiPhone aria-hidden="true" />
          </a>
          <Link className="button button-primary mobile-quote" to="/contact#quote" onClick={() => setOpenedAtPath(null)} aria-label="Request a Quote">
            <span className="mobile-quote-full">Request a Quote</span>
            <span className="mobile-quote-short" aria-hidden="true">Quote</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setOpenedAtPath(menuOpen ? null : pathname)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <div className="nav-links">
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpenedAtPath(null)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                {label}
              </NavLink>
            ))}
          </div>
          <Link className="button button-primary nav-quote" to="/contact#quote" onClick={() => setOpenedAtPath(null)}>
            Request a Quote <FiArrowUpRight aria-hidden="true" />
          </Link>
        </nav>
      </div>
      {menuOpen && <button className="nav-backdrop" aria-label="Close navigation menu" onClick={() => setOpenedAtPath(null)} />}
    </header>
  )
}

export default Navbar