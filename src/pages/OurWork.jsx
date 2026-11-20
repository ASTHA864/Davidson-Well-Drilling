import { useRef } from 'react'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'
import { workGallery } from '../data/workGallery.js'

function OurWork() {
  const pageRef = useRef(null)
  useGsapScrollReveal(pageRef)

  return (
    <main className="editorial-page work-page" ref={pageRef}>
      <section className="editorial-intro work-intro">
        <p className="eyebrow" data-reveal>Our work</p>
        <h1 data-reveal>Drilling equipment.<span>Field work.</span></h1>
        <p className="editorial-lede" data-reveal>
          A look at the types of drilling and installation work Davidson
          provides. The representative images are illustrations, not
          documented Davidson projects.
        </p>
      </section>

      <section className="work-gallery section-wrap" aria-labelledby="work-gallery-heading">
        <div className="story-section-heading" data-reveal>
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 id="work-gallery-heading">Davidson drilling equipment.</h2>
          </div>
          <p>Representative images illustrate these services; no project outcomes are implied.</p>
        </div>
        <div className="work-gallery-grid">
          {workGallery.map((image, index) => (
            <figure className={`work-gallery-item${index === 0 ? ' work-gallery-feature' : ''}`} key={image.src} data-reveal>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}

export default OurWork
