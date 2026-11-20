import { useRef } from 'react'
import HomeAbout from '../components/HomeAbout.jsx'
import HomeHero from '../components/HomeHero.jsx'
import HomeServices from '../components/HomeServices.jsx'
import HomeWork from '../components/HomeWork.jsx'
import HomeWhyChoose from '../components/HomeWhyChoose.jsx'
import ProjectInvitation from '../components/ProjectInvitation.jsx'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'

function Home() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="dw-home" ref={pageRef}>
      <HomeHero />
      <HomeAbout />
      <HomeWhyChoose />
      <HomeServices />
      <HomeWork />
      <div className="dw-home-contact section-wrap">
        <ProjectInvitation
          description="Contact Davidson Well Drilling to discuss your water well or geothermal ground loop project."
          actionLabel="Contact our team"
        />
      </div>
    </main>
  )
}

export default Home
