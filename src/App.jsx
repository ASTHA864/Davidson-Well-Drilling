import { useEffect } from 'react'
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import WaterWellDrilling from './pages/WaterWellDrilling.jsx'
import HydroFracturing from './pages/HydroFracturing.jsx'
import GeothermalGroundLoops from './pages/GeothermalGroundLoops.jsx'
import AboutUs from './pages/AboutUs.jsx'
import OurWork from './pages/OurWork.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

const pageMetadata = {
  '/': ['Davidson Well Drilling | Northeast Georgia & Western South Carolina', 'Family-owned well drilling, pump service, hydrofracturing, and geothermal ground loop installation serving Northeast Georgia and Western South Carolina since 1973.'],
  '/index.html': ['Davidson Well Drilling | Northeast Georgia & Western South Carolina', 'Family-owned well drilling, pump service, hydrofracturing, and geothermal ground loop installation serving Northeast Georgia and Western South Carolina since 1973.'],
  '/services': ['Drilling Services | Davidson Well Drilling', 'Explore water well drilling, hydrofracturing, geothermal ground loop drilling, and pump sales and service from Davidson Well Drilling.'],
  '/water-well-drilling': ['Water Well Drilling | Davidson Well Drilling', 'Drilled water wells and well systems for residential and commercial water supply in Northeast Georgia and Western South Carolina.'],
  '/hydro-fracturing': ['Hydrofracturing | Davidson Well Drilling', 'Learn when water-only hydrofracturing may be considered for a low-yield well. Results depend on well conditions and are not guaranteed.'],
  '/geothermal-ground-loops': ['Geothermal Ground Loop Systems | Davidson Well Drilling', 'Learn about vertical ground loop drilling, down-hole installation, transfer medium, and coordination with geothermal or HVAC contractors.'],
  '/about-us': ['About Davidson Well Drilling | Serving Since 1973', 'Meet Davidson Well Drilling, a family-owned and operated business serving Northeast Georgia and Western South Carolina since 1973.'],
  '/our-work': ['Our Work | Davidson Well Drilling', 'Representative images illustrate water well drilling and geothermal ground loop services offered by Davidson Well Drilling.'],
  '/faqs': ['FAQs | Davidson Well Drilling', 'Answers to common questions about Davidson Well Drilling, water wells, hydrofracturing, and geothermal ground loop systems.'],
  '/contact': ['Contact Davidson Well Drilling', 'Contact Davidson Well Drilling in Turnerville, Georgia for well drilling, pump service, hydrofracturing, or geothermal ground loop installation.'],
}

function LegacyHashRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const oldRoutes = {
      '#services': '/services',
      '#hydrofrac': '/hydro-fracturing',
      '#hydro-fracturing': '/hydro-fracturing',
      '#geothermal': '/geothermal-ground-loops',
      '#products': '/services#additional-services',
      '#about': '/about-us',
      '#faq': '/faqs',
      '#contact': '/contact',
    }
    const destination = oldRoutes[location.hash.toLowerCase()]
    if (location.pathname.toLowerCase() === '/index.html') {
      navigate(destination || '/', { replace: true })
    } else if (location.pathname === '/' && destination) {
      navigate(destination, { replace: true })
    }
  }, [location.hash, location.pathname, navigate])

  return null
}

function PageMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const [title, description] = pageMetadata[pathname] || ['Page Not Found | Davidson Well Drilling', 'The requested Davidson Well Drilling page could not be found.']
    document.title = title
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.append(descriptionTag)
    }
    descriptionTag.content = description
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.rel = 'canonical'
      document.head.append(canonicalTag)
    }
    const canonicalPath = pathname === '/index.html' ? '/' : pathname
    canonicalTag.href = new URL(canonicalPath, window.location.origin).href
  }, [pathname])

  return null
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }, [hash, pathname])
  return null
}

function NotFound() {
  return (
    <main className="not-found section-wrap">
      <p className="eyebrow">404 · Page not found</p>
      <h1>Looks like this trail ran dry.</h1>
      <p>The page you’re looking for isn’t here. Head back home or get in touch with our team.</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </main>
  )
}

function App() {
  return (
    <>
      <LegacyHashRedirect />
      <PageMetadata />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/water-well-drilling" element={<WaterWellDrilling />} />
        <Route path="/hydro-fracturing" element={<HydroFracturing />} />
        <Route path="/geothermal-ground-loops" element={<GeothermalGroundLoops />} />
        <Route path="/ground-loop-systems" element={<Navigate to="/geothermal-ground-loops" replace />} />
        <Route path="/vertical-ground-loop-drilling" element={<Navigate to="/geothermal-ground-loops#vertical-drilling" replace />} />
        <Route path="/down-hole-installation" element={<Navigate to="/geothermal-ground-loops#down-hole-installation" replace />} />
        <Route path="/geothermal-products" element={<Navigate to="/services#additional-services" replace />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
