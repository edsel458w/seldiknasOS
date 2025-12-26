import React from 'react'
import { Zap, Lock, Palette, Layers, Code, Users, FileText } from 'lucide-react'
import './Features.css'

function Features() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Kinerja Tinggi',
      description: 'Optimasi untuk performa maksimal dengan boot time cepat dan penggunaan resource yang efisien.',
      gradient: 'var(--gradient-1)'
    },
    {
      icon: <Lock size={32} />,
      title: 'Keamanan Terdepan',
      description: 'Built-in firewall, encryption, dan sistem keamanan multi-layer untuk melindungi data Anda.',
      gradient: 'var(--gradient-2)'
    },
    {
      icon: <Palette size={32} />,
      title: 'Interface Modern',
      description: 'Desktop environment yang indah dan intuitif dengan dukungan tema dan kustomisasi penuh.',
      gradient: 'var(--gradient-3)'
    },
    {
      icon: <Layers size={32} />,
      title: 'Pre-installed Apps',
      description: 'Sudah dilengkapi dengan aplikasi produktivitas, edukasi, dan perkantoran siap pakai.',
      gradient: 'var(--gradient-1)'
    },
    {
      icon: <Code size={32} />,
      title: 'Developer Friendly',
      description: 'Full support untuk development tools, programming languages, dan containerization.',
      gradient: 'var(--gradient-2)'
    },
    {
      icon: <Users size={32} />,
      title: 'Multi-User Support',
      description: 'Sistem manajemen user yang powerful untuk lingkungan sekolah dan institusi.',
      gradient: 'var(--gradient-3)'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Fitur Unggulan</h2>
          <p className="section-subtitle">
            Dilengkapi dengan fitur-fitur terbaik untuk pengalaman computing yang optimal
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div 
                className="feature-icon"
                style={{ background: feature.gradient }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

