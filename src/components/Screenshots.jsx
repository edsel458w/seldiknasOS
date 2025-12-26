import React from 'react'
import { Monitor, ChevronLeft, ChevronRight } from 'lucide-react'
import './Screenshots.css'

function Screenshots() {
  const screenshots = [
    {
      id: 1,
      title: 'Desktop Environment',
      description: 'Interface modern dan intuitif dengan desktop yang bersih'
    },
    {
      id: 2,
      title: 'Application Menu',
      description: 'Akses cepat ke semua aplikasi yang terinstall'
    },
    {
      id: 3,
      title: 'File Manager',
      description: 'Manajemen file yang powerful dan mudah digunakan'
    },
    {
      id: 4,
      title: 'System Settings',
      description: 'Kontrol penuh atas pengaturan sistem Anda'
    }
  ]

  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="screenshots">
      <div className="screenshots-container">
        <div className="screenshots-header">
          <h2 className="section-title">Tampilan Sistem</h2>
          <p className="section-subtitle">
            Lihat sekilas tampilan Seldiknas OS yang modern dan elegan
          </p>
        </div>
        <div className="screenshots-carousel">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot) => (
                <div key={screenshot.id} className="screenshot-slide">
                  <div className="screenshot-preview">
                    <div className="screenshot-placeholder">
                      <Monitor size={64} />
                      <p>Preview {screenshot.title}</p>
                      <div className="screenshot-gradient"></div>
                    </div>
                  </div>
                  <div className="screenshot-info">
                    <h3>{screenshot.title}</h3>
                    <p>{screenshot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="carousel-indicators">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots

