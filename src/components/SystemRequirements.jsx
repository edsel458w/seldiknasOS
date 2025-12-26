import React from 'react'
import { Cpu, HardDrive, Monitor, MemoryStick, CheckCircle } from 'lucide-react'
import './SystemRequirements.css'

function SystemRequirements() {
  const requirements = [
    {
      icon: <Cpu size={24} />,
      label: 'Processor',
      value: 'Dual-core 64-bit',
      minimum: 'Intel Core i3 / AMD Equivalent'
    },
    {
      icon: <MemoryStick size={24} />,
      label: 'RAM',
      value: '4 GB',
      minimum: '8 GB recommended untuk performa optimal'
    },
    {
      icon: <HardDrive size={24} />,
      label: 'Storage',
      value: '25 GB',
      minimum: '50 GB recommended untuk aplikasi dan data'
    },
    {
      icon: <Monitor size={24} />,
      label: 'Display',
      value: '1024x768',
      minimum: '1920x1080 atau lebih tinggi recommended'
    }
  ]

  return (
    <section id="requirements" className="system-requirements">
      <div className="requirements-container">
        <div className="requirements-header">
          <h2 className="section-title">Spesifikasi Sistem Minimum</h2>
          <p className="section-subtitle">
            Persyaratan hardware untuk menjalankan Seldiknas OS dengan lancar
          </p>
        </div>
        <div className="requirements-grid">
          {requirements.map((req, index) => (
            <div key={index} className="requirement-card">
              <div className="requirement-icon">
                {req.icon}
              </div>
              <div className="requirement-content">
                <div className="requirement-label">{req.label}</div>
                <div className="requirement-value">{req.value}</div>
                <div className="requirement-minimum">
                  <CheckCircle size={16} />
                  <span>{req.minimum}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="requirements-note">
          <p>
            <strong>Catatan:</strong> Sistem operasi ini dapat dijalankan melalui 
            virtual machine atau langsung di hardware. Pastikan hardware Anda 
            mendukung virtualisasi jika ingin menggunakan VM.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SystemRequirements

