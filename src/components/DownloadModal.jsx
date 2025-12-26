import React, { useEffect, useRef } from 'react'
import { X, Download, FileDown, HardDrive, Info } from 'lucide-react'
import './DownloadModal.css'

function DownloadModal({ isOpen, onClose }) {
  const scrollY = useRef(0)

  useEffect(() => {
    // Preserve scroll position when modal opens to avoid layout jump
    if (isOpen) {
      scrollY.current = window.scrollY || window.pageYOffset
      // lock body in place to avoid layout jump
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      // disable smooth scrolling temporarily to avoid odd behaviors on restore
      document.documentElement.style.scrollBehavior = 'auto'
    } else {
      // restore scroll position and body styles
      const prev = Math.abs(parseInt(document.body.style.top || '0', 10)) || 0
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.documentElement.style.scrollBehavior = ''
      window.scrollTo(0, prev)
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.documentElement.style.scrollBehavior = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const downloadOptions = [
    {
      type: 'ISO Image',
      size: '3.2 GB',
      description: 'Untuk instalasi langsung atau membuat USB bootable',
      icon: <HardDrive size={24} />
    },
    {
      type: 'Torrent',
      size: '3.2 GB',
      description: 'Download menggunakan BitTorrent untuk kecepatan lebih baik',
      icon: <Download size={24} />
    },
    {
      type: 'SHA256 Checksum',
      size: '256 bytes',
      description: 'Untuk verifikasi integritas file ISO',
      icon: <FileDown size={24} />
    }
  ]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">
            <Download size={48} />
          </div>
          <h2>Download Seldiknas OS</h2>
          <p>Pilih metode download yang sesuai dengan kebutuhan Anda</p>
        </div>
        
        <div className="download-options">
          {downloadOptions.map((option, index) => (
            <div key={index} className="download-option">
              <div className="option-icon">
                {option.icon}
              </div>
              <div className="option-content">
                <h3>{option.type}</h3>
                <p>{option.description}</p>
                <div className="option-size">{option.size}</div>
              </div>
              <button className="option-download-btn" onClick={() => { window.location.href = '/download.html' }}>
                Download
              </button>
            </div>
          ))}
        </div>
        
        <div className="download-info">
          <Info size={20} />
          <div>
            <strong>Catatan Penting:</strong>
            <ul>
              <li>Pastikan Anda memiliki koneksi internet yang stabil</li>
              <li>Verifikasi file ISO menggunakan SHA256 checksum setelah download</li>
              <li>Minimum 8 GB USB drive diperlukan untuk membuat bootable USB</li>
              <li>Rujuk ke dokumentasi untuk panduan instalasi lengkap</li>
            </ul>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

export default DownloadModal

