import { useEffect, useRef, useState } from 'react'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useGsapScrollReveal from '../hooks/useGsapScrollReveal.js'
import { drillingServices } from '../data/drillingServices.js'
import { workGallery } from '../data/workGallery.js'

function OurWork() {
  const pageRef = useRef(null)
  const dialogRef = useRef(null)
  const galleryTriggerRef = useRef(null)
  const [activeImage, setActiveImage] = useState(null)
  useGsapScrollReveal(pageRef)

  useEffect(() => {
    if (activeImage && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal()
    }
  }, [activeImage])

  function closeGallery() {
    if (dialogRef.current?.open) dialogRef.current.close()
    setActiveImage(null)
  }

  function moveGalleryImage(direction) {
    const activeIndex = workGallery.findIndex((image) => image.src === activeImage?.src)
    const nextIndex = (activeIndex + direction + workGallery.length) % workGallery.length
    setActiveImage(workGallery[nextIndex])
  }

  function handleDialogKeyDown(event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

    event.preventDefault()
    moveGalleryImage(event.key === 'ArrowRight' ? 1 : -1)
  }

  return (
    <main className="editorial-page work-page" ref={pageRef}>
      <header className="work-page-hero">
        <div className="work-page-hero-copy">
          <p className="eyebrow" data-reveal>Our work · In the field</p>
          <h1 data-reveal>
            Behind Every Project,
            <span>There’s Groundwork.</span>
          </h1>
          <p className="work-page-hero-description" data-reveal>
            A closer look at the drilling equipment, field operations, and installation work that support Davidson Well Drilling&apos;s services.
          </p>
        </div>
        <aside className="work-page-index" data-reveal>
          <span className="work-page-index-label">FIELD GUIDE / 01</span>
          <p>Drilling work shaped by the conditions beneath each site.</p>
          <span className="work-page-index-rule" aria-hidden="true" />
          <Link to="/services">Explore service scope <FiArrowUpRight aria-hidden="true" /></Link>
        </aside>
      </header>

      <section className="work-gallery-section" aria-labelledby="work-gallery-heading">
        <div className="work-gallery-intro section-wrap" data-reveal>
          <div>
            <p className="eyebrow">A closer look</p>
            <h2 id="work-gallery-heading">The work behind reliable service.</h2>
          </div>
          <p>These images illustrate the types of work Davidson provides. They are not represented as customer projects or job-site records.</p>
        </div>
        <div className="work-editorial-gallery section-wrap">
          {workGallery.map((image, index) => (
            <button
              aria-label={`View representative image: ${image.category}`}
              className={`work-story-card work-story-card-${index + 1}`}
              data-reveal
              onClick={(event) => {
                galleryTriggerRef.current = event.currentTarget
                setActiveImage(image)
              }}
              key={image.src}
              type="button"
            >
              <img data-image-reveal src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <span className="work-story-category">{image.category}</span>
              <span className="work-story-caption">{image.caption}</span>
              <span className="work-story-arrow" aria-hidden="true"><FiArrowUpRight /></span>
            </button>
          ))}
        </div>
      </section>

      {activeImage && (
        <dialog
          aria-describedby="work-lightbox-description"
          aria-labelledby="work-lightbox-title"
          className="work-lightbox"
          onCancel={(event) => {
            event.preventDefault()
            closeGallery()
          }}
          onClick={(event) => {
            if (event.target === dialogRef.current) closeGallery()
          }}
          onClose={() => {
            setActiveImage(null)
            galleryTriggerRef.current?.focus()
          }}
          onKeyDown={handleDialogKeyDown}
          ref={dialogRef}
        >
          <div className="work-lightbox-content">
            <div className="work-lightbox-header">
              <div>
                <p className="eyebrow">Representative image</p>
                <h2 id="work-lightbox-title">{activeImage.category}</h2>
              </div>
              <button className="work-lightbox-close" onClick={closeGallery} type="button" aria-label="Close image viewer"><FiX aria-hidden="true" /></button>
            </div>
            <img src={activeImage.src} alt={activeImage.alt} decoding="async" />
            <div className="work-lightbox-footer">
              <p id="work-lightbox-description">{activeImage.caption}. This image illustrates the type of work and is not a customer project record.</p>
              <div className="work-lightbox-actions">
                <button onClick={() => moveGalleryImage(-1)} type="button">Previous</button>
                <button onClick={() => moveGalleryImage(1)} type="button">Next</button>
                <Link to={activeImage.to}>Explore service <FiArrowUpRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </dialog>
      )}

      <section className="work-expertise-section" aria-labelledby="work-expertise-heading">
        <div className="work-expertise-heading section-wrap" data-reveal>
          <div>
            <p className="eyebrow">Services</p>
            <h2 id="work-expertise-heading">Our Expertise Goes Beyond Drilling.</h2>
          </div>
          <p>Explore the services and project-specific work Davidson provides across the region.</p>
        </div>
        <div className="work-expertise-cards section-wrap">
          {drillingServices.map(({ number, icon: Icon, title, description, to }) => {
            const serviceTitle = title === 'Geothermal Ground Loop Systems' ? 'Geothermal Ground Loops' : title

            return (
              <Link className="work-expertise-card" data-reveal key={to} to={to}>
                <span className="work-expertise-card-top">
                  <span>{number}</span>
                  <span className="work-expertise-icon"><Icon aria-hidden="true" /></span>
                </span>
                <span className="work-expertise-card-title">{serviceTitle}</span>
                <span className="work-expertise-card-description">{description}</span>
                <span className="work-expertise-card-link">Explore service <FiArrowUpRight aria-hidden="true" /></span>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default OurWork
