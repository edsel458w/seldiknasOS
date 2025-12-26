import React from 'react'
import { Download, ArrowRight, Sparkles } from 'lucide-react'
import './Hero.css'

function Hero({ onDownloadClick }) {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Sistem Operasi Pendidikan Nasional</span>
        </div>
        <h1 className="hero-title">
          <span className="title-main">Seldiknas OS</span>
          <span className="title-glow">Seldiknas OS</span>
        </h1>
        <p className="hero-tagline">
          Sistem operasi berbasis Ubuntu Linux yang dirancang khusus untuk 
          dunia pendidikan Indonesia. Kuat, aman, dan mudah digunakan.
        </p>
        <div className="hero-cta">
          <button className="btn-download-primary" onClick={() => { window.location.href = '/download.html' }}>
            <Download size={24} />
            <span>Download Sekarang</span>
            <ArrowRight size={20} />
          </button>
          <button 
            className="btn-learn-more"
            onClick={() => {
              document.querySelector('.description')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">Ubuntu</div>
            <div className="stat-label">Basis Sistem</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Open Source</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Gratis</div>
            <div className="stat-label">Selamanya</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero

