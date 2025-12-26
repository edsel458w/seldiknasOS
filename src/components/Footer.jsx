import React from 'react'
import { Download, Github, Mail, Globe, Heart } from 'lucide-react'
import './Footer.css'

function Footer({ onDownloadClick }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Seldiknas OS</h3>
            <p className="footer-description">
              Sistem operasi berbasis Ubuntu Linux yang dirancang khusus untuk 
              dunia pendidikan Indonesia.
            </p>
            <button className="footer-download-btn" onClick={() => { window.location.href = '/download.html' }}>
              <Download size={20} />
              <span>Download Sekarang</span>
            </button>
          </div>
          
          <div className="footer-section footer-links">
            <h4>Links</h4>
            <ul>
              <li><a href="#features">Fitur</a></li>
              <li><a href="#screenshots">Tampilan</a></li>
              <li><a href="#requirements">Spesifikasi</a></li>
              <li><a href="#about">Tentang</a></li>
            </ul>
          </div>
          
          <div className="footer-section footer-resources">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Dokumentasi</a></li>
              <li><a href="#">Panduan Instalasi</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href="mailto:info@seldiknas.os" className="contact-link">
                  <Mail size={18} />
                  <span>info@seldiknas.os</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/seldiknas" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="contact-link">
                  <Globe size={18} />
                  <span>Website</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Dibuat dengan <Heart size={16} /> untuk Pendidikan Indonesia
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Seldiknas OS. Open Source License.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

