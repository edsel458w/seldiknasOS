import React from 'react'
import Hero from './components/Hero'
import Description from './components/Description'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import SystemRequirements from './components/SystemRequirements'
import Footer from './components/Footer'
import DownloadModal from './components/DownloadModal'
import './App.css'

function App() {
  const [showDownloadModal, setShowDownloadModal] = React.useState(false)

  return (
    <div className="App">
      <Hero onDownloadClick={() => setShowDownloadModal(true)} />
      <Description />
      <Features />
      <Screenshots />
      <SystemRequirements />
      <Footer onDownloadClick={() => setShowDownloadModal(true)} />
      <DownloadModal 
        isOpen={showDownloadModal} 
        onClose={() => setShowDownloadModal(false)} 
      />
    </div>
  )
}

export default App

