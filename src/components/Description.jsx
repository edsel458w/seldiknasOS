import React from 'react'
import { Cpu, Shield, BookOpen } from 'lucide-react'
import './Description.css'

function Description() {
  return (
    <section id="about" className="description">
      <div className="description-container">
        <div className="description-content">
          <h2 className="section-title">Tentang Seldiknas OS</h2>
          <p className="description-text">
            Seldiknas OS adalah sistem operasi custom berbasis Ubuntu Linux yang 
            dirancang khusus untuk memenuhi kebutuhan dunia pendidikan di Indonesia. 
            Dibangun di atas fondasi yang kuat dan terbukti dari Ubuntu, OS ini 
            menggabungkan stabilitas, keamanan, dan kemudahan penggunaan dalam satu 
            paket lengkap.
          </p>
          <div className="description-features">
            <div className="desc-feature">
              <div className="desc-feature-icon">
                <Cpu size={32} />
              </div>
              <h3>Berbasis Ubuntu</h3>
              <p>Leverage dari stabilitas dan keandalan Ubuntu yang telah teruji</p>
            </div>
            <div className="desc-feature">
              <div className="desc-feature-icon">
                <Shield size={32} />
              </div>
              <h3>Aman & Terpercaya</h3>
              <p>Keamanan tingkat enterprise dengan update berkala</p>
            </div>
            <div className="desc-feature">
              <div className="desc-feature-icon">
                <BookOpen size={32} />
              </div>
              <h3>Fokus Pendidikan</h3>
              <p>Dilengkapi dengan aplikasi dan tools untuk pembelajaran</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description

