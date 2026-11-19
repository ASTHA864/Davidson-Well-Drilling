import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import HydroFracturing from './pages/HydroFracturing.jsx'
import GeothermalProducts from './pages/GeothermalProducts.jsx'
import AboutUs from './pages/AboutUs.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

const pageMetadata = {
  '/': ['Davidson Well Drilling | Northeast Georgia & Western South Carolina', 'Family-owned well drilling, pump service, hydrofracturing, and geothermal ground loop installation serving Northeast Georgia and Western South Carolina since 1973.'],
  '/services': ['Well Drilling & Pump Services | Davidson Well Drilling', 'Explore water well drilling, well systems, pump sales and service, hydrofracturing, geothermal loop drilling, trenching, excavation, and well abandonment.'],
  '/hydro-fracturing': ['Hydro-Fracturing | Davidson Well Drilling', 'Learn how water-only hydrofracturing can help restore flow in some low-yield wells. Contact Davidson Well Drilling to discuss your well.'],
  '/geothermal-products': ['Geothermal Ground Loops & Pumps | Davidson Well Drilling', 'Davidson Well Drilling provides vertical geothermal ground loop drilling and down-hole installation, and carries, services, and installs Franklin Electric submersible pumps.'],
  '/about-us': ['About Davidson Well Drilling | Serving Since 1973', 'Meet Davidson Well Drilling, a family-owned and operated business serving Northeast Georgia and Western South Carolina since 1973.'],
  '/faq': ['Well Drilling FAQs | Davidson Well Drilling', 'Answers to common questions about well drilling, hydrofracturing, geothermal ground loops, pumps, and services.'],
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
      '#geothermal': '/geothermal-products',
      '#products': '/geothermal-products',
      '#about': '/about-us',
      '#faq': '/faq',
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
      <a className="button button-primary" href="/">Back to home</a>
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
        <Route path="/hydro-fracturing" element={<HydroFracturing />} />
        <Route path="/geothermal-products" element={<GeothermalProducts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
